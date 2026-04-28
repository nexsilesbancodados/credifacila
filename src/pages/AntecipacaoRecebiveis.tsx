import {
  Zap,
  TrendingUp,
  ShieldCheck,
  Banknote,
  Clock,
  LineChart,
} from "lucide-react";
import SolutionPage from "@/components/SolutionPage";
import heroImg from "@/assets/hero-antecipacao-wide.webp";
import showcaseImg from "@/assets/showcase-antecipacao.webp";

const AntecipacaoRecebiveis = () => (
  <SolutionPage
    eyebrow="Antecipação de Recebíveis"
    title="Capital de giro"
    titleGold="quando você precisa."
    description="Transforme seus recebíveis futuros em dinheiro hoje. Acesso rápido ao capital sem comprometer o endividamento da sua empresa."
    heroIllustration={heroImg}
    heroAlt="Documento de fatura com moedas e gráfico de crescimento financeiro"
    metaTitle="Antecipação de Recebíveis | Credifácil Securitizadora"
    metaDescription="Antecipe duplicatas, cheques e recebíveis com a Credifácil Securitizadora. Liberação rápida, taxas competitivas e zero burocracia para sua empresa."
    intro={{
      heading: "Liquidez imediata para o seu negócio",
      paragraphs: [
        "A antecipação de recebíveis é uma das formas mais inteligentes de obter capital de giro: ao invés de contrair dívidas, você simplesmente recebe hoje aquilo que já é seu, mas que entraria no caixa apenas no futuro.",
        "Com mais de 30 anos de experiência, a Credifácil Securitizadora analisa duplicatas, cheques pré-datados, contratos e outros títulos para liberar o capital com agilidade — mantendo a saúde financeira da sua empresa.",
      ],
    }}
    benefits={[
      { icon: Zap, title: "Liberação em 24h", desc: "Análise ágil e crédito disponível em até um dia útil após aprovação." },
      { icon: TrendingUp, title: "Sem aumentar dívidas", desc: "Você antecipa o que já é seu — não é empréstimo, é liquidez." },
      { icon: ShieldCheck, title: "Operação segura", desc: "Mais de três décadas de tradição e processos auditados." },
      { icon: LineChart, title: "Taxas competitivas", desc: "Custo previsível e atrativo, alinhado ao perfil do seu negócio." },
      { icon: Banknote, title: "Diversos títulos", desc: "Duplicatas, cheques, contratos, recebíveis de cartão e mais." },
      { icon: Clock, title: "Sem comprometer limites", desc: "Não impacta seu score nem suas linhas bancárias tradicionais." },
    ]}
    howItWorks={[
      { step: "1", title: "Envie seus títulos", desc: "Cadastro 100% digital com documentação simplificada." },
      { step: "2", title: "Análise rápida", desc: "Nossa equipe avalia o lastro e propõe as melhores condições." },
      { step: "3", title: "Aprovação", desc: "Contrato eletrônico com transparência total das taxas." },
      { step: "4", title: "Dinheiro na conta", desc: "Crédito liberado em até 24h direto na sua conta empresarial." },
    ]}
    forWho={[
      "Indústrias com vendas a prazo",
      "Comércios B2B com duplicatas",
      "Prestadores de serviço com contratos",
      "Empresas de logística e transporte",
      "Construtoras e incorporadoras",
      "Distribuidoras e atacadistas",
    ]}
    faq={[
      { q: "Qual o valor mínimo para antecipação?", a: "Trabalhamos com operações a partir de R$ 10 mil, sem limite máximo definido — cada operação é avaliada individualmente." },
      { q: "Quais documentos preciso apresentar?", a: "Documentos da empresa, faturamento dos últimos 12 meses e os títulos a antecipar. Tudo enviado pelo nosso portal digital." },
      { q: "A operação afeta o meu score?", a: "Não. Por se tratar de antecipação e não empréstimo, a operação não compromete suas linhas de crédito tradicionais." },
      { q: "E se o sacado não pagar o título?", a: "Trabalhamos com diferentes modalidades — com e sem coobrigação. Explicamos cada opção antes da contratação." },
    ]}
    ctaTitle="Pronto para destravar seu fluxo de caixa?"
    ctaSubtitle="Fale com um especialista da Credifácil Securitizadora e receba uma proposta personalizada para o seu negócio."
    showcase={{
      image: showcaseImg,
      alt: "Empresário analisando recebíveis em tablet dentro de armazém",
      eyebrow: "Resultado real",
      heading: "Capital de giro sem comprometer o crescimento",
      text: "Mais de 30 anos transformando duplicatas, cheques e contratos em liquidez imediata para indústrias, comércios e prestadores de serviço de todo o Brasil.",
      stats: [
        { value: "24h", label: "Liberação média" },
        { value: "+30", label: "Anos de mercado" },
        { value: "R$ 10k+", label: "Operações a partir de" },
      ],
    }}
  />
);

export default AntecipacaoRecebiveis;