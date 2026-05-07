import { Zap, BarChart3, ShieldCheck, Banknote, Clock3, FileCheck2 } from "lucide-react";
 import SolutionPage from "@/components/SolutionPage";
import hero from "@/assets/hero-antecipacao-wide.webp";
import showcase from "@/assets/showcase-antecipacao.webp";

const AntecipacaoRecebiveis = () => (
  <SolutionPage
    eyebrow="Antecipação de Recebíveis"
    title="Capital de giro"
    titleGold="na hora que você precisa"
    description="Transforme suas vendas a prazo, duplicatas e contratos em dinheiro hoje. Solução B2B para empresas que querem crescer sem esperar."
    heroIllustration={hero}
    heroAlt="Empresário analisando relatório de fluxo de caixa"
    metaTitle="Antecipação de Recebíveis B2B | Credifácil Securitizadora"
    metaDescription="Antecipe duplicatas, cartão e contratos com taxas competitivas. Liberação em até 24h, análise rápida e atendimento dedicado para empresas."
    intro={{
      heading: "Liquidez imediata para o seu negócio",
      paragraphs: [
        "A antecipação de recebíveis é a forma mais inteligente de transformar vendas futuras em capital de giro disponível agora — sem novas dívidas e sem comprometer seu balanço.",
        "Como securitizadora autorizada, compramos seus créditos com taxas justas e liberamos o valor na conta da sua empresa em até 24 horas. Tudo digital, com análise simplificada e atendimento consultivo.",
      ],
    }}
    benefits={[
      { icon: Zap, title: "Liberação em 24h", desc: "Análise ágil e crédito disponível no mesmo dia útil em muitos casos." },
      { icon: BarChart3, title: "Taxas competitivas", desc: "Negociação personalizada conforme volume e qualidade dos recebíveis." },
      { icon: ShieldCheck, title: "Sem novas dívidas", desc: "Não é empréstimo. É a venda dos seus créditos — não impacta seu endividamento." },
      { icon: Banknote, title: "Duplicatas, NFs e contratos", desc: "Aceitamos múltiplos formatos: cartão, boleto, contratos longos." },
      { icon: Clock3, title: "Recompra revolvente", desc: "Linha contínua: à medida que recebe, libera novo limite." },
      { icon: FileCheck2, title: "100% digital e seguro", desc: "Operação dentro das normas CVM, com contratos eletrônicos." },
    ]}
    showcase={{
      image: showcase,
      alt: "Reunião empresarial com gráficos de crescimento",
      eyebrow: "Para empresas que crescem",
      heading: "Mais fôlego para investir, contratar e vender",
      text: "Empresas que antecipam recebíveis crescem em média 3x mais rápido. Liberte capital preso em parcelamentos e use para o que realmente importa: estoque, marketing, expansão.",
      stats: [
        { value: "+R$ 500M", label: "Antecipados" },
        { value: "24h", label: "Liberação" },
        { value: "0,99%", label: "Taxa a partir" },
      ],
      imagePosition: "right",
    }}
    howItWorks={[
      { step: "01", title: "Cadastre sua empresa", desc: "Envio de documentos básicos pelo portal seguro." },
      { step: "02", title: "Envie seus recebíveis", desc: "Upload de NFs, duplicatas ou contratos a antecipar." },
      { step: "03", title: "Receba a proposta", desc: "Taxa e valor líquido em até 4 horas úteis." },
      { step: "04", title: "Dinheiro liberado", desc: "Após aceite, crédito na conta em até 24h." },
    ]}
    forWho={[
      "Indústrias e distribuidoras",
      "Empresas de serviços B2B",
      "Construtoras e incorporadoras",
      "Comércios com vendas no cartão",
      "Startups com contratos recorrentes",
      "Prestadores de serviços para grandes empresas",
    ]}
    faq={[
      { q: "Antecipação é empréstimo?", a: "Não. É a venda definitiva (ou com coobrigação) dos seus recebíveis. Não compõe endividamento e não exige garantias adicionais." },
      { q: "Qual o volume mínimo?", a: "A partir de R$ 50 mil em recebíveis. Não há limite máximo." },
      { q: "Preciso ter cadastro em algum banco?", a: "Não. Operamos como securitizadora independente, com nossa própria estrutura de funding." },
      { q: "Quais documentos são necessários?", a: "Contrato social, últimos balanços, faturamento dos últimos 12 meses e os recebíveis a antecipar." },
    ]}
     ctaTitle="Liberte o capital que está parado"
     ctaSubtitle="Fale com um consultor B2B e receba uma proposta personalizada em até 4 horas úteis."
   />
);

export default AntecipacaoRecebiveis;
