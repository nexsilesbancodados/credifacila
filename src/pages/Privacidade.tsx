import LegalPage from "@/components/LegalPage";

const Privacidade = () => (
  <LegalPage
    eyebrow="Privacidade"
    title="Política de Privacidade"
    metaTitle="Política de Privacidade | Credifácil"
    metaDescription="Saiba como a Credifácil coleta, usa e protege seus dados pessoais em conformidade com a LGPD."
    intro="Esta política descreve como tratamos seus dados pessoais nos sites, aplicativos e serviços da Credifácil, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)."
    lastUpdated="Janeiro de 2026"
    contactSubject="Privacidade — dúvida"
    sections={[
      {
        title: "Quais dados coletamos",
        paragraphs: ["Coletamos dados que você nos fornece diretamente e dados gerados pelo uso dos nossos serviços."],
        list: [
          "Dados cadastrais: nome, CPF/CNPJ, e-mail, telefone, endereço, data de nascimento.",
          "Dados financeiros: renda, conta bancária, histórico de operações.",
          "Dados de navegação: IP, dispositivo, cookies, páginas visitadas.",
          "Dados de comprovação: documentos pessoais, comprovantes de renda e residência.",
        ],
      },
      {
        title: "Como usamos seus dados",
        list: [
          "Avaliação de crédito e proposta de produtos financeiros.",
          "Cumprimento de obrigações legais e regulatórias (BACEN, CVM, COAF).",
          "Prevenção a fraudes e segurança operacional.",
          "Comunicação sobre seus contratos e novidades (com seu consentimento).",
          "Melhoria contínua dos nossos produtos e atendimento.",
        ],
      },
      {
        title: "Com quem compartilhamos",
        list: [
          "Bancos parceiros para originar suas operações de crédito.",
          "Bureaus de crédito (Serasa, SPC, Boa Vista) conforme regulação.",
          "Autoridades públicas, quando exigido por lei.",
          "Provedores de tecnologia, sob contratos de confidencialidade.",
        ],
      },
      {
        title: "Seus direitos como titular",
        list: [
          "Acessar seus dados a qualquer momento.",
          "Corrigir dados incompletos ou desatualizados.",
          "Solicitar a eliminação dos dados (quando aplicável).",
          "Revogar consentimento previamente concedido.",
          "Portabilidade dos dados a outro fornecedor.",
        ],
      },
      {
        title: "Segurança",
        paragraphs: [
          "Aplicamos medidas técnicas e organizacionais de ponta — criptografia em trânsito e em repouso, controle de acesso, auditorias regulares — para proteger suas informações contra acessos não autorizados.",
        ],
      },
      {
        title: "Contato do encarregado (DPO)",
        paragraphs: ["Para exercer seus direitos ou esclarecer dúvidas, contate nosso DPO pelo e-mail dpo@credifacil.com.br."],
      },
    ]}
  />
);

export default Privacidade;
