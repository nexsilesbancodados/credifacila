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
import logo from "@/assets/credifacil-logo.webp";
import { site, whatsappLink, telLink, mailLink } from "@/config/site";


const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.contact.whatsappDisplay,
    href: whatsappLink("Olá, vim pelo site da Credifácil!"),
    badge: "Mais rápido",
    external: true,
  },
  {
    icon: Phone,
    label: "Central de atendimento",
    value: site.contact.phoneDisplay,
    href: telLink(site.contact.phone),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.contact.email,
    href: mailLink("Contato pelo site"),
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: site.contact.address,
  },
];

const navColumns = [
  {
    title: "Empréstimos",
    links: [
      { label: "Crédito consignado", href: "/consignado" },
      { label: "Securitizadora", href: "/securitizadora" },
      { label: "Antecipação de Recebíveis", href: "/securitizadora/antecipacao-de-recebiveis" },
      { label: "Boleto Garantido", href: "/securitizadora/boleto-garantido" },
      { label: "Conta Digital Luri", href: "/securitizadora/conta-digital-luri" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Invista conosco", href: "/invista-conosco" },
      { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidade", href: "/privacidade" },
      { label: "Termos de uso", href: "/termos" },
      { label: "LGPD", href: "/lgpd" },
      { label: "Ouvidoria", href: "/ouvidoria" },
    ],
  },
];

const ContactFooter = () => {
  return (
    <footer
      id="contato"
      className="relative w-full px-4 pt-12 sm:px-5 sm:pt-16 md:px-8 md:pt-20 lg:px-10"
      aria-label="Contato e rodapé"
    >
      <div className="mx-auto max-w-7xl">
        {/* Contact CTA card */}
        <div
          data-anim="scale-in"
          className="relative overflow-hidden rounded-[32px] border border-white/10 p-6 shadow-[var(--shadow-card)] sm:p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 5%) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, hsl(42 78% 60% / 0.6) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-card/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-sm">
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
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/82 md:text-base">
                Nossa equipe está pronta para te atender pelo canal de sua preferência. Atendimento humano, rápido e sem compromisso.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/78">
                <Clock className="h-4 w-4 text-brand-gold" />
                {site.contact.hours}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const isLink = !!c.href;
                const Tag: any = isLink ? "a" : "div";
                const extraProps = c.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Tag
                    key={c.label}
                    {...(isLink ? { href: c.href, ...extraProps } : {})}
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
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/75">
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Crédito justo, rápido e humano. Há mais de {site.metrics.yearsInMarket} anos ajudando pessoas a realizarem seus planos com tranquilidade.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              CNPJ {site.legal.cnpj} · {site.legal.bcb}
            </div>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
                { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
                { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/30 bg-card/70 text-brand-gold transition-all hover:scale-110 hover:bg-brand-gold hover:text-brand-gold-foreground"
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
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-gold"
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
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/15 py-6 text-xs text-muted-foreground md:flex-row">
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