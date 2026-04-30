import {
  ShieldCheck,
  Wallet,
  Clock3,
  TrendingDown,
  Users,
  HeartHandshake,
} from "lucide-react";
import SolutionPage from "@/components/SolutionPage";
import heroConsignado from "@/assets/hero-consignado-wide.webp";
import showcaseSenior from "@/assets/consignado-senior.webp";

const Consignado = () => (
  <SolutionPage
    eyebrow="Crédito Consignado"
    title="As menores taxas para"
    titleGold="quem merece tranquilidade"
    description="Crédito consignado com desconto direto em folha — aprovado em minutos, sem burocracia, com atendimento humano de ponta a ponta."
    heroIllustration={heroConsignado}
    heroAlt="Casal de aposentados sorrindo após contratar consignado"
    metaTitle="Crédito Consignado — Menores taxas | Credifácil"
    metaDescription="Empréstimo consignado para INSS, servidores públicos e CLT com taxas a partir de 1,19% a.m., aprovação rápida e atendimento humano."
    intro={{
      heading: "O empréstimo mais seguro do mercado",
      paragraphs: [
        "O crédito consignado é a modalidade com as menores taxas de juros do Brasil — porque as parcelas são descontadas direto da folha de pagamento ou benefício, reduzindo o risco e permitindo condições muito mais vantajosas para você.",
        "Na Credifácil, somos correspondentes dos principais bancos do país. Isso significa que comparamos as melhores ofertas em tempo real e entregamos a taxa ideal para o seu perfil — com simulação gratuita e sem compromisso.",
      ],
    }}
    benefits={[
      { icon: TrendingDown, title: "Taxas a partir de 1,19% a.m.", desc: "As menores do mercado, comparadas em tempo real entre bancos parceiros." },
      { icon: Clock3, title: "Aprovação em minutos", desc: "Análise digital e liberação em até 24 horas após a contratação." },
      { icon: ShieldCheck, title: "Segurança total", desc: "Operamos 100% dentro das normas do Banco Central e LGPD." },
      { icon: Wallet, title: "Parcelas que cabem no bolso", desc: "Desconto direto em folha, sem boleto, sem esquecer." },
      { icon: Users, title: "Atendimento humano", desc: "Especialistas reais explicando tudo, sem letras miúdas." },
      { icon: HeartHandshake, title: "Refinanciamento e portabilidade", desc: "Reduza sua parcela ou troque sua dívida por uma taxa menor." },
    ]}
    showcase={{
      image: showcaseSenior,
      alt: "Aposentado feliz com a família",
      eyebrow: "Para você que merece o melhor",
      heading: "Tranquilidade financeira, com respeito e cuidado",
      text: "Atendemos aposentados, pensionistas, servidores e trabalhadores CLT com a atenção que cada história merece. Aqui, você não é mais um número — é parte da nossa missão.",
      stats: [
        { value: "1,19%", label: "Taxa a partir de" },
        { value: "84x", label: "Até parcelas" },
        { value: "24h", label: "Liberação" },
      ],
      imagePosition: "left",
    }}
    howItWorks={[
      { step: "01", title: "Simule online", desc: "Informe valor desejado e prazo. Sem cadastro, sem cobrança." },
      { step: "02", title: "Envie seus documentos", desc: "Tudo digital, pelo WhatsApp ou portal seguro." },
      { step: "03", title: "Receba a melhor proposta", desc: "Comparamos taxas entre os bancos parceiros para você." },
      { step: "04", title: "Dinheiro na conta", desc: "Aprovação digital e crédito liberado em até 24 horas." },
    ]}
    forWho={[
      "Aposentados e pensionistas do INSS",
      "Servidores públicos federais, estaduais e municipais",
      "Militares das Forças Armadas",
      "Trabalhadores CLT de empresas conveniadas",
      "Pensionistas de regimes próprios",
      "Beneficiários do BPC/LOAS (em bancos selecionados)",
    ]}
    faq={[
      { q: "Qual o valor máximo que posso contratar?", a: "Depende da sua margem consignável (geralmente 35% do benefício/salário) e do banco escolhido. Liberamos até R$ 500 mil em casos específicos." },
      { q: "Posso contratar mesmo com nome negativado?", a: "Sim! Como o desconto é em folha, a maioria dos bancos parceiros não consulta SPC/Serasa para aprovar consignado." },
      { q: "Em quanto tempo o dinheiro cai na conta?", a: "Após a assinatura digital do contrato, em média 24 horas úteis — alguns bancos liberam no mesmo dia." },
      { q: "Tem alguma taxa para simular ou contratar?", a: "Não. Simulação, análise e atendimento são 100% gratuitos. Você só paga as parcelas combinadas." },
      { q: "Posso quitar antes do prazo?", a: "Sim, com desconto proporcional dos juros futuros, conforme regulamentação do Banco Central." },
    ]}
    ctaTitle="Pronto para liberar seu consignado?"
    ctaSubtitle="Fale agora com um especialista Credifácil e receba sua simulação personalizada em minutos."
  />
);

export default Consignado;
