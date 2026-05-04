import { ChevronRight, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/config/site";
import parceirosImage from "@/assets/parceiros-bancos-clean.png";

const PartnerBanks = () => (
  <section
    id="bancos-parceiros"
    className="relative w-full overflow-hidden px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24 lg:px-10"
    aria-label="Bancos parceiros"
  >
    <div className="mx-auto max-w-7xl">
      {/* Hero composition image */}
       <div className="relative mx-auto" data-anim="zoom-out" data-parallax="0.05">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl"
          style={{ background: "radial-gradient(60% 50% at 50% 50%, hsl(42 78% 45% / 0.25), transparent 70%)" }}
          aria-hidden
        />
        <img
          src={parceirosImage}
          alt="Atendente Credifácil cercada por cards dos bancos parceiros: Itaú, Bradesco, Santander, Banco do Brasil, Sicoob, Caixa e Banrisul, conectados por um anel dourado."
          loading="lazy"
          decoding="async"
          className="block w-full h-auto rounded-[28px] border border-brand-gold/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        />
      </div>

       {/* CTA */}
       <div
         className="mt-12 overflow-hidden rounded-[32px] border border-brand-gold/30 bg-surface-deep-2/60 p-1 backdrop-blur-md shadow-2xl"
         data-anim="reveal-up"
       >
        <div className="flex flex-col items-center gap-6 rounded-[30px] bg-gradient-to-r from-brand-ink to-surface-deep-2 p-5 sm:p-8 md:flex-row md:justify-between md:p-10">
          <div className="flex w-full items-center gap-4 sm:gap-6">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/5 text-brand-gold sm:flex">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl md:text-3xl">
                Mais opções para <span className="text-gold-gradient">você.</span>
              </h3>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted-foreground/80 sm:text-sm md:text-base">
                Com as melhores instituições ao nosso lado, encontramos o crédito ideal para o seu perfil e planos.
              </p>
            </div>
          </div>

          <a
            href={whatsappLink("Olá! Quero falar com um especialista da Credifácil.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-brand-gold/40 bg-brand-gold/5 px-4 py-4 transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 sm:gap-6 sm:px-6 sm:py-5 md:w-auto"
          >
            <div className="min-w-0">
              <span className="block font-display text-base font-bold text-foreground sm:text-lg">Fale com um especialista</span>
              <span className="block text-[11px] text-muted-foreground transition-colors group-hover:text-brand-gold/80 sm:text-xs">
                Descubra as melhores oportunidades para você agora.
              </span>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-brand-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 sm:h-12 sm:w-12">
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={3} />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PartnerBanks;
