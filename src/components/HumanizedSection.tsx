import { Users, ShieldCheck, Clock } from "lucide-react";
import showcaseImg from "@/assets/atendimento-humanizado.png";

const features = [
  {
    icon: Users,
    title: "Especialistas de verdade",
    desc: "Atendimento próximo e consultivo da Credifácil para entender o que você precisa.",
  },
  {
    icon: ShieldCheck,
    title: "Processos simples e seguros",
    desc: "Tecnologia avançada que garante agilidade e proteção dos seus dados.",
  },
  {
    icon: Clock,
    title: "Respostas mais rápidas",
    desc: "Análise de crédito ágil para você tomar decisões com confiança.",
  },
];

const HumanizedSection = () => (
  <section
    aria-label="Atendimento humanizado Credifácil"
    className="relative w-full overflow-hidden py-14 sm:py-20 md:py-28"
  >
    {/* Soft gold ambient glow */}
    <div
      className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] opacity-30"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.35), transparent 65%)",
      }}
      aria-hidden
    />
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      {/* Left: copy */}
       <div data-anim="fade-right">
         <span className="pill-eyebrow-dark mb-6">
          Atendimento que faz a diferença
        </span>
         <h2 className="font-display text-[28px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
          Atendimento humanizado em cada etapa da{" "}
          <span className="text-gold-gradient">sua jornada.</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-[17px]">
          Na Credifácil, unimos tecnologia e pessoas para oferecer uma experiência{" "}
          <span className="font-semibold text-white">simples, rápida e segura</span>. Do
          primeiro contato à realização do seu crédito, você conta com especialistas
          prontos para te ajudar.
        </p>

         <ul className="mt-10 flex flex-col gap-7" data-anim="blur-in" style={{ "--anim-delay": "0.2s" } as React.CSSProperties}>
           {features.map((f, i) => {
            const Icon = f.icon;
            return (
               <li 
                 key={f.title} 
                 className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
               >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/10 text-brand-gold"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white md:text-xl">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/65 md:text-[15px]">
                    {f.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

       {/* Right: image */}
       <div className="relative" data-anim="zoom-out" data-parallax="0.08">
        <div
          className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.18), transparent 70%)",
          }}
          aria-hidden
        />
        <img
          src={showcaseImg}
          alt="Painel Credifácil aberto em laptop e aplicativo de simulação de crédito no celular"
          loading="lazy"
          decoding="async"
          width={1024}
          height={1024}
          className="relative w-full rounded-[28px] border border-white/5 object-cover shadow-[0_40px_80px_-30px_hsl(0_0%_0%/0.7)]"
        />
      </div>
    </div>
  </section>
);

export default HumanizedSection;