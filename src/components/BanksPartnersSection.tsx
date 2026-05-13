import { BanksMarquee } from "@/components/BanksMarquee";
import banner from "@/assets/banks-banner.png";

const BanksPartnersSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--gold))/0.25] shadow-[0_30px_80px_-30px_hsl(var(--gold)/0.35)]">
          <img
            src={banner}
            alt="Trabalhamos com os melhores bancos do Brasil"
            loading="lazy"
            className="block w-full h-auto"
          />
          {/* Bottom fade so it merges with the marquee below */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Marquee tucked right under the banner */}
        <div className="-mt-8 md:-mt-10">
          <BanksMarquee heading="" />
        </div>
      </div>
    </section>
  );
};

export default BanksPartnersSection;
