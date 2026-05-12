import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const ENDPOINT = `https://${PROJECT_ID}.supabase.co/functions/v1/chat`;

const LuriChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Olá! Eu sou a Luri 💙 Posso ajudar com crédito consignado, antecipação de recebíveis, conta digital ou investimentos. Como posso te ajudar?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("luri:open", handler);
    return () => window.removeEventListener("luri:open", handler);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next = [...msgs, { role: "user" as const, content: text }];
    setMsgs(next);
    setInput("");
    setLoading(true);

    try {
      const r = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!r.ok || !r.body) {
        const j = await r.json().catch(() => ({}));
        setMsgs((m) => [...m, { role: "assistant", content: j.error || "Tive um problema agora. Tente novamente em instantes." }]);
        return;
      }

      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistant = "";
      setMsgs((m) => [...m, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          const t = line.trim();
          if (!t.startsWith("data:")) continue;
          const data = t.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              assistant += delta;
              setMsgs((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: assistant };
                return copy;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Erro de conexão. Tente novamente." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat com a Luri"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--navy))] text-white shadow-[0_10px_30px_-8px_hsl(var(--royal)/0.6)] transition hover:scale-105 lg:bottom-24 lg:right-6"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[hsl(var(--royal))/0.4]" />
        <MessageCircle className="relative h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-44 right-3 z-50 flex h-[min(560px,calc(100vh-200px))] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[hsl(var(--navy-deep))] text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] lg:bottom-44 lg:right-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[hsl(var(--royal))/0.3] to-[hsl(var(--navy))/0.3] px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[hsl(var(--gold))/0.2] text-[hsl(var(--gold-soft))]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-extrabold leading-tight">Luri</p>
                  <p className="text-[11px] text-white/60">Assistente Credifácil</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Fechar" className="rounded-full p-1.5 text-white/70 hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]" : "bg-white/10 text-white/90"}`}>
                    {m.content || <Loader2 className="h-4 w-4 animate-spin" />}
                  </div>
                </div>
              ))}
              {loading && msgs[msgs.length - 1]?.role === "user" && (
                <div className="flex justify-start"><div className="rounded-2xl bg-white/10 px-3.5 py-2.5"><Loader2 className="h-4 w-4 animate-spin" /></div></div>
              )}
            </div>

            <form onSubmit={send} className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm placeholder:text-white/40 outline-none focus:border-[hsl(var(--gold))]"
              />
              <button type="submit" disabled={loading || !input.trim()} className="grid h-10 w-10 place-items-center rounded-full bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] transition hover:scale-105 disabled:opacity-40">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuriChat;