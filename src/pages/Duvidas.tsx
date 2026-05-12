import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import imgFaq from "@/assets/img-faq.jpg";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const groups = [
  {
    name: "Crédito consignado",
    items: [
      { q: "Quem pode contratar?", a: "Aposentados e pensionistas do INSS, servidores públicos e profissionais de empresas conveniadas." },
      { q: "Como funciona o desconto em folha?", a: "As parcelas são descontadas automaticamente do benefício ou salário, garantindo organização." },
      { q: "Qual o prazo para liberação?", a: "Após a aprovação, em até 24h úteis o valor é liberado em conta." },
      { q: "É seguro contratar online?", a: "Sim. Todo o processo segue protocolos bancários de segurança e criptografia." },
    ],
  },
  {
    name: "Securitizadora",
    items: [
      { q: "O que é uma securitizadora?", a: "É a empresa que estrutura recebíveis em soluções financeiras para gerar liquidez e previsibilidade." },
      { q: "Minha empresa pode contratar?", a: "Empresas com recebíveis recorrentes podem ser atendidas — fale com um consultor para análise." },
      { q: "Como funciona a análise?", a: "Avaliamos os recebíveis, o histórico e o perfil do negócio para estruturar a melhor proposta." },
    ],
  },
  {
    name: "Antecipação de recebíveis",
    items: [
      { q: "O que posso antecipar?", a: "Duplicatas, contratos e recebíveis de cartão, conforme análise." },
      { q: "Quanto tempo demora?", a: "Após aprovação, a liberação ocorre em até 24h úteis." },
      { q: "Quais documentos são necessários?", a: "Documentos da empresa, sócios e os recebíveis a serem antecipados." },
    ],
  },
  {
    name: "Boleto Garantido",
    items: [
      { q: "O que é boleto garantido?", a: "Solução que garante o recebimento das suas vendas via boleto, reduzindo riscos." },
      { q: "Como reduz a inadimplência?", a: "Com análise prévia e estrutura de garantia, você recebe mesmo em casos de atraso." },
      { q: "Para quais empresas é indicado?", a: "Empresas que vendem com boleto e querem mais previsibilidade no caixa." },
    ],
  },
  {
    name: "Conta Digital Luri",
    items: [
      { q: "Como abrir conta?", a: "É 100% digital pelo nosso site/app, em poucos minutos." },
      { q: "A conta tem Pix?", a: "Sim, Pix completo e disponível 24h por dia." },
      { q: "Posso usar pelo celular?", a: "Sim. Toda a experiência é otimizada para o celular." },
    ],
  },
  {
    name: "Investimentos",
    items: [
      { q: "Como investir?", a: "Inicie com o cadastro, faça a análise de perfil e escolha a oportunidade adequada." },
      { q: "Existe risco?", a: "Todo investimento envolve riscos. Consulte um consultor antes de investir." },
      { q: "Como falar com um consultor?", a: "Use nossos canais de contato — telefone, WhatsApp, e-mail ou formulário." },
    ],
  },
  {
    name: "Atendimento e segurança",
    items: [
      { q: "Meus dados estão seguros?", a: "Sim. Aplicamos criptografia e boas práticas de segurança da informação." },
      { q: "Como entro em contato?", a: "Pelo nosso WhatsApp, telefone, e-mail ou formulário na página de contato." },
      { q: "Qual o horário de atendimento?", a: "Segunda a sexta, das 9h às 18h." },
    ],
  },
];

const Duvidas = () => (
  <Layout>
    <PageHeader
      eyebrow="Dúvidas frequentes"
      title={<>Encontre respostas <span className="text-gold-gradient">rápidas</span></>}
      subtitle="Perguntas e respostas sobre nossas soluções financeiras."
      bgImage={imgFaq}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />
    <section className="container-x mx-auto max-w-4xl py-16">
      <div className="space-y-12">
        {groups.map((g) => (
          <div key={g.name}>
            <h2 className="mb-5 text-2xl font-extrabold">{g.name}</h2>
            <FAQAccordion items={g.items} />
          </div>
        ))}
      </div>
    </section>
    <CTASection title="Não encontrou sua dúvida?" cta="Fale com um especialista" />
  </Layout>
);

export default Duvidas;