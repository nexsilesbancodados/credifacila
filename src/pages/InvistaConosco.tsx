import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  Lock,
  Users,
  Clock,
  Award,
  Loader2,
} from "lucide-react";
import { z } from "zod";
import { site, whatsappLink, telLink, mailLink } from "@/config/site";
import { useSeo } from "@/hooks/useSeo";
import logo from "@/assets/credifacil-logo.webp";
import heroInvista from "@/assets/invista-hero.webp";
import heroInvistaMd from "@/assets/invista-hero-md.webp";
import heroInvistaSm from "@/assets/invista-hero-sm.webp";

const benefits = [
  {
    icon: TrendingUp,
    title: "Rentabilidade competitiva",
    desc: "Taxas alinhadas ao mercado, com transparência total e contratos sem letras miúdas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    desc: "Operações lastreadas em recebíveis e respaldadas por uma instituição autorizada pelo Banco Central.",
  },
  {
    icon: Lock,
    title: "Dados protegidos",
    desc: "Criptografia bancária e conformidade total com a LGPD em cada etapa do processo.",
  },
  {
    icon: Users,
    title: "Atendimento dedicado",
    desc: "Um especialista exclusivo para acompanhar seus aportes e tirar dúvidas quando precisar.",
  },
  {
    icon: Clock,
    title: "Liquidez sob medida",
    desc: "Prazos flexíveis, com opções desenhadas para o seu objetivo e horizonte de investimento.",
  },
  {
    icon: Award,
    title: "12+ anos de mercado",
    desc: "Mais de R$ 1 bilhão em crédito liberado e milhares de clientes que confiam na nossa gestão.",
  },
];

const steps = [
  { step: "01", title: "Fale com um especialista", desc: "Conte seus objetivos e o valor que pretende investir." },
  { step: "02", title: "Receba uma proposta", desc: "Apresentamos as condições, prazos e taxa adequados ao seu perfil." },
  { step: "03", title: "Formalize o aporte", desc: "Assinatura digital do contrato com toda segurança jurídica." },
  { step: "04", title: "Acompanhe seu rendimento", desc: "Relatórios periódicos e suporte dedicado durante todo o período." },
];

const forWho = [
  "Investidores que buscam diversificar a carteira fora da renda variável",
  "Empresários e profissionais liberais com capital ocioso",
  "Family offices e gestores patrimoniais",
  "Pessoas que querem retorno acima da poupança com segurança",
];

const faq = [
  {
    q: "Qual o valor mínimo para começar a investir?",
    a: "Os aportes são personalizados conforme o perfil do investidor. Fale com nosso time para receber uma proposta sob medida.",
  },
  {
    q: "Como funciona a remuneração?",
    a: "A taxa é definida em contrato, conforme o valor aportado, prazo e modalidade escolhida. Tudo transparente, sem surpresas.",
  },
  {
    q: "Meu dinheiro está seguro?",
    a: "Sim. Operamos sob regulação do Banco Central, com lastro em recebíveis reais e contratos com força jurídica plena.",
  },
  {
    q: "Posso resgatar antes do prazo?",
    a: "Existem modalidades com diferentes níveis de liquidez. O especialista vai indicar a melhor opção para o seu objetivo.",
  },
  {
    q: "Preciso ser pessoa jurídica?",
    a: "Não. Atendemos tanto pessoas físicas quanto jurídicas, com a mesma estrutura de segurança e atendimento.",
  },
];

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome completo." })
    .max(100, { message: "Nome muito longo." }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido." })
    .max(255, { message: "E-mail muito longo." }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Informe um telefone válido." })
    .max(20, { message: "Telefone muito longo." }),
  amount: z
    .string()
    .trim()
    .max(40, { message: "Informe uma faixa de valor válida." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(500, { message: "Mensagem muito longa." })
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const InvistaConosco = () => {
  useSeo({
    title: "Invista Conosco — Faça seu dinheiro render | Credifácil",
    description:
      "Diversifique sua carteira com a Credifácil. Investimento seguro, rentabilidade competitiva e atendimento dedicado. Fale com um especialista.",
  });

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const data = result.data;
    const subject = "Interesse em investir com a Credifácil";
    const body = [
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.phone}`,
      data.amount ? `Faixa de aporte: ${data.amount}` : null,
      data.message ? `\nMensagem:\n${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = mailLink(subject, body);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[hsl(220_16%_98%)]">
      {/* Top bar (light variant for light hero) */}
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Credifácil">
            <img
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto md:h-10"
              width={1795}
              height={605}
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-gold/40 bg-white/80 px-5 py-3 text-sm font-semibold text-[hsl(220_16%_15%)] backdrop-blur-md transition-all hover:border-brand-gold hover:bg-white hover:text-brand-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[hsl(40_60%_97%)] to-[hsl(220_16%_98%)] pb-16 pt-28 md:pt-32 lg:pt-36">
        {/* Soft golden ambient glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-20 h-[600px] w-[600px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 90% 65% / 0.25), transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 top-40 h-[480px] w-[480px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(40 90% 70% / 0.22), transparent 65%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          {/* Eyebrow */}
          <div className="text-center" data-anim="fade-up">
            <span className="pill-eyebrow">
              <Sparkles className="h-3 w-3" />
              Invista Conosco
            </span>
          </div>

          {/* Hero image (contains its own headline + copy) */}
          <div
            className="relative mt-6 overflow-hidden rounded-[28px] border border-brand-gold/15 bg-white shadow-[0_40px_80px_-40px_hsl(30_30%_20%/0.35)]"
            data-anim="fade-up"
          >
            <h1 className="sr-only">
              Faça seu dinheiro render com segurança — Credifácil
            </h1>
            <picture>
              <source media="(max-width: 640px)" srcSet={heroInvistaSm} />
              <source media="(max-width: 1100px)" srcSet={heroInvistaMd} />
              <img
                src={heroInvista}
                alt="Faça seu dinheiro render com segurança. Coloque seu capital para trabalhar ao lado de quem entende de crédito há mais de 12 anos. Segurança e solidez, rentabilidade competitiva, atendimento humano."
                className="block h-auto w-full"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1600}
                height={1067}
              />
            </picture>

            {/* Subtle gold curve accent at bottom */}
            <svg
              className="pointer-events-none absolute -bottom-px left-0 h-3 w-full md:h-4"
              viewBox="0 0 1440 16"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,16 L1440,16 L1440,9 Q720,-4 0,9 Z"
                fill="hsl(38 90% 55% / 0.5)"
              />
            </svg>
          </div>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            data-anim="fade-up"
          >
            <a
              href={whatsappLink("Olá! Quero saber como investir com a Credifácil.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com especialista
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#interesse"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-gold/40 bg-white/85 px-5 py-3.5 text-sm font-semibold text-[hsl(220_16%_15%)] backdrop-blur-md transition-all hover:border-brand-gold hover:bg-white hover:text-brand-gold"
            >
              Quero ser contatado
            </a>
          </div>

          {/* Quick proof strip */}
          <div
            className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 rounded-2xl border border-brand-gold/20 bg-white/80 px-5 py-4 backdrop-blur-sm md:gap-6 md:px-7"
            data-anim="fade-up"
          >
            <div className="text-center">
              <div className="font-display text-xl font-bold text-brand-gold md:text-2xl">12+</div>
              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[hsl(220_15%_45%)]">
                anos de mercado
              </div>
            </div>
            <div className="border-x border-brand-gold/15 text-center">
              <div className="font-display text-xl font-bold text-brand-gold md:text-2xl">R$ 1bi+</div>
              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[hsl(220_15%_45%)]">
                operados
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-xl font-bold text-brand-gold md:text-2xl">100%</div>
              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[hsl(220_15%_45%)]">
                transparente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Por que investir com a Credifácil
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(215_42%_18%)] md:text-4xl">
              Solidez, transparência e atendimento humano
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(220_15%_38%)]">
              Mais que rentabilidade — uma parceria de longo prazo com quem cuida do seu capital
              com a mesma seriedade que cuida dos próprios negócios.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-anim-stagger>
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-[hsl(220_15%_88%)] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[var(--shadow-gold)]"
                >
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)] transition-transform group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[hsl(215_42%_18%)]">
                    {b.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[hsl(220_15%_38%)]">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[hsl(220_16%_96%)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Passo a passo
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(215_42%_18%)] md:text-4xl">
              Como começar a investir
            </h2>
          </div>
          <div className="relative mt-14" data-anim-stagger>
            <div
              className="absolute left-[8%] right-[8%] top-9 hidden h-0.5 lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--brand-gold) / 0.5), hsl(var(--brand-gold) / 0.5), hsl(var(--brand-gold) / 0.5), transparent)",
              }}
              aria-hidden
            />
            <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div
                    className="mx-auto mb-4 inline-flex h-[72px] w-[72px] items-center justify-center rounded-full font-display text-2xl font-extrabold text-brand-gold-foreground shadow-[var(--shadow-gold)] ring-4 ring-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[hsl(215_42%_18%)]">
                    {s.title}
                  </h3>
                  <p className="mx-auto max-w-[260px] text-[14px] leading-relaxed text-[hsl(220_15%_38%)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="relative overflow-hidden bg-[hsl(215_48%_16%)] py-20 md:py-24">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.5), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Para quem é
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Indicado para o seu perfil
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2" data-anim-stagger>
            {forWho.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white/85 backdrop-blur-md transition-all hover:border-brand-gold/40 hover:bg-white/[0.07]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                <span className="text-[15px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section id="interesse" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div data-anim="fade-right">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Quero ser contatado
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(215_42%_18%)] md:text-4xl">
              Vamos conversar sobre o seu próximo investimento
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[hsl(220_15%_38%)]">
              Preencha o formulário e um especialista da Credifácil entra em contato em até 1 dia útil
              com uma proposta sob medida para o seu objetivo. Sem compromisso.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappLink("Olá! Quero saber como investir com a Credifácil.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 transition-colors hover:bg-emerald-500/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-[hsl(215_42%_18%)]">Prefere falar agora?</div>
                  <div className="mt-0.5 text-xs text-[hsl(220_15%_38%)]">
                    Atendimento na hora pelo WhatsApp
                  </div>
                </div>
              </a>
              <a
                href={telLink(site.contact.phone)}
                className="flex items-center gap-4 rounded-2xl border border-brand-gold/30 bg-brand-gold/5 p-4 transition-colors hover:bg-brand-gold/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-[hsl(215_42%_18%)]">{site.contact.phoneDisplay}</div>
                  <div className="mt-0.5 text-xs text-[hsl(220_15%_38%)]">{site.contact.hours}</div>
                </div>
              </a>
            </div>
          </div>

          <div data-anim="fade-left">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-[hsl(220_15%_88%)] bg-[hsl(220_16%_98%)] p-6 shadow-sm md:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <span
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-brand-gold-foreground shadow-[var(--shadow-gold)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-[hsl(215_42%_18%)]">
                    Recebemos seu interesse!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-[hsl(220_15%_38%)]">
                    Seu cliente de e-mail foi aberto com os dados preenchidos. Caso prefira, fale conosco
                    diretamente no WhatsApp.
                  </p>
                  <a
                    href={whatsappLink("Olá! Quero saber como investir com a Credifácil.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-6"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="form-label">Nome completo *</label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        maxLength={100}
                        value={form.name}
                        onChange={onChange("name")}
                        className={`form-input ${errors.name ? "form-input-error" : ""}`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="form-error">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">E-mail *</label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        maxLength={255}
                        value={form.email}
                        onChange={onChange("email")}
                        className={`form-input ${errors.email ? "form-input-error" : ""}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="form-error">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Telefone *</label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={20}
                        value={form.phone}
                        onChange={onChange("phone")}
                        className={`form-input ${errors.phone ? "form-input-error" : ""}`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="form-error">{errors.phone}</p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="amount" className="form-label">Faixa de aporte (opcional)</label>
                      <input
                        id="amount"
                        type="text"
                        maxLength={40}
                        placeholder="Ex.: R$ 50.000 a R$ 100.000"
                        value={form.amount}
                        onChange={onChange("amount")}
                        className={`form-input ${errors.amount ? "form-input-error" : ""}`}
                        aria-invalid={!!errors.amount}
                      />
                      {errors.amount && <p className="form-error">{errors.amount}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="form-label">Mensagem (opcional)</label>
                      <textarea
                        id="message"
                        rows={4}
                        maxLength={500}
                        placeholder="Conte um pouco sobre o que você procura."
                        value={form.message}
                        onChange={onChange("message")}
                        className={`form-input resize-none ${errors.message ? "form-input-error" : ""}`}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="form-error">{errors.message}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Enviar interesse
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[11px] text-[hsl(220_15%_45%)]">
                    Seus dados são tratados conforme a LGPD e não são compartilhados com terceiros.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[hsl(220_16%_96%)] py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Dúvidas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(215_42%_18%)] md:text-4xl">
              Perguntas comuns sobre investir
            </h2>
          </div>
          <div className="mt-12 space-y-4" data-anim-stagger>
            {faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[hsl(220_15%_88%)] bg-white p-6 transition-all open:border-brand-gold/40 open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-[15px] font-semibold text-[hsl(215_42%_18%)] md:text-base">
                  {f.q}
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-relaxed text-[hsl(220_15%_38%)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvistaConosco;