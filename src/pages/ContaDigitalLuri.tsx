 import { Smartphone, Zap, ShieldCheck, CreditCard, Banknote, Landmark } from "lucide-react";
 import SolutionPage from "@/components/SolutionPage";
 import hero from "@/assets/luri-hero.webp";
 
 const ContaDigitalLuri = () => (
   <div className="theme-purple">
     <SolutionPage
       eyebrow="Conta Digital Luri"
       title="A conta completa que"
       titleGold="evolui com você"
       description="Pix ilimitado, cartão sem anuidade e crédito inteligente direto no app. A conta digital oficial da Credifácil para PF e PJ."
       heroIllustration={hero}
       heroAlt="Mulher sorrindo usando o aplicativo Luri no celular"
       metaTitle="Conta Digital Luri | Credifácil — Grátis e Completa"
       metaDescription="Abra sua conta Luri em 5 minutos. Sem taxas mensais, com Pix grátis, cartão internacional e crédito pré-aprovado."
       intro={{
         heading: "Mais que uma conta, sua parceira financeira",
         paragraphs: [
           "A Luri nasceu para simplificar sua vida financeira. Desenvolvida pela Credifácil, nossa conta digital une a segurança de uma instituição sólida com a agilidade que a tecnologia proporciona.",
           "Abra sua conta pelo celular em poucos minutos e tenha acesso a um ecossistema completo de serviços: pagamentos, investimentos, cartões e linhas de crédito exclusivas com as melhores taxas do mercado.",
         ],
       }}
       benefits={[
         { icon: Zap, title: "Pix e TED ilimitados", desc: "Transfira para qualquer banco a qualquer hora sem pagar nada por isso." },
         { icon: ShieldCheck, title: "Segurança de ponta", desc: "Proteção biométrica, criptografia e monitoramento 24h das suas transações." },
         { icon: CreditCard, title: "Cartão Internacional", desc: "Cartão Visa sem anuidade, aceito em milhões de estabelecimentos e sites." },
         { icon: Banknote, title: "Crédito integrado", desc: "Antecipe seu FGTS, peça consignado ou capital de giro direto pelo app." },
         { icon: Smartphone, title: "App intuitivo", desc: "Gestão completa do seu dinheiro com interface simples e rápida." },
         { icon: Landmark, title: "Conta PJ Grátis", desc: "Soluções completas para empreendedores, com emissão de boletos e folha." },
       ]}
       showcase={{
         image: hero,
         alt: "Aplicativo Luri aberto no celular",
         eyebrow: "Sua vida no controle",
         heading: "Tudo o que você precisa em um só lugar",
         text: "Diga adeus às filas de banco e às tarifas abusivas. Com a Luri, você resolve tudo na palma da mão, com atendimento humano sempre que precisar.",
         stats: [
           { value: "0", label: "Mensalidade" },
           { value: "5min", label: "Abertura" },
           { value: "100%", label: "Digital" },
         ],
         imagePosition: "right",
       }}
       howItWorks={[
         { step: "01", title: "Baixe o app", desc: "Disponível para iOS e Android. Instale e comece agora." },
         { step: "02", title: "Faça seu cadastro", desc: "Tenha um documento em mãos e preencha seus dados básicos." },
         { step: "03", title: "Validação rápida", desc: "Nossa equipe valida seus dados e ativa sua conta em instantes." },
         { step: "04", title: "Use sua conta", desc: "Receba seu cartão em casa e comece a transacionar na hora." },
       ]}
       forWho={[
         "Pessoas físicas que buscam agilidade",
         "Microempreendedores Individuais (MEI)",
         "Pequenas e médias empresas (PME)",
         "Profissionais autônomos e liberais",
         "Aposentados e pensionistas",
         "Investidores que buscam rentabilidade",
       ]}
       faq={[
         { q: "A conta Luri realmente é gratuita?", a: "Sim! Não cobramos taxa de abertura, mensalidade ou manutenção de conta. Pix e TED também são gratuitos e ilimitados." },
         { q: "O cartão tem anuidade?", a: "O cartão Luri Visa é internacional e não possui taxa de anuidade ou mensalidade." },
         { q: "Como deposito dinheiro na conta?", a: "Você pode depositar via Pix, transferência bancária de outros bancos ou gerando um boleto de depósito no próprio app." },
         { q: "A conta Luri é segura?", a: "Sim, utilizamos os mais modernos protocolos de segurança e somos regulamentados pelo Banco Central do Brasil." },
       ]}
       ctaTitle="Sua evolução financeira começa aqui"
       ctaSubtitle="Baixe o app agora e descubra como a Luri pode transformar sua relação com o dinheiro."
     />
   </div>
 );

export default ContaDigitalLuri;
