import { useState } from "react";
import { TrendingUp, ShieldCheck, BarChart3, Lock, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import { useSeo } from "@/hooks/useSeo";
import { whatsappLink } from "@/config/site";
import heroImg from "@/assets/invista-hero.webp";

const highlights = [
  { icon: TrendingUp, title: "Rentabilidade acima do CDI", desc: "Operações de crédito estruturado com retornos consistentes acima de 110% do CDI." },
  { icon: ShieldCheck, title: "Lastro real", desc: "100% dos investimentos lastreados em recebíveis performados, com pulverização de risco." },
  { icon: BarChart3, title: "Transparência total", desc: "Relatórios mensais detalhados, dashboard em tempo real e auditoria independente." },
  { icon: Lock, title: "Estrutura regulada", desc: "FIDC e CRA registrados na CVM, com gestão profissional e custódia bancária." },
];

const InvistaConosco = () => {
  useSeo({
    title: "Invista Conosco — Investimento estruturado | Credifácil",
    description: "Acesse oportunidades de investimento em FIDC e CRA com lastro em recebíveis, rentabilidade acima do CDI e gestão profissional.",
  });

  const [form, setForm] = useState({ nome: "", email: "", telefone: "", valor: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="relative min-h-screen">
      <TopNav />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <AnimatedBackdrop variant="dark" />
          <div data-parallax="0.1" className="pointer-events-none absolute inset-0 opacity-25">
            <img src={heroImg} alt="" className="h-full w-full object-cover object-right" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <div data-anim="fade-right">
              <span className="pill-eyebrow-dark"><Sparkles className="h-3.5 w-3.5" /> Investidor qualificado</span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Invista no <span className="text-gold-gradient">crédito real</span> da economia
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/82 md:text-lg">
                Rentabilidade consistente, lastro em recebíveis performados e estrutura regulada pela CVM.
                Para investidores que buscam diversificação com segurança.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#form" className="btn-gold group">
                  Quero investir <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={whatsappLink("Olá! Tenho interesse em investir com a Credifácil.")} className="btn-ghost-light">
                  <MessageCircle className="h-4 w-4" /> Falar com RI
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-gold/15 pt-6" data-anim-stagger>
                <div><div className="font-display text-3xl font-extrabold text-gold-gradient">+R$ 800M</div><div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">Sob gestão</div></div>
                <div><div className="font-display text-3xl font-extrabold text-gold-gradient">112%</div><div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">do CDI médio</div></div>
                <div><div className="font-display text-3xl font-extrabold text-gold-gradient">5+ anos</div><div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">de track record</div></div>
              </div>
            </div>
            <div data-anim="fade-left" className="lg:justify-self-end">
              <div className="card-glass relative overflow-hidden p-8">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-30" style={{ background: "var(--gradient-gold)" }} />
                <h3 className="font-display text-2xl font-bold">Receba o material institucional</h3>
                <p className="mt-2 text-sm text-muted-foreground">Acesso restrito a investidores qualificados.</p>
                {sent ? (
                  <div className="mt-8 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-6 text-center">
                    <ShieldCheck className="mx-auto h-10 w-10 text-brand-gold" />
                    <p className="mt-3 font-display text-lg font-bold">Recebemos sua solicitação</p>
                    <p className="mt-1 text-sm text-muted-foreground">Nosso time de RI entrará em contato em até 1 dia útil.</p>
                  </div>
                ) : (
                  <form id="form" onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="form-label" htmlFor="nome">Nome completo</label>
                      <input id="nome" required className="form-input" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">E-mail</label>
                      <input id="email" type="email" required className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="form-label" htmlFor="telefone">Telefone</label>
                        <input id="telefone" required className="form-input" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="valor">Faixa de aporte</label>
                        <select id="valor" required className="form-input" value={form.valor} onChange={(e) => setForm({ ...form, valor: e.target.value })}>
                          <option value="">Selecione</option>
                          <option>Até R$ 100 mil</option>
                          <option>R$ 100 mil – R$ 500 mil</option>
                          <option>R$ 500 mil – R$ 1 mi</option>
                          <option>Acima de R$ 1 mi</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn-gold w-full">Solicitar acesso</button>
                    <p className="text-center text-[11px] text-muted-foreground">Seus dados estão protegidos pela LGPD.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Por que investir conosco</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Solidez, transparência e retorno</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-anim-stagger>
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="trust-card">
                    <div className="trust-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]" style={{ background: "var(--gradient-gold)" }}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
};

export default InvistaConosco;
