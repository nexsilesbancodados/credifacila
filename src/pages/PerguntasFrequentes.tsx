import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  HelpCircle,
  Search,
  MessageCircle,
  Plus,
  Minus,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/credifacil-logo.webp";
import { site, whatsappLink, telLink, mailLink } from "@/config/site";
import { useSeo } from "@/hooks/useSeo";

type Q = { q: string; a: string };

const categories: { id: string; label: string; questions: Q[] }[] = [
  {
    id: "contratacao",
    label: "Contratação",
    questions: [
      {
        q: "Quanto tempo leva para o dinheiro cair na conta?",
        a: "Após a aprovação, o crédito é liberado em até algumas horas no mesmo dia útil — em muitos casos, em poucos minutos via PIX.",
      },
      {
        q: "Quem pode solicitar um empréstimo?",
        a: "Qualquer pessoa com mais de 18 anos, CPF regular e renda comprovada. A aprovação depende da análise do seu perfil de crédito.",
      },
      {
        q: "Preciso ter conta em algum banco específico?",
        a: "Não. Você pode receber o crédito em qualquer conta bancária ou conta digital de sua titularidade.",
      },
      {
        q: "Quais documentos preciso apresentar?",
        a: "Apenas RG ou CNH, CPF, comprovante de residência e comprovante de renda. Tudo enviado pelo nosso portal digital, sem papelada.",
      },
    ],
  },
  {
    id: "taxas",
    label: "Taxas e parcelas",
    questions: [
      {
        q: "Quais são as taxas de juros?",
        a: `Nossas taxas começam em ${site.product.rateMin} e variam conforme o seu perfil, valor e prazo. Tudo é apresentado de forma transparente antes de você assinar.`,
      },
      {
        q: "Posso quitar o empréstimo antecipadamente?",
        a: "Pode sim, com desconto proporcional dos juros futuros. É um direito seu garantido por lei e nós facilitamos o processo no app ou pelo atendimento.",
      },
      {
        q: "Qual o valor mínimo e máximo do crédito?",
        a: `Trabalhamos com valores entre R$ ${site.product.minAmount.toLocaleString("pt-BR")} e R$ ${site.product.maxAmount.toLocaleString("pt-BR")}, em até ${site.product.maxInstallments}x.`,
      },
      {
        q: "A simulação afeta o meu score?",
        a: "Não. A simulação é gratuita e não realiza consulta restritiva ao Bureau de Crédito.",
      },
    ],
  },
  {
    id: "seguranca",
    label: "Segurança e privacidade",
    questions: [
      {
        q: "É seguro enviar meus dados?",
        a: "Sim. Utilizamos criptografia SSL 256-bit padrão bancário e seguimos rigorosamente a LGPD para proteger todas as suas informações.",
      },
      {
        q: "Vocês compartilham meus dados?",
        a: "Não. Seus dados são usados apenas para análise da sua proposta e comunicação com você. Nunca vendemos ou compartilhamos com terceiros para marketing.",
      },
      {
        q: "Como solicito a exclusão dos meus dados?",
        a: `Basta enviar um e-mail para ${site.contact.email} com o assunto "LGPD — Exclusão de dados" e atenderemos em até 15 dias.`,
      },
    ],
  },
  {
    id: "consignado",
    label: "Consignado",
    questions: [
      {
        q: "Quem pode contratar o consignado?",
        a: "Aposentados e pensionistas do INSS, servidores públicos, militares e CLT de empresas conveniadas.",
      },
      {
        q: "Qual a margem consignável?",
        a: "Você pode comprometer até 35% da sua renda com parcelas de consignado, conforme legislação vigente.",
      },
      {
        q: "Posso fazer portabilidade do meu consignado?",
        a: "Sim! Trazemos seu consignado de outro banco com taxa menor. A operação é 100% digital e nós cuidamos de toda burocracia.",
      },
    ],
  },
];

const PerguntasFrequentes = () => {
  useSeo({
    title: "Perguntas Frequentes | Credifácil",
    description:
      "Tire suas dúvidas sobre empréstimos, taxas, prazos, segurança, consignado e mais. Respostas claras e objetivas para você decidir com confiança.",
    canonical: `${site.url}/perguntas-frequentes`,
  });

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const term = query.toLowerCase().trim();
    return categories
      .filter((c) => activeCat === "all" || c.id === activeCat)
      .map((c) => ({
        ...c,
        questions: c.questions.filter(
          (qq) =>
            !term ||
            qq.q.toLowerCase().includes(term) ||
            qq.a.toLowerCase().includes(term)
        ),
      }))
      .filter((c) => c.questions.length > 0);
  }, [query, activeCat]);

  const totalShown = filtered.reduce((acc, c) => acc + c.questions.length, 0);

  return (
    <div className="min-h-screen bg-[hsl(220_16%_98%)]">
      {/* Top bar */}
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Credifácil">
            <img
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto brightness-0 invert md:h-10"
              width={1795}
              height={605}
            />
          </Link>
          <Link to="/" className="btn-ghost-light">
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220_16%_6%)] pb-24 pt-32 text-white md:pt-40">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.4), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <span className="pill-eyebrow-dark">
            <HelpCircle className="h-3.5 w-3.5" />
            Central de Ajuda
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-[58px]">
            Como podemos{" "}
            <span className="text-gold-gradient">te ajudar?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/82 md:text-lg">
            Reunimos as principais dúvidas dos nossos clientes. Pesquise pela palavra-chave ou navegue por categoria.
          </p>

          {/* Search */}
          <label className="relative mx-auto mt-8 block max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por palavra-chave… (ex: taxa, score, prazo)"
              className="w-full rounded-2xl border border-white/15 bg-white/[0.06] pl-12 pr-4 py-4 text-sm font-medium text-white backdrop-blur-md transition-all placeholder:text-white/40 focus:border-brand-gold focus:bg-white/[0.1] focus:outline-none"
            />
          </label>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-5xl px-5 -mt-8 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-foreground/10 bg-white/95 p-3 shadow-[var(--shadow-soft)] backdrop-blur-md">
          {[{ id: "all", label: "Todas" }, ...categories.map((c) => ({ id: c.id, label: c.label }))].map((c) => {
            const isActive = activeCat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCat(c.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
                    : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                }`}
                style={isActive ? { background: "var(--gradient-gold)" } : undefined}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Lista de FAQs */}
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-10 md:px-8 md:pb-24">
        {totalShown === 0 ? (
          <div className="rounded-2xl border border-brand-gold/20 bg-white/80 p-10 text-center backdrop-blur-sm">
            <Sparkles className="mx-auto mb-3 h-8 w-8 text-brand-gold" />
            <h3 className="text-lg font-bold text-foreground">Nada encontrado</h3>
            <p className="mt-2 text-sm text-foreground/72">
              Não achamos nada para "{query}". Tente outra palavra ou fale com a gente abaixo.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {filtered.map((cat) => (
              <div key={cat.id} data-anim="fade-up">
                <h2 className="mb-4 font-display text-xl font-bold text-foreground md:text-2xl">
                  {cat.label}
                </h2>
                <div className="flex flex-col gap-3">
                  {cat.questions.map((qq, i) => {
                    const id = `${cat.id}-${i}`;
                    const isOpen = open === id;
                    return (
                      <div
                        key={id}
                        className={`overflow-hidden rounded-2xl border bg-white/85 backdrop-blur-sm transition-all ${
                          isOpen
                            ? "border-brand-gold/60 shadow-[var(--shadow-soft)]"
                            : "border-brand-gold/15 hover:border-brand-gold/40"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : id)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                        >
                          <span className="text-sm font-bold text-[hsl(220_16%_15%)] md:text-base">
                            {qq.q}
                          </span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-gold-foreground shadow-[var(--shadow-gold-sm)] transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            style={{ background: "var(--gradient-gold)" }}
                          >
                            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </button>
                        <div
                          className={`grid transition-all duration-300 ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-5 pb-5 pr-14 text-sm leading-relaxed text-[hsl(220_15%_35%)] md:px-6 md:pb-6 md:text-[15px]">
                              {qq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA contato */}
      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <div
          className="relative overflow-hidden rounded-[28px] border border-brand-gold/30 p-8 md:p-10"
          style={{ background: "var(--gradient-ink)" }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, hsl(35 85% 58% / 0.55), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="pill-eyebrow-dark">
                <MessageCircle className="h-3.5 w-3.5" />
                Falar com humano
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                Não achou sua dúvida?
                <br />
                <span className="text-gold-gradient">Estamos aqui para você.</span>
              </h2>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/78">
                <Clock className="h-4 w-4 text-brand-gold" />
                {site.contact.hours}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href={whatsappLink("Olá! Tenho uma dúvida que não encontrei na FAQ.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !justify-start !text-left"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="flex-1">WhatsApp · {site.contact.whatsappDisplay}</span>
              </a>
              <a href={telLink(site.contact.phone)} className="btn-ghost-light !justify-start">
                <Phone className="h-4 w-4" />
                <span className="flex-1 text-left">Telefone · {site.contact.phoneDisplay}</span>
              </a>
              <a href={mailLink("Dúvida — FAQ")} className="btn-ghost-light !justify-start">
                <Mail className="h-4 w-4" />
                <span className="flex-1 text-left">{site.contact.email}</span>
              </a>
              <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/75">
                <ShieldCheck className="h-3 w-3 text-brand-gold" />
                Atendimento humano · resposta na hora
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerguntasFrequentes;
