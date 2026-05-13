import { memo } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "@/data/site";

const Footer = () => (
  <footer className="relative mt-24 overflow-hidden bg-midnight text-white">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" aria-hidden="true" />
    
    <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl bg-white/95 px-4 py-3 inline-flex">
          <Logo className="h-10" aria-hidden={true} />
        </div>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">{SITE.description}</p>
        <nav className="mt-8 flex gap-3" aria-label="Redes sociais">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Facebook, label: "Facebook" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Youtube, label: "YouTube" }
          ].map(({ Icon, label }, i) => (
            <a
              key={i}
              href="#"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/5 bg-white/5 transition-all hover:bg-[hsl(var(--gold-soft))] hover:text-navy-deep hover:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))]"
            >
              <Icon className="h-4 w-4" aria-hidden={true} />
            </a>
          ))}
        </nav>
      </div>

      <nav aria-label="Links de navegação">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Navegação</h4>
        <ul className="mt-6 space-y-3 text-sm text-white/60">
          {[
            ["Início", "/"],
            ["Consignado", "/consignado"],
            ["Securitizadora", "/securitizadora"],
            ["Invista Conosco", "/invista-conosco"],
            ["Blog & Insights", "/blog"],
            ["Ajuda & FAQ", "/duvidas"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link to={href} className="transition-colors hover:text-[hsl(var(--gold-soft))] outline-none focus-visible:text-[hsl(var(--gold-soft))]">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Links de negócios">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Business</h4>
        <ul className="mt-6 space-y-3 text-sm text-white/60">
          {[
            ["Antecipação", "/securitizadora/antecipacao-de-recebiveis"],
            ["Boleto Garantido", "/securitizadora/boleto-garantido"],
            ["Conta Luri", "/securitizadora/conta-digital-luri"],
            ["Wealth Advisory", "/contato"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link to={href} className="transition-colors hover:text-[hsl(var(--gold-soft))] outline-none focus-visible:text-[hsl(var(--gold-soft))]">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div aria-label="Informações de contato">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Contato</h4>
        <ul className="mt-6 space-y-4 text-sm text-white/60">
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" aria-hidden={true} /> 
            <span className="text-white/80">{SITE.phone}</span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" aria-hidden={true} /> 
            <span className="text-white/80">{SITE.email}</span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-[hsl(var(--gold-soft))]" aria-hidden={true} /> 
            <span className="text-white/80 leading-relaxed">{SITE.address}</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/5 bg-black/20 py-10">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-white/30 md:flex-row">
          <p>© {new Date().getFullYear()} Credifácil Network</p>
          <p>CNPJ {SITE.cnpj} • Regulado BACEN</p>
        </div>
        <div className="mt-10 grid gap-8 text-[9px] leading-loose text-white/20 md:grid-cols-2 text-justify">
          <p>
            A Credifácil não é uma instituição financeira e não realiza operações de crédito diretamente. Atuamos como correspondente bancário em conformidade com a Resolução nº 4.935 do Banco Central do Brasil. Todas as propostas estão sujeitas à análise de crédito pelas instituições financeiras parceiras autorizadas.
          </p>
          <p>
            Taxas e condições variam conforme o perfil de risco do tomador. Investimentos em ativos estruturados não possuem garantia do FGC. A rentabilidade passada não é garantia de resultados futuros. Consulte sempre um advisor certificado antes de realizar alocações de capital ou contratar linhas de fomento comercial.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default memo(Footer);
