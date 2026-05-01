import { useState } from "react";
import {
  TrendingUp, ShieldCheck, BarChart3, Lock, Sparkles, ArrowRight, MessageCircle,
  Building2, Landmark, Layers, FileCheck2, Award, Eye, Clock, Users, CheckCircle2,
} from "lucide-react";
import TopNav from "@/components/header/TopNav";
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

const products = [
  {
    icon: Layers,
    tag: "FIDC",
    title: "Fundo de Investimento em Direitos Creditórios",
    desc: "Carteira pulverizada de recebíveis performados de empresas brasileiras, com cotas seniores e subordinadas.",
    bullets: ["Liquidez D+30", "Rating A+ pela Liberum", "Subordinação mínima de 20%"],
    rate: "112%",
    rateLabel: "CDI médio 12m",
  },
  {
    icon: Landmark,
    tag: "CRA",
    title: "Certificado de Recebíveis do Agronegócio",
    desc: "Investimento em cadeias produtivas do agro, com garantias reais e isenção de IR para pessoa física.",
    bullets: ["IR isento (PF)", "Garantia real fiduciária", "Prazos de 24 a 60 meses"],
    rate: "IPCA + 8%",
    rateLabel: "Rentabilidade alvo",
  },
  {
    icon: Building2,
    tag: "Operações estruturadas",
    title: "Operações sob medida",
    desc: "Estruturação de carteiras exclusivas para family offices, gestoras e investidores institucionais.",
    bullets: ["Ticket mín. R$ 5 mi", "Due diligence dedicada", "Comitê de crédito conjunto"],
    rate: "Sob medida",
    rateLabel: "Termos negociados",
  },
];

const process = [
  { step: "01", title: "Cadastro qualificado", desc: "Validação de perfil de investidor qualificado conforme CVM." },
  { step: "02", title: "Material institucional", desc: "Acesso a lâminas, regulamento, histórico e relatórios completos." },
  { step: "03", title: "Reunião com RI", desc: "Conversa com nosso time de relações com investidores para alinhamento." },
  { step: "04", title: "Aporte e acompanhamento", desc: "Aporte via custodiante e dashboard com posição em tempo real." },
];

const security = [
  { icon: FileCheck2, title: "Registro CVM", desc: "Todos os fundos e CRAs registrados e fiscalizados pela CVM." },
  { icon: Eye, title: "Auditoria Big Four", desc: "Demonstrações financeiras auditadas anualmente." },
  { icon: Lock, title: "Custódia bancária", desc: "Recursos custodiados em instituição financeira de primeira linha." },
  { icon: Award, title: "Rating independente", desc: "Avaliação periódica por agências de risco reconhecidas." },
];

const faq = [
  { q: "Quem pode investir?", a: "Investidores qualificados (patrimônio acima de R$ 1 milhão ou certificação) e investidores profissionais conforme regulação CVM 30/2021." },
  { q: "Qual o aporte mínimo?", a: "FIDC: R$ 25 mil. CRA: a partir de R$ 1 mil por título. Operações estruturadas: a partir de R$ 5 milhões." },
  { q: "Como é a liquidez?", a: "FIDC com resgate D+30. CRA tem prazo definido até o vencimento, com possibilidade de venda no mercado secundário." },
  { q: "Como acompanho meu investimento?", a: "Dashboard online com posição diária, relatórios mensais detalhados e atendimento dedicado do RI." },
  { q: "Há proteção do FGC?", a: "FIDC e CRA não são cobertos pelo FGC. A segurança vem da estrutura regulada, lastro real e pulverização da carteira." },
];

const InvistaConosco = () => {
  useSeo({
    title: "Invista Conosco — FIDC e CRA com lastro real | Credifácil",
    description: "Acesse FIDC e CRA com rentabilidade acima do CDI, lastro em recebíveis performados, gestão profissional e estrutura regulada pela CVM.",
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

        {/* Products */}
        <section className="relative py-20 md:py-24 border-t border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Produtos</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Estruturas para cada perfil</h2>
              <p className="mt-4 text-muted-foreground">Do investidor qualificado ao institucional, oferecemos veículos sob medida com lastro real.</p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3" data-anim-stagger>
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <article key={p.title} className="trust-card group relative flex flex-col overflow-hidden">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 transition-opacity group-hover:opacity-40" style={{ background: "var(--gradient-gold)" }} />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="trust-icon inline-flex h-12 w-12 items-center justify-center rounded-2xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]" style={{ background: "var(--gradient-gold)" }}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">{p.tag}</span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold leading-tight">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <ul className="mt-5 space-y-2">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-end justify-between border-t border-brand-gold/15 pt-5">
                        <div>
                          <div className="font-display text-2xl font-extrabold text-gold-gradient">{p.rate}</div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.rateLabel}</div>
                        </div>
                        <a href="#form" className="text-sm font-semibold text-brand-gold hover:underline">
                          Saiba mais →
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative py-20 md:py-24 border-t border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Como começar</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Quatro passos até seu primeiro aporte</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-anim-stagger>
              {process.map((p) => (
                <div key={p.step} className="trust-card relative">
                  <div className="font-display text-5xl font-extrabold text-gold-gradient opacity-90">{p.step}</div>
                  <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="relative py-20 md:py-24 border-t border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div data-anim="fade-right">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Performance</span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  Resultados <span className="text-gold-gradient">consistentes</span>, ano após ano
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Nossos veículos entregam rentabilidade acima dos benchmarks com baixíssima volatilidade,
                  graças à pulverização da carteira e à seleção criteriosa de cedentes.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div className="trust-card">
                    <Clock className="h-6 w-6 text-brand-gold" />
                    <div className="mt-3 font-display text-2xl font-extrabold text-gold-gradient">60 meses</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">sem perdas relevantes</div>
                  </div>
                  <div className="trust-card">
                    <Users className="h-6 w-6 text-brand-gold" />
                    <div className="mt-3 font-display text-2xl font-extrabold text-gold-gradient">+1.200</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">cotistas ativos</div>
                  </div>
                </div>
              </div>
              <div data-anim="fade-left" className="card-glass p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Rentabilidade acumulada — FIDC Senior</div>
                    <div className="mt-1 font-display text-3xl font-extrabold text-gold-gradient">+58,4%</div>
                  </div>
                  <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">5 anos</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "2024", credifacil: 113, cdi: 100 },
                    { label: "2023", credifacil: 118, cdi: 100 },
                    { label: "2022", credifacil: 109, cdi: 100 },
                    { label: "2021", credifacil: 115, cdi: 100 },
                    { label: "2020", credifacil: 111, cdi: 100 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-bold text-white/80">{row.label}</span>
                        <span>{row.credifacil}% do CDI</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full" style={{ width: `${(row.credifacil / 120) * 100}%`, background: "var(--gradient-gold)" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[11px] text-muted-foreground">
                  Rentabilidade passada não representa garantia de resultados futuros. Veja o regulamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="relative py-20 md:py-24 border-t border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Segurança</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Estrutura blindada de ponta a ponta</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-anim-stagger>
              {security.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="trust-card text-center">
                    <div className="mx-auto trust-icon inline-flex h-12 w-12 items-center justify-center rounded-2xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]" style={{ background: "var(--gradient-gold)" }}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-20 md:py-24 border-t border-brand-gold/10">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="text-center" data-anim="fade-up">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Dúvidas frequentes</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Perguntas dos investidores</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
            </div>
            <div className="mt-12 space-y-4" data-anim-stagger>
              {faq.map((item) => (
                <details key={item.q} className="group trust-card cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <span className="font-display text-base font-bold md:text-lg">{item.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold transition-transform group-open:rotate-45">
                      <ArrowRight className="h-4 w-4 -rotate-45" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 md:py-24 border-t border-brand-gold/10">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="card-glass relative overflow-hidden p-10 md:p-14 text-center">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-25" style={{ background: "var(--gradient-gold)" }} />
              <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full opacity-25" style={{ background: "var(--gradient-gold)" }} />
              <div className="relative">
                <span className="pill-eyebrow-dark"><Sparkles className="h-3.5 w-3.5" /> Acesso qualificado</span>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                  Pronto para investir no <span className="text-gold-gradient">crédito real</span>?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
                  Receba o material institucional completo e converse com nosso time de Relações com Investidores.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a href="#form" className="btn-gold group">
                    Solicitar acesso <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href={whatsappLink("Olá! Tenho interesse em investir com a Credifácil.")} className="btn-ghost-light">
                    <MessageCircle className="h-4 w-4" /> Falar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
};

export default InvistaConosco;
