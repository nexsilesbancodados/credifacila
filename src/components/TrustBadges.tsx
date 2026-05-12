import { ShieldCheck, Lock, Landmark, BadgeCheck, FileCheck2 } from "lucide-react";

const items = [
  { I: Landmark, t: "Regulado pelo BCB", s: "Conformidade total" },
  { I: Lock, t: "SSL 256 bits", s: "Conexão criptografada" },
  { I: ShieldCheck, t: "LGPD compliant", s: "Seus dados protegidos" },
  { I: BadgeCheck, t: "Selo Reclame Aqui", s: "Reputação verificada" },
  { I: FileCheck2, t: "Auditoria independente", s: "Transparência total" },
];

const TrustBadges = () => (
  <section className="container-x py-12">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
        Segurança & confiança
      </p>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(({ I, t, s }) => (
          <li
            key={t}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all hover:border-[hsl(var(--gold))/0.4] hover:bg-white/10"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[hsl(var(--royal))/0.25] to-[hsl(var(--sky))/0.25] text-[hsl(var(--gold-soft))] transition-transform group-hover:scale-110">
              <I className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-extrabold text-white">{t}</p>
              <p className="truncate text-[10px] uppercase tracking-wider text-white/60">{s}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBadges;
