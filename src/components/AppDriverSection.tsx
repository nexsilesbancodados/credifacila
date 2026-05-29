import { Percent, Zap, ShieldCheck, ArrowRight, Lock, Star } from "lucide-react";
import Reveal from "./Reveal";
import driverImg from "@/assets/sections/driver-app.jpg";

const AppDriverSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[hsl(var(--gold))/0.25] bg-gradient-to-br from-[hsl(var(--midnight))] via-[hsl(var(--navy-deep))] to-black shadow-[0_30px_120px_-30px_hsl(var(--gold)/0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT — Content */}
              <div className="relative z-10 p-8 md:p-14 lg:p-16">
                <span className="pill-gold">
                  <ShieldCheck className="h-3.5 w-3.5" /> Crédito Consignado
                </span>

                <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                  Empréstimos{" "}
                  <span className="text-[hsl(var(--gold))]">consignados</span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90">
                    para quem trabalha com apps
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-base md:text-lg text-foreground/70">
                  Crédito com taxas justas, aprovação rápida e parcelas que cabem
                  no seu bolso.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { icon: Percent, t: "Taxas", b: "mais baixas" },
                    { icon: Zap, t: "Aprovação", b: "rápida" },
                    { icon: ShieldCheck, t: "Segurança e", b: "transparência" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--gold))/0.4] bg-[hsl(var(--gold))/0.08]">
                        <f.icon className="h-4 w-4 text-[hsl(var(--gold))]" />
                      </div>
                      <div className="text-xs md:text-sm leading-tight">
                        <div className="text-foreground/80">{f.t}</div>
                        <div className="font-bold text-foreground">{f.b}</div>
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
                    Seus dados protegidos<br />com criptografia
                  </div>
                </div>
              </div>

              {/* RIGHT — Image */}
              <div className="relative min-h-[380px] lg:min-h-[560px]">
                <img
                  src={driverImg}
                  alt="Motorista de aplicativo sorrindo com celular"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--midnight))] via-[hsl(var(--midnight))/0.4] to-transparent lg:bg-gradient-to-r lg:from-[hsl(var(--midnight))] lg:via-transparent lg:to-transparent" />

                {/* Testimonial badge */}
                <div className="absolute bottom-6 right-6 max-w-[240px] rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
                  <div className="text-3xl leading-none text-[hsl(var(--gold))]">“</div>
                  <p className="mt-1 text-sm text-foreground/90">
                    O crédito que acompanha o{" "}
                    <span className="font-bold text-[hsl(var(--gold))]">meu ritmo.</span>
                  </p>
                  <div className="mt-3 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                    ))}
                  </div>
                  <p className="mt-1 text-[11px] text-foreground/60">
                    Motorista de aplicativo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AppDriverSection;