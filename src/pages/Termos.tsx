import LegalPage from "@/components/LegalPage";

const Termos = () => (
  <LegalPage
    eyebrow="Termos de Uso"
    title="Termos e condições de uso"
    metaTitle="Termos de Uso | Credifácil"
    metaDescription="Leia os termos e condições para uso do site e dos serviços da Credifácil."
    intro="Estes Termos de Uso regulam o acesso e a utilização do site, do simulador e de demais canais digitais da Credifácil. Ao navegar, você declara estar de acordo com as condições abaixo."
    lastUpdated="abril/2026"
    contactSubject="Termos de Uso — dúvida"
    sections={[
      {
        title: "Aceitação dos termos",
        paragraphs: [
          "Ao acessar e usar nosso site, você concorda integralmente com estes Termos de Uso e com nossa Política de Privacidade. Caso não concorde com alguma parte, recomendamos que não utilize os serviços.",
        ],
      },
      {
        title: "Cadastro e veracidade das informações",
        list: [
          "Você é responsável pela veracidade dos dados informados em simulações, propostas e formulários.",
          "É proibido criar cadastros com dados falsos, de terceiros sem autorização ou que contenham conteúdo ilícito.",
          "A Credifácil pode recusar, suspender ou cancelar contas que violem estas regras.",
        ],
      },
      {
        title: "Simulações e propostas",
        paragraphs: [
          "As simulações apresentadas no site são uma estimativa baseada em parâmetros médios e não constituem oferta vinculante. As condições efetivas (taxa, prazo, valor liberado) dependem da análise de crédito e do contrato formal.",
        ],
      },
      {
        title: "Propriedade intelectual",
        paragraphs: [
          "Todos os textos, imagens, logos, layout e código deste site são de propriedade da Credifácil ou de seus licenciadores. É proibida a reprodução total ou parcial sem autorização escrita.",
        ],
      },
      {
        title: "Limitação de responsabilidade",
        list: [
          "A Credifácil empreende esforços razoáveis para manter o site disponível e seguro, mas não garante operação ininterrupta ou livre de erros.",
          "Não nos responsabilizamos por perdas decorrentes de indisponibilidade temporária, força maior, ataques de terceiros ou uso inadequado pelo usuário.",
        ],
      },
      {
        title: "Atendimento e suporte",
        paragraphs: [
          "Nosso atendimento ao cliente está disponível via WhatsApp, telefone e e-mail nos horários informados no rodapé. Reclamações formais são tratadas pelo canal de Ouvidoria.",
        ],
      },
      {
        title: "Alterações destes termos",
        paragraphs: [
          "Podemos atualizar estes Termos a qualquer momento. Quando isso ocorrer, alteramos a data de \"última atualização\" no topo da página. O uso contínuo do site após mudanças significa aceitação das novas condições.",
        ],
      },
      {
        title: "Foro",
        paragraphs: [
          "Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer dúvidas oriundas deste documento, salvo regra de competência específica em favor do consumidor.",
        ],
      },
    ]}
  />
);

export default Termos;
