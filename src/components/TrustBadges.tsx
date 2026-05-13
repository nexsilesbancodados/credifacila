import { ShieldCheck, Lock, Landmark, BadgeCheck, FileCheck2 } from "lucide-react";
import { memo } from "react";

const items = [
  { I: Landmark, t: "Regulado pelo BCB", s: "Conformidade total" },
  { I: Lock, t: "SSL 256 bits", s: "Conexão criptografada" },
  { I: ShieldCheck, t: "LGPD compliant", s: "Seus dados protegidos" },
  { I: BadgeCheck, t: "Selo Reclame Aqui", s: "Reputação verificada" },
  { I: FileCheck2, t: "Auditoria independente", s: "Transparência total" },
];

const TrustBadges = () => (
  <section 
    className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md"
    aria-labelledby="trust-badges-title"
  >
    <p 
      id="trust-badges-title"
      className="mb-8 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/50"
    >
      Governance & Trust
    </p>
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {items.map(({ I, t, s }) => (
        <li
          key={t}
          className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-[hsl(var(--gold-soft))/0.3] hover:bg-white/[0.08]"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))] transition-all group-hover:scale-110">
            <I className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-black text-white uppercase tracking-wider">{t}</p>
            <p className="truncate text-[10px] font-bold text-white/50 uppercase tracking-widest">{s}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default memo(TrustBadges);
