import { ShieldCheck, Banknote, Clock3, TrendingUp, FileCheck2, BadgePercent } from "lucide-react";
 import SolutionPage from "@/components/SolutionPage";
 import BoletoGarantidoCalculator from "@/components/calculators/BoletoGarantidoCalculator";
import hero from "@/assets/banner-boleto-garantido.webp";
import showcase from "@/assets/showcase-boleto.webp";

const BoletoGarantido = () => (
  <SolutionPage
    eyebrow="Boleto Garantido"
    title="Tem um boleto a receber?"
    titleGold="A gente paga hoje."
    description="Você tem um boleto que só vence daqui 30, 60 ou 90 dias? A Credifácil quita esse título na hora e recebe do sacado depois. Você fica com o dinheiro agora."
    heroIllustration={hero}
    heroAlt="Empresário recebendo o valor do boleto antecipadamente"
    metaTitle="Boleto Garantido — Antecipe o valor do seu boleto na hora | Credifácil"
    metaDescription="Tem um boleto a receber em 30, 60 ou 90 dias? A Credifácil paga você agora e recebe o título do sacado depois. Liberação rápida e sem burocracia."
    intro={{
      heading: "Receba hoje o que só entraria em 30, 60 ou 90 dias",
      paragraphs: [
        "Boleto Garantido é simples: você tem um boleto a receber de um cliente em uma data futura. A Credifácil quita esse valor na hora para você e, no vencimento, recebe o boleto direto do sacado.",
        "Sem espera, sem burocracia. Você transforma um título a vencer em dinheiro disponível agora — para pagar fornecedores, repor estoque, investir ou cobrir o caixa.",
      ],
    }}
    benefits={[
      { icon: Clock3, title: "Dinheiro na hora", desc: "Você recebe hoje o valor de um boleto que só venceria em 30, 60 ou 90 dias." },
      { icon: Banknote, title: "Antecipação simples", desc: "Sem empréstimo, sem nova dívida. A gente paga seu título e recebe do sacado depois." },
      { icon: ShieldCheck, title: "Processo seguro", desc: "Operação formal com contrato, sem riscos para você." },
      { icon: TrendingUp, title: "Mais fôlego no caixa", desc: "Use o dinheiro para crescer: estoque, folha, fornecedores ou investimento." },
      { icon: FileCheck2, title: "Análise rápida", desc: "Avaliamos o boleto e o sacado em poucas horas." },
      { icon: BadgePercent, title: "Taxas justas", desc: "Você sabe exatamente quanto vai receber antes de fechar negócio." },
    ]}
    showcase={{
      image: showcase,
      alt: "Empresário recebendo o valor do boleto antecipado",
      eyebrow: "Como funciona na prática",
      heading: "Você envia o boleto. A gente paga. Pronto.",
      text: "Você tem um boleto de R$ 50 mil para receber em 60 dias. Envia para a Credifácil, fechamos a operação e o valor cai na sua conta hoje. No vencimento, o sacado paga direto para nós. Simples assim.",
      stats: [
        { value: "24h", label: "Liberação" },
        { value: "30-90", label: "Dias antecipados" },
        { value: "100%", label: "Digital" },
      ],
      imagePosition: "left",
    }}
    howItWorks={[
      { step: "01", title: "Envie o boleto", desc: "Você manda os dados do título que tem a receber." },
      { step: "02", title: "Análise rápida", desc: "Avaliamos o boleto e o sacado em poucas horas." },
      { step: "03", title: "Recebe na hora", desc: "Após o aceite, o valor cai direto na sua conta." },
      { step: "04", title: "Sacado paga a gente", desc: "No vencimento, o sacado quita o boleto direto com a Credifácil." },
    ]}
    forWho={[
      "Empresas com boletos a receber em 30, 60 ou 90 dias",
      "Fornecedores que precisam de capital de giro",
      "Prestadores de serviço B2B",
      "Distribuidoras e indústrias",
      "Comércios com vendas faturadas",
      "Profissionais que recebem por boleto",
    ]}
    faq={[
      { q: "Como funciona o Boleto Garantido?", a: "Você tem um boleto a receber em uma data futura. A Credifácil paga esse valor para você agora e recebe o título do sacado no vencimento." },
      { q: "Quanto tempo demora para receber?", a: "Após a aprovação, o valor cai na sua conta em até 24 horas úteis." },
      { q: "Quais boletos posso antecipar?", a: "Boletos com vencimento entre 30 e 90 dias, emitidos por empresas ou pessoas físicas com bom perfil de crédito." },
      { q: "Qual a taxa cobrada?", a: "A taxa depende do prazo, do valor e do perfil do sacado. Você sabe exatamente quanto vai receber antes de fechar negócio." },
    ]}
     ctaTitle="Transforme seu boleto em dinheiro hoje"
     ctaSubtitle="Envie os dados do seu título e receba uma proposta em poucas horas."
     customSections={<BoletoGarantidoCalculator />}
   />
);

export default BoletoGarantido;
