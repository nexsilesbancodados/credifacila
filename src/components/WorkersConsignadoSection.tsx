import { DollarSign, Zap, ShieldCheck, ArrowRight, Lock, Users, Wallet, Calendar, CreditCard, Headphones } from "lucide-react";
import Reveal from "./Reveal";
import workersImg from "@/assets/sections/workers-duo.jpg";
import logoAsset from "@/assets/logo-credmais.png.asset.json";
const logo = logoAsset.url;

const WorkersConsignadoSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[hsl(var(--gold))/0.25] bg-gradient-to-br from-[hsl(var(--midnight))] via-[hsl(var(--navy-deep))] to-black shadow-[0_30px_120px_-30px_hsl(var(--gold)/0.35)]">
            {/* Top banner area */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT — Headline */}
              <div className="relative z-10 p-8 md:p-14 lg:p-16">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="CrediFácil" className="h-8 w-auto" />
                  <span className="pill-gold">
                    <ShieldCheck className="h-3.5 w-3.5" /> Crédito Consignado
                  </span>
                </div>

                <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-foreground">
                  Crédito consignado <br className="hidden md:block" />
                  <span className="text-[hsl(var(--gold))]">para quem trabalha</span>
                  <br />
                  <span className="text-[hsl(var(--gold))]">com apps e como</span>
                  <br />
                  <span className="text-[hsl(var(--gold))]">comerciante.</span>
                </h2>

                <p className="mt-6 max-w-md text-base md:text-lg text-foreground/70">
                  Mais crédito, mais tranquilidade para você focar no que
                  realmente importa: seu trabalho.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { icon: DollarSign, t: "Taxas", b: "mais baixas", s: "que as do crédito pessoal." },
                    { icon: Zap, t: "Aprovação", b: "rápida", s: "e sem burocracia." },
                    { icon: ShieldCheck, t: "Segurança e", b: "transparência", s: "em cada etapa do processo." },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--gold))/0.4] bg-[hsl(var(--gold))/0.08]">
                        <f.icon className="h-4 w-4 text-[hsl(var(--gold))]" />
                      </div>
                      <div className="text-xs md:text-sm leading-snug">
                        <div className="text-foreground/80">{f.t}</div>
                        <div className="font-bold text-foreground">{f.b}</div>
                        <div className="mt-1 text-foreground/55">{f.s}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a href="/consignado" className="btn-gold">
                    Faça sua simulação <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Lock className="h-4 w-4" />
                    Seus dados protegidos<br />com criptografia.
                  </div>
                </div>
              </div>

              {/* RIGHT — Image */}
              <div className="relative min-h-[420px] lg:min-h-[620px]">
                <img
                  src={workersImg}
                  alt="Entregador e comerciante"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--midnight))] via-transparent to-transparent" />

                {/* Floating chip */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 max-w-[230px] rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[hsl(var(--gold))]">
                    <Users className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Feito para</span>
                  </div>
                  <p className="mt-2 text-sm leading-snug text-foreground">
                    <span className="text-[hsl(var(--gold))] font-bold">motoqueiros, entregadores</span>{" "}
                    e <span className="text-[hsl(var(--gold))] font-bold">comerciantes.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom benefits bar */}
            <div className="border-t border-white/10 bg-black/40 px-8 py-10 md:px-14">
              <h3 className="mb-8 font-display text-xl md:text-2xl font-black">
                <span className="text-[hsl(var(--gold))]">Benefícios</span>{" "}
                <span className="text-foreground/90">que fazem a diferença</span>
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Wallet, t: "Dinheiro na conta em até 24h úteis", s: "Após aprovação." },
                  { icon: Calendar, t: "Parcelas que cabem no seu bolso", s: "Desconto direto na instituição parceira." },
                  { icon: CreditCard, t: "Mais organização financeira", s: "Use o crédito para investir no seu negócio ou realizar seus planos." },
                  { icon: Headphones, t: "Atendimento especializado", s: "Nosso time entende a sua rotina e está pronto para ajudar." },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--gold))/0.4] bg-[hsl(var(--gold))/0.08]">
                      <b.icon className="h-4 w-4 text-[hsl(var(--gold))]" />
                    </div>
                    <div className="text-xs md:text-sm leading-snug">
                      <div className="font-bold text-foreground">{b.t}</div>
                      <div className="mt-1 text-foreground/55">{b.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WorkersConsignadoSection;