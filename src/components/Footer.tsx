import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "@/data/site";

const Footer = () => (
  <footer className="relative mt-24 overflow-hidden bg-[hsl(var(--navy-deep))] text-white">
    <div className="blob -left-20 top-10 h-72 w-72" style={{ background: "hsl(218 100% 50%)" }} />
    <div className="blob right-0 bottom-0 h-80 w-80" style={{ background: "hsl(40 78% 48% / 0.4)" }} />
    <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl bg-white/95 px-4 py-3 inline-flex">
          <Logo className="h-12" />
        </div>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{SITE.description}</p>
        <div className="mt-6 flex gap-3">
          {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Rede social"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition-all hover:border-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))/0.15] hover:text-[hsl(var(--gold-soft))]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--gold-soft))]">Navegação</h4>
        <ul className="mt-5 space-y-3 text-sm text-white/80">
          {[
            ["Início", "/"],
            ["Consignado", "/consignado"],
            ["Securitizadora", "/securitizadora"],
            ["Invista Conosco", "/invista-conosco"],
            ["Blog", "/blog"],
            ["Dúvidas", "/duvidas"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link to={href} className="transition-colors hover:text-white">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--gold-soft))]">Soluções</h4>
        <ul className="mt-5 space-y-3 text-sm text-white/80">
          {[
            ["Antecipação de Recebíveis", "/securitizadora/antecipacao-de-recebiveis"],
            ["Boleto Garantido", "/securitizadora/boleto-garantido"],
            ["Conta Digital Luri", "/securitizadora/conta-digital-luri"],
            ["Crédito Consignado", "/consignado"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link to={href} className="transition-colors hover:text-white">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--gold-soft))]">Contato</h4>
        <ul className="mt-5 space-y-3 text-sm text-white/80">
          <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" /> {SITE.phone}</li>
          <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" /> {SITE.whatsapp}</li>
          <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" /> {SITE.email}</li>
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" /> {SITE.address}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} Credifácil. Todos os direitos reservados.</p>
        <p>CNPJ {SITE.cnpj}</p>
      </div>
    </div>
  </footer>
);

export default Footer;