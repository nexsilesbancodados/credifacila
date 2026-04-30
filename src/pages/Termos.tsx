import LegalPage from "@/components/LegalPage";

const Termos = () => (
  <LegalPage
    eyebrow="Termos"
    title="Termos de Uso"
    metaTitle="Termos de Uso | Credifácil"
    metaDescription="Conheça as regras de uso dos sites, aplicativos e serviços oferecidos pela Credifácil."
    intro="Ao acessar e utilizar os serviços Credifácil, você concorda integralmente com os termos e condições descritos abaixo."
    lastUpdated="Janeiro de 2026"
    contactSubject="Termos de uso — dúvida"
    sections={[
      {
        title: "Aceitação dos termos",
        paragraphs: ["O uso dos nossos canais digitais e a contratação dos nossos produtos implicam aceitação destes Termos. Caso não concorde, recomendamos não utilizar nossos serviços."],
      },
      {
        title: "Cadastro e responsabilidade do usuário",
        list: [
          "Você se compromete a fornecer informações verdadeiras, atualizadas e completas.",
          "É responsável por manter a confidencialidade da sua senha e demais credenciais.",
          "Notificar imediatamente sobre qualquer uso não autorizado da sua conta.",
        ],
      },
      {
        title: "Propriedade intelectual",
        paragraphs: ["Todo o conteúdo dos canais Credifácil — marca, logos, layout, textos, imagens e códigos — é protegido por direitos autorais e não pode ser reproduzido sem autorização expressa."],
      },
      {
        title: "Disponibilidade dos serviços",
        paragraphs: ["Buscamos manter nossos serviços disponíveis 24/7. Eventuais interrupções para manutenção ou por motivos de força maior poderão ocorrer e serão comunicadas sempre que possível."],
      },
      {
        title: "Limitação de responsabilidade",
        paragraphs: ["Não nos responsabilizamos por danos decorrentes do uso indevido dos serviços, falhas de conexão do usuário ou eventos fora do nosso controle razoável."],
      },
      {
        title: "Foro",
        paragraphs: ["Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja."],
      },
    ]}
  />
);

export default Termos;
