import { useState } from "react";
import { Mail, Check, Send, AlertCircle } from "lucide-react";
import { site } from "@/config/site";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setStatus("error");
      setErrorMsg("Informe um e-mail válido.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      if (site.newsletterEndpoint) {
        const res = await fetch(site.newsletterEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, source: "footer-newsletter", site: site.url }),
        });
        if (!res.ok) throw new Error("Falha no envio");
      } else {
        // Modo demo: simula sucesso (sem endpoint configurado)
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  };

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/40 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-4 w-4" strokeWidth={2.6} />
          </span>
          <div>
            <div className="text-sm font-bold text-foreground">Inscrição confirmada!</div>
            <div className="mt-1 text-[12px] leading-relaxed text-foreground/65">
              Você receberá no e-mail novidades, dicas de crédito e ofertas exclusivas. Pode cancelar quando quiser.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
        Newsletter
      </h4>
      <p className="text-[13px] leading-relaxed text-[hsl(220_15%_30%)]">
        Receba dicas de crédito e ofertas no seu e-mail.
      </p>
      <form onSubmit={submit} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label className="relative flex-1">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="seu@email.com"
            aria-label="Seu e-mail"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-foreground/15 bg-white pl-10 pr-3 py-2.5 text-sm font-medium text-foreground transition-all placeholder:text-foreground/40 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-gold !px-5 !py-2.5 text-sm disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Cadastrar
            </>
          )}
        </button>
      </form>
      {status === "error" && (
        <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-destructive">
          <AlertCircle className="h-3 w-3" />
          {errorMsg}
        </div>
      )}
      <p className="mt-2 text-[10px] leading-relaxed text-foreground/45">
        Ao se inscrever, você concorda com nossa Política de Privacidade. Sem spam.
      </p>
    </div>
  );
};

export default Newsletter;
