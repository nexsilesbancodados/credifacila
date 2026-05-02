/**
 * Configurações centrais do site. Edite os valores reais aqui antes do deploy.
 * Os campos marcados com TODO são placeholders e devem ser substituídos.
 */
export const site = {
  name: "Credifácil",
  url: "https://www.credifacil.com.br",
  legal: {
    cnpj: "00.000.000/0001-00", // TODO: CNPJ real
    razaoSocial: "Credifácil Crédito Financeiro S.A.",
    bcb: "Autorizada pelo Banco Central do Brasil",
  },
  contact: {
    whatsapp: "5511964541758",
    whatsappDisplay: "(11) 96454-1758",
    whatsappSecondary: "5511960248795",
    whatsappSecondaryDisplay: "(11) 96024-8795",
    phone: "+5511964541758",
    phoneDisplay: "(11) 96454-1758",
    phone0800: "5511960248795",
    phone0800Display: "(11) 96024-8795",
    email: "contato@credifacil.com.br",
    address: "Av. Paulista, 1000 — São Paulo, SP",
    hours: "Seg. a sáb., das 8h às 20h",
  },
  social: {
    instagram: "https://instagram.com/credifacil",
    facebook: "https://facebook.com/credifacil",
    linkedin: "https://linkedin.com/company/credifacil",
  },
  metrics: {
    clients: 50_000,
    rating: 4.9,
    reviews: 12_000,
    yearsInMarket: 12,
    creditReleased: "R$ 1 bi+",
  },
  // Endpoint do form de newsletter (Formspree, Mailchimp, etc).
  // Crie um form em https://formspree.io/forms e cole o endpoint aqui.
  // Enquanto vazio, o form fica em modo demo (mostra confirmação local).
  newsletterEndpoint: "" as string,

  // Tracking — só carrega após consentimento via cookie banner.
  // Para ativar, preencha os IDs reais aqui.
  tracking: {
    ga4MeasurementId: "" as string, // ex: "G-XXXXXXX"
    metaPixelId: "" as string, // ex: "1234567890"
  },

  product: {
    minAmount: 1_000,
    maxAmount: 50_000,
    minInstallments: 12,
    maxInstallments: 60,
    rateMonthly: 0.0149, // 1,49% a.m.
    rateMonthlyDisplay: "1,49% a.m.",
    rateMin: "1,19% a.m.",
  },
} as const;

/** Constrói link wa.me com mensagem opcional pré-preenchida */
export const whatsappLink = (message?: string): string => {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

/** Link tel: */
export const telLink = (raw: string = site.contact.phone): string =>
  `tel:${raw.replace(/[^+\d]/g, "")}`;

/** Link mailto: */
export const mailLink = (subject?: string, body?: string): string => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${site.contact.email}${qs ? `?${qs}` : ""}`;
};
