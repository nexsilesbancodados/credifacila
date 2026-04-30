import { ShieldCheck, Banknote, Clock3, TrendingUp, FileCheck2, BadgePercent } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";
import hero from "@/assets/banner-boleto-garantido.webp";
import showcase from "@/assets/showcase-boleto.webp";

const BoletoGarantido = () => (
  <SolutionPage
    eyebrow="Boleto Garantido"
    title="Receba 100% das suas vendas,"
    titleGold="mesmo na inadimplência"
    description="A solução definitiva para empresas que vendem no boleto: nós garantimos o pagamento, você foca em vender."
    heroIllustration={hero}
    heroAlt="Empresário tranquilo após receber pagamento garantido"
    metaTitle="Boleto Garantido — Receba 100% mesmo se o cliente não pagar"
    metaDescription="Solução exclusiva da Credifácil: emitimos seu boleto e garantimos o crédito do valor, mesmo que o cliente não pague no vencimento."
    intro={{
      heading: "O fim do risco de inadimplência",
      paragraphs: [
        "Boleto Garantido é a solução exclusiva da Credifácil que assume o risco de crédito da sua venda. Você emite o boleto pela nossa plataforma e, no vencimento, recebe o valor — pagando ou não o cliente.",
        "Com isso, sua empresa elimina o trabalho de cobrança, melhora o fluxo de caixa e ainda pode oferecer prazos mais longos para conquistar mais clientes — sem medo do calote.",
      ],
    }}
    benefits={[
      { icon: ShieldCheck, title: "Garantia de recebimento", desc: "Pagamos você no vencimento mesmo que o sacado não quite o boleto." },
      { icon: Banknote, title: "Fluxo de caixa previsível", desc: "Saiba exatamente quando e quanto vai entrar no caixa." },
      { icon: Clock3, title: "Cobrança terceirizada", desc: "Nós cuidamos da régua de cobrança e da recuperação." },
      { icon: TrendingUp, title: "Venda mais", desc: "Ofereça prazos maiores sem medo, com análise de crédito instantânea." },
      { icon: FileCheck2, title: "Plataforma completa", desc: "API, integrações e portal para emissão e acompanhamento." },
      { icon: BadgePercent, title: "Tarifas transparentes", desc: "Pague apenas pelos boletos garantidos, sem mensalidade." },
    ]}
    showcase={{
      image: showcase,
      alt: "Tela de plataforma de gestão de boletos",
      eyebrow: "Tecnologia + segurança",
      heading: "Plataforma robusta, integração simples",
      text: "API REST documentada, plugins para os principais ERPs e dashboard em tempo real. Implemente em horas, não em meses, com suporte técnico dedicado.",
      stats: [
        { value: "99,9%", label: "Uptime" },
        { value: "100%", label: "Garantia" },
        { value: "API", label: "Integração" },
      ],
      imagePosition: "left",
    }}
    howItWorks={[
      { step: "01", title: "Onboarding", desc: "Cadastro da empresa e configuração da régua de cobrança." },
      { step: "02", title: "Análise de crédito", desc: "Avaliamos cada sacado em segundos via integração." },
      { step: "03", title: "Boleto garantido emitido", desc: "Você emite normalmente; nós assumimos o risco." },
      { step: "04", title: "Recebimento garantido", desc: "No vencimento o valor entra na sua conta — independente do pagamento do cliente." },
    ]}
    forWho={[
      "E-commerces que vendem no boleto",
      "Distribuidoras com clientes recorrentes",
      "Prestadores de serviço B2B",
      "Empresas de assinatura e SaaS",
      "Indústrias com vendas parceladas",
      "Educação privada e cursos livres",
    ]}
    faq={[
      { q: "E se o boleto não for aprovado pela análise?", a: "Você pode emitir normalmente sem garantia, ou negar a venda. A análise é instantânea e transparente." },
      { q: "Qual a taxa cobrada?", a: "Varia de 1,5% a 4,5% por boleto garantido, conforme volume mensal e perfil do sacado." },
      { q: "Posso integrar com meu ERP?", a: "Sim. Temos API REST e plugins prontos para os principais sistemas (Bling, Omie, Conta Azul e outros)." },
      { q: "Quanto tempo após o vencimento recebo?", a: "Em até 48h úteis após o vencimento, mesmo que o cliente não tenha pagado." },
    ]}
    ctaTitle="Acabe com o risco de inadimplência"
    ctaSubtitle="Converse com nosso time comercial e veja como o Boleto Garantido transforma sua operação."
  />
);

export default BoletoGarantido;
