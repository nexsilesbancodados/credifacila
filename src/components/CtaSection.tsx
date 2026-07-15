import { useEffect, useRef, useState } from "react";
import ctaImage from "@/assets/cta-team.png.asset.json";

const CtaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[90vh] overflow-hidden"
    >
      <img
        src={ctaImage.url}
        alt="Consultores CredMais analisando proposta"
        className="absolute inset-0 h-full w-full object-cover opacity-80 img-fade-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e2cea6]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center justify-end px-6 py-24">
        <div
          className={`w-full max-w-md rounded-3xl bg-amber-500 p-10 text-neutral-950 shadow-2xl transition-all duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
          }`}
        >
          <div className="mb-6 h-10 w-10 rounded-full bg-neutral-950/90" />
          <h2 className="font-serif text-4xl leading-tight tracking-tight">
            Vamos conversar sobre o seu próximo passo.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-900/80">
            Nossa equipe analisa cada operação com cuidado e responde rápido. Conte o
            que você precisa e retornamos com a melhor estrutura para o seu momento.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/5511964541758"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-medium uppercase tracking-widest text-amber-400 transition-transform hover:scale-105"
            >
              Falar com a CredMais
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;