import LegalPage from "@/components/LegalPage";

const Lgpd = () => (
  <LegalPage
    eyebrow="LGPD"
    title="Programa de Privacidade e LGPD"
    metaTitle="LGPD — Programa de Privacidade | Credifácil"
    metaDescription="Saiba como a Credifácil cumpre a Lei Geral de Proteção de Dados e conheça seus direitos como titular."
    intro="A Credifácil mantém um programa estruturado de governança em privacidade, em pleno cumprimento à Lei nº 13.709/2018 (LGPD)."
    lastUpdated="Janeiro de 2026"
    contactSubject="LGPD — solicitação"
    sections={[
      {
        title: "Compromisso com a LGPD",
        paragraphs: ["Tratamos seus dados pessoais com a finalidade específica de prestar nossos serviços financeiros, sempre com base legal adequada e respeito aos princípios da LGPD."],
      },
      {
        title: "Bases legais utilizadas",
        list: [
          "Execução de contrato (operações financeiras contratadas).",
          "Cumprimento de obrigação legal/regulatória (BACEN, COAF, CVM).",
          "Legítimo interesse (prevenção a fraudes, segurança).",
          "Consentimento (comunicações de marketing).",
        ],
      },
      {
        title: "Como exercer seus direitos",
        paragraphs: ["Você pode, a qualquer momento, solicitar acesso, correção, exclusão ou portabilidade dos seus dados pelo nosso canal exclusivo."],
        list: [
          "E-mail do DPO: dpo@credifacil.com.br",
          "Formulário web: credifacil.com.br/lgpd",
          "Prazo de resposta: até 15 dias corridos.",
        ],
      },
      {
        title: "Encarregado (DPO)",
        paragraphs: ["Nosso Encarregado pelo Tratamento de Dados Pessoais é responsável por receber demandas de titulares e da ANPD. Contato: dpo@credifacil.com.br."],
      },
      {
        title: "Incidentes de segurança",
        paragraphs: ["Em caso de incidente envolvendo dados pessoais que possa acarretar risco relevante aos titulares, comunicaremos a ANPD e os afetados nos prazos legais."],
      },
    ]}
  />
);

export default Lgpd;
