import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo-credifacil.png";

const navGroups = [
  {
    title: "Produtos",
    links: [
      { label: "Crédito Consignado", href: "/consignado" },
      { label: "Empréstimo Pessoal", href: "/pessoal" },
      { label: "Securitizadora", href: "/securitizadora" },
      { label: "Portal do Cliente", href: "https://www.systemjuros.com.br/portal-cliente" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Dúvidas", href: "/duvidas" },
      { label: "Carreiras", href: "/carreiras" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de uso", href: "/termos" },
      { label: "Política de privacidade", href: "/privacidade" },
      { label: "LGPD", href: "/lgpd" },
      { label: "Ouvidoria", href: "/ouvidoria" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#06101f]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-[hsl(var(--gold))/0.12] blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-20">
          <div className="md:col-span-4">
            <a href="/" className="inline-flex items-center">
              <img src={logo} alt="Credifácil" className="h-14 w-auto object-contain" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/60">
              Crédito sob medida, com atendimento humano e tecnologia de ponta.
              Soluções financeiras para o seu ritmo.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--gold-soft))]" />
                <span>(11) 96454-1758</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--gold-soft))]" />
                <span>(11) 94089-3852</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--gold-soft))]" />
                <span>contato@credifacil.com.br</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--gold-soft))]">
                  {group.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-foreground/65 transition hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Credifácil. Todos os direitos reservados.
            CNPJ 00.000.000/0001-00.
          </p>

          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/65 transition hover:border-[hsl(var(--gold))/0.45] hover:text-[hsl(var(--gold))]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;