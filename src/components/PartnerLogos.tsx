import Reveal from "./Reveal";
import { Landmark, Building2, Briefcase, ShieldCheck, BadgeCheck, Wallet } from "lucide-react";

const partners = [
  { name: "Banco do Brasil", icon: Landmark },
  { name: "Caixa Econômica", icon: Building2 },
  { name: "Itaú", icon: Briefcase },
  { name: "Bradesco", icon: ShieldCheck },
  { name: "Santander", icon: BadgeCheck },
  { name: "BTG Pactual", icon: Wallet },
];

const PartnerLogos = () => (
  <section className="container-x py-16">
    <Reveal>
      <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
        Instituições parceiras
      </p>
    </Reveal>
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {partners.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.06}>
          <div className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition-all hover:border-[hsl(var(--gold))/0.3] hover:bg-white/10">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[hsl(var(--royal))/0.2] to-[hsl(var(--sky))/0.2] text-[hsl(var(--gold-soft))] transition-transform group-hover:scale-110">
              <p.icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white/90">{p.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default PartnerLogos;
