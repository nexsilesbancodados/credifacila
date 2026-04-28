import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";

const Lgpd = () => (
  <LegalPage
    eyebrow="Aviso LGPD"
    title="Lei Geral de Proteção de Dados"
    metaTitle="LGPD | Credifácil"
    metaDescription="Saiba como exercer seus direitos como titular de dados sob a LGPD na Credifácil."
    intro="A Credifácil está comprometida com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Aqui você encontra resumido como exercer seus direitos como titular dos dados pessoais."
    lastUpdated="abril/2026"
    contactSubject="LGPD — solicitação"
    sections={[
      {
        title: "O que é a LGPD",
        paragraphs: [
          "A LGPD garante a você, como titular de dados pessoais, controle sobre as informações que empresas coletam, armazenam e tratam. Ela define princípios, bases legais e direitos.",
        ],
      },
      {
        title: "Seus direitos",
        list: [
          "Confirmação da existência de tratamento.",
          "Acesso aos seus dados pessoais.",
          "Correção de dados incompletos, inexatos ou desatualizados.",
          "Anonimização, bloqueio ou eliminação de dados desnecessários.",
          "Portabilidade dos dados a outro fornecedor.",
          "Eliminação dos dados tratados com base no seu consentimento.",
          "Informação sobre compartilhamento de dados com terceiros.",
          "Revogação do consentimento.",
        ],
      },
      {
        title: "Como exercer seus direitos",
        paragraphs: [
          `Para qualquer solicitação relacionada à LGPD, envie um e-mail para ${site.contact.email} com o assunto "LGPD — Solicitação de [direito desejado]".`,
          "Inclua nome completo, CPF e descrição clara do pedido. Responderemos em até 15 dias.",
        ],
      },
      {
        title: "Encarregado de Dados (DPO)",
        paragraphs: [
          `Nosso Encarregado de Tratamento de Dados Pessoais é o ponto focal para questões relacionadas à proteção de dados. Contato: ${site.contact.email}.`,
        ],
      },
      {
        title: "ANPD",
        paragraphs: [
          "Caso você não esteja satisfeito com a resposta da Credifácil, pode também apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD), órgão competente para fiscalizar o cumprimento da LGPD.",
        ],
      },
    ]}
  />
);

export default Lgpd;
