import { Phone, ArrowRight } from "lucide-react";
import banner from "@/assets/contact-banner.png";

const ContactBannerSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.35)]">
          <img
            src={banner}
            alt="Atendimento Credifácil"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101f] via-[#06101f]/85 to-transparent md:from-[#06101f] md:via-[#06101f]/70 md:to-transparent" />

          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-14 md:px-12 md:py-20 lg:px-16 lg:py-24">
              <span className="pill-gold w-fit">Fale com um especialista</span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Atendimento humano,{" "}
                <span className="text-gold-gradient">decisão rápida</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                Nossa equipe está pronta para entender seu momento e encontrar a
                melhor modalidade de crédito para você. Sem burocracia, sem
                pressa — só clareza.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/contato"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.8)]"
                >
                  Entre em contato
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/5511964541758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground/85 backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.45] hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-[hsl(var(--gold-soft))]" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBannerSection;