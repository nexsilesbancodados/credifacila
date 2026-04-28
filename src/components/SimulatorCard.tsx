import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Lock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Field, Input } from "@/components/ui/field";
import {
  computeMonthly,
  formatBRL,
  site,
  whatsappLink,
} from "@/config/site";

type Props = {
  variant?: "card" | "page";
  defaultAmount?: number;
  defaultInstallments?: number;
};

const onlyDigits = (v: string) => v.replace(/\D/g, "");
const maskPhone = (v: string) => {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const SimulatorCard = ({
  variant = "card",
  defaultAmount = 15_000,
  defaultInstallments = 36,
}: Props) => {
  const [amount, setAmount] = useState(defaultAmount);
  const [installments, setInstallments] = useState(defaultInstallments);
  const [step, setStep] = useState<"sim" | "form" | "done">("sim");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const monthly = useMemo(
    () => computeMonthly(amount, installments),
    [amount, installments]
  );

  const total = monthly * installments;
  const interest = total - amount;
  const isPage = variant === "page";

  const sliderProgress = ((amount - site.product.minAmount) / (site.product.maxAmount - site.product.minAmount)) * 100;

  const submit = () => {
    const newErrors: typeof errors = {};
    if (name.trim().length < 2) newErrors.name = "Informe seu nome.";
    if (onlyDigits(phone).length < 10) newErrors.phone = "Informe um WhatsApp válido.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const message = [
      `Olá, Credifácil! Acabei de simular um empréstimo:`,
      ``,
      `• Nome: ${name}`,
      `• WhatsApp: ${phone}`,
      email ? `• E-mail: ${email}` : null,
      `• Valor desejado: ${formatBRL(amount)}`,
      `• Parcelas: ${installments}x de ${formatBRL(monthly)}`,
      `• Total estimado: ${formatBRL(total)}`,
      ``,
      `Gostaria de prosseguir com a contratação. Pode me ajudar?`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setStep("done");
  };

  return (
    <div
      data-anim="scale-in"
      className={`relative rounded-[28px] border border-white/40 bg-white/95 p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] backdrop-blur-xl ${
        isPage ? "md:p-9" : "md:p-7"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brand-gold)), transparent)" }}
        aria-hidden
      />
      <div
        className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
        style={{ background: "var(--gradient-gold)" }}
      >
        <Sparkles className="h-3 w-3" />
        Simulador grátis
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className={`font-display font-bold text-foreground ${isPage ? "text-2xl" : "text-xl"}`}>
            Simule seu empréstimo
          </h3>
          <p className="mt-1 text-xs text-foreground/55">
            {step === "sim"
              ? "Em 30 segundos você tem sua resposta."
              : step === "form"
              ? "Falta pouco — só seus dados pra finalizar."
              : "Tudo pronto! Já te chamamos no WhatsApp."}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-700">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Online
        </span>
      </div>

      {step === "done" ? (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <h4 className="text-lg font-bold text-foreground">Simulação enviada!</h4>
          <p className="text-sm leading-relaxed text-foreground/70">
            Abrimos uma conversa pra você no WhatsApp com todos os detalhes. Se a janela não abriu, clique abaixo:
          </p>
          <a
            href={whatsappLink(`Olá! Sou ${name} e gostaria de continuar minha simulação.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Abrir WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setStep("sim");
              setName("");
              setPhone("");
              setEmail("");
            }}
            className="text-xs font-semibold text-foreground/60 underline-offset-4 transition-colors hover:text-brand-gold hover:underline"
          >
            Fazer nova simulação
          </button>
        </div>
      ) : step === "form" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="mt-6 flex flex-col gap-4"
        >
          {/* Resumo */}
          <div className="rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-[hsl(40_70%_94%)] to-[hsl(38_60%_88%)] p-4">
            <div className="flex items-center justify-between text-xs text-foreground/65">
              <span>Você simulou</span>
              <button
                type="button"
                onClick={() => setStep("sim")}
                className="font-semibold text-brand-gold hover:underline"
              >
                Editar
              </button>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-foreground">{formatBRL(amount)}</span>
              <span className="text-xs text-foreground/60">em {installments}x de</span>
              <span className="font-display text-lg font-bold text-brand-gold">{formatBRL(monthly)}</span>
            </div>
          </div>

          <Field label="Como podemos te chamar?" required error={errors.name}>
            <Input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              autoComplete="name"
              required
            />
          </Field>

          <Field label="WhatsApp" required error={errors.phone} hint="Vamos te chamar por aqui em instantes.">
            <Input
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              placeholder="(11) 90000-0000"
              autoComplete="tel"
              inputMode="tel"
              required
            />
          </Field>

          <Field label="E-mail (opcional)">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              autoComplete="email"
            />
          </Field>

          <button type="submit" className="btn-gold w-full">
            <MessageCircle className="h-4 w-4" />
            Continuar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-2 text-[11px] leading-relaxed text-foreground/55">
            <Lock className="mt-0.5 h-3 w-3 shrink-0" />
            Seus dados são protegidos pela LGPD e usados apenas para a sua simulação. Não compartilhamos com terceiros.
          </div>
        </form>
      ) : (
        <>
          {/* Slider valor */}
          <div className="mt-6">
            <div className="flex items-end justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
                Quanto você precisa?
              </span>
              <span className="text-[10px] font-medium text-foreground/55">
                {formatBRL(site.product.minAmount)} – {formatBRL(site.product.maxAmount)}
              </span>
            </div>
            <div className="mt-1 font-display text-[34px] font-bold leading-none text-foreground">
              {formatBRL(amount)}
            </div>
            <input
              type="range"
              min={site.product.minAmount}
              max={site.product.maxAmount}
              step={500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-label="Valor do empréstimo"
              className="mt-3 w-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, hsl(var(--brand-gold)) 0%, hsl(var(--brand-gold)) ${sliderProgress}%, hsl(30 10% 90%) ${sliderProgress}%, hsl(30 10% 90%) 100%)`,
                borderRadius: 9999,
              }}
            />
          </div>

          {/* Parcelas */}
          <div className="mt-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
              Em quantas parcelas?
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {[12, 24, 36, 48, 60].map((n) => {
                const active = installments === n;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setInstallments(n)}
                    className={`relative flex-1 min-w-[60px] rounded-xl border px-3 py-2.5 text-sm font-bold transition-all ${
                      active
                        ? "border-transparent text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
                        : "border-foreground/15 bg-white/70 text-foreground/75 hover:border-brand-gold/40 hover:text-foreground"
                    }`}
                    style={active ? { background: "var(--gradient-gold)" } : undefined}
                  >
                    {n}x
                  </button>
                );
              })}
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-foreground/50">
              <ChevronDown className="h-3 w-3" />
              Quanto maior o prazo, menor a parcela.
            </div>
          </div>

          {/* Resultado */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-[hsl(40_70%_94%)] to-[hsl(38_60%_88%)] p-4">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, hsl(var(--brand-gold) / 0.4), transparent 70%)" }}
              aria-hidden
            />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                  Parcela estimada
                </div>
                <div className="mt-1 font-display text-[26px] font-bold leading-none text-foreground">
                  {formatBRL(monthly)}
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3 w-3" />
                  Cabe no seu bolso
                </div>
              </div>
              <div className="h-14 w-px bg-foreground/10" />
              <div className="text-right">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                  Taxa a partir de
                </div>
                <div className="mt-1 font-display text-[26px] font-bold leading-none text-brand-gold">
                  {site.product.rateMonthlyDisplay.replace(" a.m.", "")}
                </div>
                <div className="mt-1.5 text-[10px] font-semibold text-foreground/55">a.m. · CET sob consulta</div>
              </div>
            </div>
            {/* Mini stats */}
            <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-3 text-[11px]">
              <div className="leading-tight">
                <div className="text-foreground/55">Total a pagar</div>
                <div className="font-bold text-foreground">{formatBRL(total)}</div>
              </div>
              <div className="leading-tight text-right">
                <div className="text-foreground/55">Juros estimados</div>
                <div className="font-bold text-foreground">{formatBRL(interest)}</div>
              </div>
            </div>
          </div>

          <button type="button" onClick={() => setStep("form")} className="btn-gold mt-5 w-full">
            Quero esse empréstimo
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-foreground/55">
            <Lock className="h-3 w-3" />
            Simulação 100% gratuita · Não afeta seu score
          </div>
        </>
      )}
    </div>
  );
};

export default SimulatorCard;
