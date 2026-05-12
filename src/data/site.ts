export const SITE = {
  name: "Credifácil",
  cnpj: "00.000.000/0001-00",
  phone: "(11) 4000-1234",
  whatsapp: "(11) 99999-1234",
  whatsappLink: "https://wa.me/5511999991234",
  email: "contato@credifacil.com.br",
  address: "São Paulo - SP",
  hours: "Segunda a sexta, das 9h às 18h",
  description:
    "Soluções financeiras inteligentes para você, sua família e seu negócio irem mais longe.",
} as const;

export const NAV = [
  { label: "Início", href: "/" },
  { label: "Consignado", href: "/consignado" },
  {
    label: "Securitizadora",
    href: "/securitizadora",
    children: [
      { label: "Visão Geral", href: "/securitizadora" },
      { label: "Antecipação de Recebíveis", href: "/securitizadora/antecipacao-de-recebiveis" },
      { label: "Boleto Garantido", href: "/securitizadora/boleto-garantido" },
      { label: "Conta Digital Luri", href: "/securitizadora/conta-digital-luri" },
    ],
  },
  { label: "Invista Conosco", href: "/invista-conosco" },
  { label: "Blog", href: "/blog" },
  { label: "Dúvidas", href: "/duvidas" },
] as const;