import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";

const Ouvidoria = () => (
  <LegalPage
    eyebrow="Ouvidoria"
    title="Canal de ouvidoria"
    metaTitle="Ouvidoria | Credifácil"
    metaDescription="Canal independente para reclamações, sugestões e elogios sobre a Credifácil. Atendimento em até 10 dias úteis."
    intro="A Ouvidoria é um canal independente, gratuito e imparcial para você registrar reclamações, sugestões ou elogios. Atuamos quando o atendimento padrão não resolveu sua demanda."
    lastUpdated="abril/2026"
    contactSubject="Ouvidoria — reclamação"
    sections={[
      {
        title: "Quando acionar a Ouvidoria",
        list: [
          "Quando o atendimento normal não solucionou sua demanda.",
          "Para registrar reclamações formais sobre produtos ou serviços.",
          "Para sugestões de melhoria.",
          "Para elogios à nossa equipe.",
        ],
      },
      {
        title: "Como abrir um chamado",
        paragraphs: [
          `Envie sua manifestação para ${site.contact.email} com o assunto "Ouvidoria" ou ligue para o ${site.contact.phone0800Display} de segunda a sexta, das 9h às 18h.`,
          "Para um atendimento mais ágil, tenha em mãos: nome completo, CPF, número da proposta/contrato (se houver) e descrição detalhada do ocorrido.",
        ],
      },
      {
        title: "Prazo de resposta",
        paragraphs: [
          "A Ouvidoria responde em até 10 dias úteis a partir do recebimento da manifestação. Em casos excepcionais que exijam análise mais profunda, esse prazo pode ser prorrogado mediante justificativa.",
        ],
      },
      {
        title: "Antes da Ouvidoria — atendimento padrão",
        list: [
          `WhatsApp: ${site.contact.whatsappDisplay}`,
          `Telefone: ${site.contact.phoneDisplay}`,
          `E-mail: ${site.contact.email}`,
          `Horário: ${site.contact.hours}`,
        ],
      },
      {
        title: "Outras instâncias",
        paragraphs: [
          "Se ainda assim a sua demanda não for resolvida, você pode também procurar:",
        ],
        list: [
          "Procon do seu Estado.",
          "Banco Central (caso a operação envolva instituição financeira).",
          "Plataforma consumidor.gov.br.",
        ],
      },
    ]}
  />
);

export default Ouvidoria;
