import {
  Users, DollarSign, ShieldCheck, Smartphone, BarChart3,
  FileText, FileCheck, HandCoins, CheckCircle2, Award,
  Zap, UserCheck, Lock, Percent, ArrowRight, MessageCircle,
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube,
  ChevronDown, UserCircle2,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroMan from "@/assets/hero-man-phone.png";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Logo = ({ light = false }: { light?: boolean }) => (
  <img src={logo} alt="Credifácil" className={`h-11 w-auto ${light ? "brightness-0 invert" : ""}`} />
);

const TopNav = () => (
  <header className="absolute inset-x-0 top-0 z-30">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <Logo light />
      <nav className="hidden items-center gap-8 text-[15px] font-medium text-white/90 lg:flex">
        <a href="#inicio" className="relative text-gold after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:bg-gold">Início</a>
        <a href="#consignado" className="hover:text-gold transition">Consignado</a>
        <button className="inline-flex items-center gap-1 hover:text-gold transition">
          Securitizadora <ChevronDown className="h-4 w-4" />
        </button>
        <a href="#invista" className="hover:text-gold transition">Invista Conosco</a>
        <a href="#blog" className="hover:text-gold transition">Blog</a>
        <a href="#duvidas" className="hover:text-gold transition">Dúvidas</a>
      </nav>
      <button className="inline-flex items-center gap-2 rounded-xl border-2 border-gold bg-transparent px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-navy-deep">
        <UserCircle2 className="h-4 w-4" /> Solicitar crédito
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-[hsl(var(--navy-deep))] pt-28 pb-32 text-white">
    {/* radial glow */}
    <div className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,hsl(220_85%_45%/0.5),transparent_60%)]" />
    <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
    {/* gold sweep at bottom */}
    <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,hsl(var(--gold)/0.4))]" />

    <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
      <div className="max-w-xl">
        <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-6xl">
          Crédito fácil,<br />
          <span className="text-white">rápido e seguro</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
          Soluções financeiras inteligentes para realizar seus planos e impulsionar seus negócios com tranquilidade.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#solicitar" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-7 py-4 text-[15px] font-bold text-navy-deep shadow-[0_10px_30px_-8px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02]">
            Solicitar crédito <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#especialista" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:text-gold">
            Fale com um especialista <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {[
            { i: Zap, t: "Aprovação", s: "rápida" },
            { i: Percent, t: "Taxas", s: "competitivas" },
            { i: Users, t: "Atendimento", s: "humanizado" },
            { i: ShieldCheck, t: "100% digital", s: "e seguro" },
          ].map(({ i: Icon, t, s }) => (
            <div key={t} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2.5} />
              <div className="text-[13px] leading-tight">
                <div className="font-semibold text-white">{t}</div>
                <div className="text-white/60">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* circular halo */}
        <div className="absolute inset-0 -z-0 mx-auto my-auto h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,hsl(220_70%_30%/0.9),transparent_65%)]" />
        <img
          src={heroMan}
          alt="Cliente Credifácil"
          width={1024}
          height={1024}
          className="relative z-10 mx-auto w-full max-w-[560px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
        />
        {/* floating card 1 */}
        <div className="absolute right-2 top-12 z-20 hidden w-[210px] rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/20 sm:block">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">Crédito aprovado!</div>
              <div className="mt-1 text-[11px] text-white/60">Valor liberado</div>
              <div className="mt-1 font-display text-xl font-bold text-white">R$ 25.000,00</div>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500">
              <CheckCircle2 className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        {/* floating card 2 */}
        <div className="absolute bottom-16 right-6 z-20 hidden w-[180px] rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/20 sm:block">
          <div className="text-[11px] uppercase tracking-wider text-white/60">Seu limite disponível</div>
          <div className="mt-3 flex items-end gap-1.5">
            {[40, 65, 50, 80, 70, 95].map((h, i) => (
              <div key={i} className="w-2 rounded-sm bg-gradient-to-t from-gold-deep to-gold-soft" style={{ height: `${h * 0.4}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${dark ? "text-gold" : "text-gold-deep"}`}>
    {children}
  </div>
);

const SectionTitle = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`font-display text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-navy"}`}>
    {children}
    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
  </h2>
);

const Solutions = () => {
  const items = [
    { icon: Users, title: "Consignado", desc: "Crédito com desconto em folha, taxas reduzidas e parcelas que cabem no seu bolso." },
    { icon: DollarSign, title: "Antecipação de Recebíveis", desc: "Antecipe valores a receber e tenha mais fôlego para investir no que importa." },
    { icon: ShieldCheck, title: "Boleto Garantido", desc: "Emita boletos com a garantia da Credifácil e aumente suas vendas com segurança." },
    { icon: Smartphone, title: "Conta Digital Luri", desc: "Conta digital completa para pessoa física e jurídica, com gestão prática e moderna." },
    { icon: BarChart3, title: "Invista Conosco", desc: "Invista em ativos seguros e rentáveis. Rentabilidade atrativa com solidez e transparência." },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Eyebrow>Nossas Soluções</Eyebrow>
        <SectionTitle>Soluções completas para você e seu negócio</SectionTitle>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-white p-6 text-left shadow-[0_2px_8px_rgba(15,30,80,0.04)] transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-15px_rgba(15,30,80,0.18)]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition group-hover:scale-110">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-center font-display text-base font-bold text-navy">{title}</h3>
              <p className="mt-3 text-center text-[13.5px] leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-5 text-center">
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-gold-deep hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: FileText, n: 1, title: "Solicite", desc: "Preencha seus dados e conte com a análise rápida e sem burocracia." },
    { icon: FileCheck, n: 2, title: "Análise", desc: "Analisamos seu perfil e encontramos a melhor solução para você." },
    { icon: HandCoins, n: 3, title: "Aprovação", desc: "Com aprovação, o valor é liberado de forma rápida e segura." },
    { icon: CheckCircle2, n: 4, title: "Use como quiser", desc: "Realize seus objetivos, quite dívidas ou invista no que importa." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Eyebrow dark>Como Funciona</Eyebrow>
        <SectionTitle light>Simples, rápido e 100% digital</SectionTitle>
        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px border-t border-dashed border-white/20 lg:block" />
          {steps.map(({ icon: Icon, n, title, desc }) => (
            <div key={n} className="relative flex flex-col items-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(220_70%_25%)] to-[hsl(220_80%_15%)] ring-2 ring-gold/40">
                <Icon className="h-8 w-8 text-gold" strokeWidth={2} />
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[12px] font-bold text-navy-deep shadow-md">{n}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 max-w-[220px] text-[13.5px] leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const items = [
    { icon: Award, t: "Confiança e tradição", d: "Anos de experiência no mercado financeiro, com solidez e credibilidade." },
    { icon: Zap, t: "Agilidade", d: "Processos digitais que garantem aprovação e liberação mais rápidas." },
    { icon: UserCheck, t: "Atendimento humano", d: "Especialistas prontos para entender sua necessidade e oferecer a melhor solução." },
    { icon: Lock, t: "Segurança", d: "Seus dados protegidos com tecnologia de ponta e processos confiáveis." },
    { icon: Percent, t: "Melhores condições", d: "Taxas competitivas e parcelas que cabem no seu orçamento." },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Eyebrow>Por que escolher a Credifácil?</Eyebrow>
        <SectionTitle>Confiança que transforma</SectionTitle>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex flex-col items-center px-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy">{t}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    { img: blog1, tag: "Educação Financeira", title: "Como organizar suas finanças e realizar mais", desc: "Dicas práticas para ter controle do seu dinheiro e alcançar seus objetivos.", date: "10 de maio de 2024", read: "5 min de leitura" },
    { img: blog2, tag: "Negócios", title: "Antecipação de recebíveis: quando e por que utilizar", desc: "Entenda como essa solução pode dar mais fôlego ao seu fluxo de caixa.", date: "08 de maio de 2024", read: "6 min de leitura" },
    { img: blog3, tag: "Investimentos", title: "Investir com segurança é possível. Saiba como.", desc: "Conheça opções de investimento com rentabilidade e baixo risco.", date: "06 de maio de 2024", read: "4 min de leitura" },
  ];
  return (
    <section id="blog" className="bg-[hsl(218_30%_97%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Conteúdo que faz a diferença</Eyebrow>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">Dicas e novidades para você</h2>
          </div>
          <a href="#" className="hidden items-center gap-2 rounded-xl border border-navy/20 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy md:inline-flex">
            Ver todos os artigos <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(15,30,80,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_rgba(15,30,80,0.18)]">
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={512} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-md bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-base font-bold leading-snug text-navy">{p.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span>{p.date}</span><span>·</span><span>{p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaBanner = () => (
  <section className="bg-white pb-20">
    <div className="mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-[hsl(220_80%_18%)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold-deep text-navy-deep ring-4 ring-gold/30">
              <UserCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">Pronto para transformar seus planos em realidade?</h3>
              <p className="mt-1 text-sm text-white/70">Fale com nossos especialistas e descubra a melhor solução para você.</p>
            </div>
          </div>
          <a href="#" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-6 py-3.5 text-sm font-bold text-navy-deep shadow-lg transition hover:scale-[1.02]">
            Fale com um especialista <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy-deep pt-16 pb-8 text-white/80">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 text-[13.5px] leading-relaxed text-white/60">
            Soluções financeiras inteligentes para você, sua família e seu negócio irem mais longe.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-gold hover:text-navy-deep">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-gold">Navegação</h4>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            {["Início", "Consignado", "Securitizadora", "Invista Conosco", "Blog", "Dúvidas"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-gold">Securitizadora</h4>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            {["Visão Geral", "Antecipação de Recebíveis", "Boleto Garantido", "Conta Digital Luri"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-gold">Institucional</h4>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            {["Quem somos", "Políticas", "Trabalhe conosco", "Contato"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-gold">Fale Conosco</h4>
          <ul className="mt-4 space-y-3 text-[13.5px]">
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-gold" /> (11) 4000-1234</li>
            <li className="flex items-center gap-2.5"><MessageCircle className="h-4 w-4 text-gold" /> (11) 99999-1234</li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-gold" /> contato@credifacil.com.br</li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Rua das Nações Unidas, 12.901<br />13º andar - São Paulo/SP</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/50 md:flex-row">
        <span>© 2024 Credifácil Securitizadora S.A. Todos os direitos reservados.</span>
        <span>CNPJ: 10.123.456/0001-00</span>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main className="min-h-screen bg-white">
    <TopNav />
    <Hero />
    <Solutions />
    <HowItWorks />
    <Trust />
    <Blog />
    <CtaBanner />
    <Footer />
  </main>
);

export default Index;
