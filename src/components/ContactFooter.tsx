import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import logo from "@/assets/credifacil-logo.png";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 90000-1234",
    href: "#whatsapp",
    badge: "Mais rápido",
  },
  {
    icon: Phone,
    label: "Central de atendimento",
    value: "(11) 4000-1234",
    href: "tel:+551140001234",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@credifacil.com.br",
    href: "mailto:contato@credifacil.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Paulista, 1000 — São Paulo, SP",
  },
];

const navColumns = [
  {
    title: "Empréstimos",
    links: [
      { label: "Crédito pessoal", href: "#emprestimos" },
      { label: "Refinanciamento", href: "#emprestimos" },
      { label: "Crédito consignado", href: "#emprestimos" },
      { label: "Simulador", href: "#emprestimos" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Vantagens", href: "#vantagens" },
      { label: "Dúvidas", href: "#duvidas" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "LGPD", href: "#" },
      { label: "Ouvidoria", href: "#" },
    ],
  },
];

const ContactFooter = () => {
  return (
    <footer
      id="contato"
      className="relative w-full px-5 pt-16 md:px-8 md:pt-20 lg:px-10"
      aria-label="Contato e rodapé"
    >
      <div className="mx-auto max-w-7xl">
        {/* Contact CTA card */}
        <div
          className="relative overflow-hidden rounded-[32px] border border-white/10 p-8 shadow-[var(--shadow-card)] md:p-10"
          style={{
            background:
              "linear-gradient(135deg, hsl(30 18% 11%) 0%, hsl(30 14% 14%) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, hsl(35 90% 60% / 0.6), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-sm">
                <MessageCircle className="h-3 w-3" />
                Fale com a gente
              </span>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl">
                Pronto para realizar{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                >
                  seus planos?
                </span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                Nossa equipe está pronta para te atender pelo canal de sua preferência. Atendimento humano, rápido e sem compromisso.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                <Clock className="h-4 w-4 text-brand-gold" />
                Seg. a sáb., das 8h às 20h
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const isLink = !!c.href;
                const Tag: any = isLink ? "a" : "div";
                return (
                  <Tag
                    key={c.label}
                    {...(isLink ? { href: c.href } : {})}
                    className="group relative flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-brand-gold/40 hover:bg-white/[0.06]"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[0_4px_12px_-4px_hsl(var(--brand-gold)/0.5)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <c.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                          {c.label}
                        </div>
                        {c.badge && (
                          <span className="rounded-full bg-brand-gold/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-gold">
                            {c.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 truncate text-sm font-bold text-white">
                        {c.value}
                      </div>
                    </div>
                    {isLink && (
                      <ChevronRight className="h-4 w-4 self-center text-brand-gold opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-gold/20 pt-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Credifácil" className="h-9 w-auto" loading="lazy" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[hsl(30_15%_35%)]">
              Crédito justo, rápido e humano. Há mais de 12 anos ajudando pessoas a realizarem seus planos com tranquilidade.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[hsl(30_15%_30%)]">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              CNPJ 00.000.000/0001-00 · Autorizada pelo Banco Central
            </div>
            <div className="mt-5 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/30 bg-white/70 text-brand-gold transition-all hover:scale-110 hover:bg-brand-gold hover:text-brand-gold-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[hsl(30_15%_30%)] transition-colors hover:text-brand-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/15 py-6 text-xs text-[hsl(30_15%_40%)] md:flex-row">
          <div>© {new Date().getFullYear()} Credifácil. Todos os direitos reservados.</div>
          <div className="flex items-center gap-1.5">
            Feito com <span className="text-brand-gold">♥</span> para quem realiza sonhos.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;