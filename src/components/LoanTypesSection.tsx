import { CalendarDays, CalendarRange, CalendarClock, CalendarCheck, CalendarHeart } from "lucide-react";
import loan1 from "@/assets/loans/loan-1.png";
import loan2 from "@/assets/loans/loan-2.png";
import loan3 from "@/assets/loans/loan-3.png";
import loan4 from "@/assets/loans/loan-4.png";
import loan5 from "@/assets/loans/loan-5.png";

type Loan = {
  title: string;
  tag: string;
  desc: string;
  img: string;
  icon: typeof CalendarDays;
};

const loans: Loan[] = [
  {
    title: "Empréstimo Diário",
    tag: "Pagamento todo dia",
    desc: "Parcelas pequenas e descontos diários — ideal para autônomos e pequenos comércios.",
    img: loan1,
    icon: CalendarDays,
  },
  {
    title: "Empréstimo Semanal",
    tag: "Toda semana",
    desc: "Pague conforme seu fluxo de caixa semanal, com taxas competitivas e flexibilidade.",
    img: loan2,
    icon: CalendarHeart,
  },
  {
    title: "Empréstimo Quinzenal",
    tag: "A cada 15 dias",
    desc: "O equilíbrio perfeito entre prazo e parcela. Indicado para quem recebe quinzenalmente.",
    img: loan3,
    icon: CalendarRange,
  },
  {
    title: "Empréstimo Mensal",
    tag: "Mensalidade fixa",
    desc: "O modelo tradicional, com parcelas mensais previsíveis e prazos estendidos.",
    img: loan4,
    icon: CalendarCheck,
  },
  {
    title: "Empréstimo Programado",
    tag: "Sob medida",
    desc: "Datas e valores ajustados ao seu calendário financeiro, com aprovação personalizada.",
    img: loan5,
    icon: CalendarClock,
  },
];

const Card = ({ loan }: { loan: Loan }) => {
  const Icon = loan.icon;
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.45] hover:shadow-[0_30px_80px_-30px_hsl(var(--gold)/0.4)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={loan.img}
          alt={loan.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--gold))/0.35] bg-background/60 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--gold-soft))] backdrop-blur-md">
          <Icon className="h-3 w-3" />
          {loan.tag}
        </span>
      </div>
      <div className="relative p-4 md:p-5">
        <h3 className="font-display text-base font-bold text-foreground md:text-lg">
          {loan.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-foreground/65 md:text-[13px]">
          {loan.desc}
        </p>
        <a
          href="/contato"
          className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--gold-soft))] transition hover:text-[hsl(var(--gold))]"
        >
          Simular agora
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
};

const LoanTypesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="pill-gold">Modalidades de empréstimo</span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Escolha a forma de pagamento que{" "}
            <span className="text-gold-gradient">cabe no seu ritmo</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
            Diário, semanal, quinzenal, mensal ou programado — temos a modalidade
            ideal para o seu perfil financeiro.
          </p>
        </div>

        {/* Cards: 2 / 1 / 2 layout */}
        <div className="mx-auto mt-14 max-w-5xl space-y-5 md:space-y-6">
          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <Card loan={loans[0]} />
            <Card loan={loans[1]} />
          </div>

          {/* Middle row — 1 centered card */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-6 md:col-start-4">
              <Card loan={loans[2]} />
            </div>
          </div>

          {/* Bottom row — 2 cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <Card loan={loans[3]} />
            <Card loan={loans[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanTypesSection;
