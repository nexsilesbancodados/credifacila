import { useState, memo, useId } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputId = useId();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    
    setLoading(true);
    try {
      localStorage.setItem("cf_newsletter", email);
      await supabase.from("newsletter_subscribers").insert({ email });
      setDone(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      {done ? (
        <div 
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="mx-auto h-12 w-12 text-[hsl(var(--gold-soft))]" aria-hidden="true" />
          <p className="mt-4 text-lg font-black text-white">Inscrição confirmada!</p>
          <p className="mt-1 text-sm text-white/50 uppercase tracking-widest">Seu radar financeiro está ativo.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor={inputId} className="sr-only">E-mail corporativo para newsletter</label>
            <input
              id={inputId}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail corporativo"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[hsl(var(--gold-soft))/0.5] transition-all"
              aria-required="true"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="btn-gold whitespace-nowrap px-8 py-4 disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
            aria-label={loading ? "Inscrevendo..." : "Inscrever-se na newsletter"}
          >
            {loading ? "Processando..." : <>Assinar <Send className="h-4 w-4 ml-2" aria-hidden="true" /></>}
          </button>
        </form>
      )}
    </div>
  );
};

export default memo(Newsletter);
