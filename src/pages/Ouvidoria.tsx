import LegalPage from "@/components/LegalPage";

const Ouvidoria = () => (
  <LegalPage
    eyebrow="Ouvidoria"
    title="Canal de Ouvidoria"
    metaTitle="Ouvidoria Credifácil — Canal oficial de manifestações"
    metaDescription="Canal independente para registrar reclamações, sugestões e denúncias. Resposta em até 10 dias úteis, conforme regulação BACEN."
    intro="A Ouvidoria Credifácil é o canal oficial e independente para receber, analisar e dar tratamento formal a manifestações que não tenham sido solucionadas pelos canais de atendimento convencionais."
    lastUpdated="Janeiro de 2026"
    contactSubject="Ouvidoria — manifestação"
    sections={[
      {
        title: "Quando acionar a Ouvidoria",
        list: [
          "Após tentativa sem sucesso pelo SAC ou atendimento comercial.",
          "Reclamações sobre produtos, serviços ou conduta da empresa.",
          "Sugestões de melhoria.",
          "Denúncias éticas ou de irregularidades.",
        ],
      },
      {
        title: "Canais de contato",
        list: [
          "Telefone exclusivo: (11) 96024-8795 (seg-sex, 8h-18h).",
          "E-mail: ouvidoria@credifacil.com.br",
          "Formulário online: credifacil.com.br/ouvidoria",
          "Carta: Av. Paulista, 1000, Bela Vista, São Paulo/SP — A/C Ouvidoria.",
        ],
      },
      {
        title: "Como funciona o processo",
        paragraphs: ["Após o registro, você recebe um número de protocolo. A análise é feita por equipe independente e a resposta formal é enviada em até 10 dias úteis, conforme Resolução BACEN 4.860/2020."],
      },
      {
        title: "Compromissos da Ouvidoria",
        list: [
          "Imparcialidade na análise das manifestações.",
          "Confidencialidade das informações recebidas.",
          "Retorno fundamentado dentro do prazo regulatório.",
          "Reporte mensal à alta administração.",
        ],
      },
      {
        title: "BACEN",
        paragraphs: ["Caso ainda permaneça insatisfeito, você pode registrar manifestação no Banco Central pelo canal www.bcb.gov.br/atendimentopublico."],
      },
    ]}
  />
);

export default Ouvidoria;
