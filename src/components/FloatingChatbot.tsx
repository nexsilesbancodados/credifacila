import { useEffect, useRef, useState } from "react";
import { Sparkles, Send, X, Loader2, MessageCircle } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Olá! 👋 Sou a **Luri**, assistente virtual da **Credifácil**. Posso te ajudar com dúvidas sobre crédito pessoal, consignado, securitizadora e nossa conta digital. Como posso te ajudar hoje?",
};

const QUICK_PROMPTS = [
  "Como funciona o crédito consignado?",
  "Quais documentos preciso enviar?",
  "Quanto tempo leva a análise?",
];

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
  signal,
}: {
  messages: Msg[];
  onDelta: (chunk: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
  signal?: AbortSignal;
}) {
  let resp: Response;
  try {
    resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
      signal,
    });
  } catch (e) {
    onError("Não conseguimos falar com a IA agora. Tente novamente.");
    return;
  }

  if (!resp.ok || !resp.body) {
    if (resp.status === 429) onError("Muitas mensagens em sequência. Aguarde alguns segundos.");
    else if (resp.status === 402) onError("Créditos da IA esgotados. Tente mais tarde.");
    else onError("Falha ao processar sua mensagem.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") {
        streamDone = true;
        break;
      }
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  onDone();
}

/** Lightweight markdown: **bold**, *italic*, line breaks. */
const renderInline = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1]) parts.push(<strong key={key++} className="font-bold text-brand-gold">{match[1]}</strong>);
    else if (match[2]) parts.push(<em key={key++}>{match[2]}</em>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};

const Markdown = ({ children }: { children: string }) => (
  <>
    {children.split("\n").map((line, i) => (
      <span key={i} className="block">
        {line ? renderInline(line) : "\u00A0"}
      </span>
    ))}
  </>
);

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;
    setError(null);
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && last !== WELCOME && prev.length > 1) {
          // only replace if it's the in-flight assistant message we just created
          if (last.content === "" || prev[prev.length - 2]?.role === "user") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
          }
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    abortRef.current = new AbortController();
    // Pass everything except the welcome message to the model.
    const history = messages.filter((m) => m !== WELCOME).concat(userMsg);
    await streamChat({
      messages: history,
      onDelta: upsert,
      onDone: () => setLoading(false),
      onError: (msg) => {
        setError(msg);
        setLoading(false);
      },
      signal: abortRef.current.signal,
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  if (!shown) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {open && (
        <div
          className="animate-fade-in flex h-[560px] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-brand-gold/30 bg-[hsl(0_0%_5%)] shadow-[0_30px_80px_-20px_hsl(42_78%_50%/0.45),0_20px_60px_-15px_hsl(0_0%_0%/0.8)] backdrop-blur-xl"
          role="dialog"
          aria-label="Assistente Credifácil"
        >
          {/* Header */}
          <div
            className="relative flex items-center justify-between gap-3 px-4 py-3.5"
            style={{
              background:
                "linear-gradient(135deg, hsl(0 0% 7%) 0%, hsl(0 0% 4%) 100%)",
              borderBottom: "1px solid hsl(42 78% 55% / 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(42 78% 55% / 0.6), transparent)",
              }}
            />
            <div className="flex items-center gap-3">
              <span
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[hsl(0_0%_5%)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(44 92% 70%), hsl(42 78% 55%) 50%, hsl(38 75% 42%))",
                  boxShadow: "0 6px 20px -4px hsl(42 78% 55% / 0.6)",
                }}
              >
                <Sparkles className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[14px] font-extrabold tracking-tight text-white">
                  Luri · Credifácil
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold/80">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  </span>
                  Assistente IA · online
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
              className="rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/5 hover:text-brand-gold"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            style={{
              background:
                "radial-gradient(ellipse at top right, hsl(42 78% 55% / 0.06), transparent 60%), hsl(0 0% 4%)",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md px-3.5 py-2.5 text-[13.5px] leading-relaxed text-[hsl(0_0%_5%)] shadow-[0_6px_20px_-6px_hsl(42_78%_50%/0.5)]"
                      : "max-w-[88%] rounded-2xl rounded-bl-md border border-white/8 bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-white/90 backdrop-blur-sm"
                  }
                  style={
                    m.role === "user"
                      ? {
                          background:
                            "linear-gradient(135deg, hsl(44 92% 70%), hsl(42 78% 55%) 60%, hsl(38 75% 45%))",
                        }
                      : undefined
                  }
                >
                  <Markdown>{m.content}</Markdown>
                </div>
              </div>
            ))}

            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/8 bg-white/[0.04] px-3.5 py-3 text-[13px] text-white/60">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-brand-gold" />
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-gold/70 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-gold/70 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-gold/70 [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-[12px] text-red-300">
                {error}
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Sugestões
                </div>
                <div className="flex flex-col gap-1.5">
                  {QUICK_PROMPTS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-brand-gold/20 bg-brand-gold/[0.04] px-3 py-2 text-left text-[12.5px] text-white/80 transition-all hover:border-brand-gold/50 hover:bg-brand-gold/[0.08] hover:text-white"
                    >
                      <span>{q}</span>
                      <Send className="h-3 w-3 text-brand-gold/60 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-gold" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="relative border-t border-brand-gold/15 bg-[hsl(0_0%_3%)] p-3"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors focus-within:border-brand-gold/50">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Pergunte sobre crédito, simulação, prazos..."
                className="max-h-24 flex-1 resize-none bg-transparent text-[13px] leading-relaxed text-white placeholder:text-white/35 focus:outline-none"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Enviar mensagem"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[hsl(0_0%_5%)] transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(44 92% 70%), hsl(42 78% 55%))",
                  boxShadow: "0 4px 12px -2px hsl(42 78% 50% / 0.5)",
                }}
              >
                {loading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" strokeWidth={2.2} />
                )}
              </button>
            </div>
            <div className="mt-2 text-center text-[10px] text-white/30">
              Respostas geradas por IA · podem conter imprecisões
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar assistente" : "Abrir assistente Credifácil"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full text-[hsl(0_0%_5%)] transition-all hover:scale-110"
        style={{
          background:
            "linear-gradient(135deg, hsl(44 92% 70%) 0%, hsl(42 78% 55%) 50%, hsl(38 75% 42%) 100%)",
          boxShadow:
            "0 14px 40px -8px hsl(42 78% 55% / 0.7), 0 0 0 1px hsl(42 78% 55% / 0.4) inset",
        }}
      >
        <span
          className="pointer-events-none absolute inset-0 -z-10 animate-pulse rounded-full"
          style={{ background: "hsl(42 78% 55% / 0.35)" }}
          aria-hidden
        />
        {open ? (
          <X className="h-5 w-5" strokeWidth={2.4} />
        ) : (
          <div className="relative">
            <Sparkles className="h-6 w-6" strokeWidth={2.2} />
            <span
              className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[hsl(0_0%_5%)] bg-[hsl(0_0%_5%)] text-brand-gold"
              aria-hidden
            >
              <MessageCircle className="h-2 w-2" strokeWidth={3} fill="currentColor" />
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;