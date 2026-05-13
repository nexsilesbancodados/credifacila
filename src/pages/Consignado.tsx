import { ArrowRight, ShieldCheck, Percent, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBannerSection from "@/components/ContactBannerSection";
import heroImg from "@/assets/consignado-hero.png";

const benefits = [
  {
    icon: Percent,
    title: "Taxas reduzidas",
    desc: "Entre as menores do mercado, com desconto direto em folha.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança total",
    desc: "Aprovação para aposentados, pensionistas e servidores.",
  },
  {
    icon: Clock,
    title: "Liberação rápida",
    desc: "Crédito na conta em até 24h após a aprovação.",
  },
];

const Consignado = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] w-full">
          <img
            src={heroImg}
            alt="Crédito Consignado — mais tranquilidade para o seu dia a dia"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* Intro / benefits */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="pill-gold">Crédito Consignado</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Crédito com{" "}
              <span className="text-gold-gradient">desconto em folha</span>,
              feito para o seu ritmo
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
              A modalidade mais segura e econômica do mercado. Ideal para
              aposentados, pensionistas do INSS, servidores públicos e
              militares.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.45] hover:shadow-[0_30px_80px_-30px_hsl(var(--gold)/0.4)] md:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--gold))/0.35] bg-background/60 text-[hsl(var(--gold-soft))]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.8)]"
            >
              Simular consignado
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContactBannerSection />
      <Footer />
    </main>
  );
};

export default Consignado;