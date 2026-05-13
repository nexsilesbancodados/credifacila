import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    try { localStorage.setItem("cf_newsletter", email); } catch {}
    await supabase.from("newsletter_subscribers").insert({ email }).then(() => {});
    setDone(true);
  };
  return (
    <section className="container-x py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[hsl(var(--navy-deep))] via-[hsl(var(--navy))] to-[hsl(var(--navy-soft))] p-8 text-white shadow-[var(--shadow-elev)] md:p-12">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[hsl(var(--gold))/0.25] blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[hsl(var(--royal))/0.35] blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="pill-gold"><Mail className="h-3 w-3" /> Newsletter</span>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
              Receba dicas exclusivas <span className="text-gold-gradient">de finanças e crédito</span>
            </h3>
            <p className="mt-3 text-sm text-white/90">
              Conteúdos práticos, novidades e ofertas direto no seu e-mail. Sem spam, prometido.
            </p>
          </div>
          {done ? (
            <div className="rounded-2xl border border-[hsl(var(--gold))/0.4] bg-white/5 p-6 text-center backdrop-blur-md">
              <CheckCircle2 className="mx-auto h-10 w-10 text-[hsl(var(--gold-soft))]" />
              <p className="mt-3 font-extrabold">Inscrição confirmada!</p>
                <p className="mt-1 text-sm text-white/90">Em breve você receberá nossos conteúdos.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md focus:border-[hsl(var(--gold))] focus:ring-2 focus:ring-[hsl(var(--gold))/0.3]"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Inscrever <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
