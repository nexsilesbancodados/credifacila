import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";

const Privacidade = () => (
  <LegalPage
    eyebrow="Política de Privacidade"
    title="Como cuidamos dos seus dados"
    metaTitle="Política de Privacidade | Credifácil"
    metaDescription="Saiba como a Credifácil coleta, usa e protege os seus dados pessoais em conformidade com a LGPD."
    intro="A sua privacidade é prioridade para a Credifácil. Esta política descreve, de forma clara e objetiva, como coletamos, usamos e protegemos seus dados pessoais — em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
    lastUpdated="abril/2026"
    contactSubject="Privacidade — dúvida"
    sections={[
      {
        title: "Dados que coletamos",
        paragraphs: [
          "Coletamos apenas os dados necessários para análise de crédito, contratação e atendimento. Isso inclui:",
        ],
        list: [
          "Dados cadastrais: nome, CPF, RG, e-mail, telefone, endereço.",
          "Dados financeiros: renda, comprovantes, score de crédito.",
          "Dados de navegação: cookies essenciais e estatísticos (com seu consentimento).",
          "Dados de uso: simulações realizadas, propostas, contratos.",
        ],
      },
      {
        title: "Como usamos os seus dados",
        list: [
          "Para analisar e processar suas propostas de crédito.",
          "Para enviar comunicações sobre seus contratos, propostas e oportunidades.",
          "Para cumprir obrigações legais, regulatórias e de prevenção a fraudes.",
          "Para melhorar nossos produtos e a experiência no site.",
        ],
      },
      {
        title: "Compartilhamento de dados",
        paragraphs: [
          `Não vendemos seus dados. Compartilhamos apenas com parceiros estritamente necessários (bureaus de crédito, instituições financeiras, prestadores de TI homologados) e somente na medida necessária para a finalidade contratada. Todos seguem cláusulas contratuais de proteção de dados e a LGPD.`,
        ],
      },
      {
        title: "Seus direitos como titular",
        paragraphs: ["Você pode, a qualquer momento, exercer os direitos previstos na LGPD:"],
        list: [
          "Confirmar a existência de tratamento de dados.",
          "Acessar, corrigir ou atualizar seus dados.",
          "Solicitar a anonimização, bloqueio ou eliminação.",
          "Solicitar a portabilidade dos dados.",
          "Revogar o consentimento a qualquer momento.",
        ],
      },
      {
        title: "Como entrar em contato com o Encarregado (DPO)",
        paragraphs: [
          `Para qualquer solicitação relacionada à LGPD, escreva para ${site.contact.email} com o assunto "LGPD" e detalhe o pedido. Responderemos em até 15 dias.`,
        ],
      },
      {
        title: "Segurança",
        paragraphs: [
          "Empregamos criptografia padrão bancário (SSL 256-bit), controles de acesso, monitoramento contínuo e auditorias regulares para proteger seus dados contra acessos não autorizados, perda ou vazamentos.",
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "Usamos cookies essenciais (necessários ao funcionamento) e cookies estatísticos (após seu consentimento via banner). Você pode revogar o consentimento limpando o cache do seu navegador.",
        ],
      },
    ]}
  />
);

export default Privacidade;
