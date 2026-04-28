import {
  Smartphone,
  Banknote,
  Zap,
  ShieldCheck,
  CreditCard,
  Globe2,
} from "lucide-react";
import SolutionPage from "@/components/SolutionPage";
import heroImg from "@/assets/luri-hero.webp";
import showcaseImg from "@/assets/luri-humanizada.webp";
import benefitNoFee from "@/assets/luri/benefit-no-fee.webp";
import benefitPix from "@/assets/luri/benefit-pix.webp";
import benefitCard from "@/assets/luri/benefit-card.webp";
import benefitSecurity from "@/assets/luri/benefit-security.webp";
import benefitApp from "@/assets/luri/benefit-app.webp";
import benefitIntegration from "@/assets/luri/benefit-integration.webp";

const ContaDigitalLuri = () => (
  <div className="theme-purple">
  <SolutionPage
    eyebrow="Conta Digital Luri"
    title="A conta digital"
    titleGold="do futuro do seu negócio."
    description="Gestão financeira completa, sem taxas abusivas e com a tecnologia que sua empresa merece. Tudo o que você precisa, em um só lugar."
    heroIllustration={heroImg}
    heroAlt="Smartphone exibindo aplicativo bancário Luri com gráficos dourados"
    metaTitle="Conta Digital Luri | Credifácil Securitizadora"
    metaDescription="Conheça a Conta Digital Luri da Credifácil: PJ 100% digital, Pix grátis, cartão empresarial, gestão de cobrança e zero taxas escondidas."
    intro={{
      heading: "Mais que uma conta. Uma plataforma financeira completa.",
      paragraphs: [
        "A Luri é a conta digital criada para empresas que querem produtividade, controle e custo justo. Sem letras miúdas, sem tarifas abusivas e com toda a robustez de uma instituição com mais de 30 anos de mercado.",
        "Pix ilimitado, cartão empresarial, integração com cobrança, antecipação de recebíveis, conciliação automática e relatórios em tempo real — tudo no app e no internet banking, com a segurança da Credifácil.",
      ],
    }}
    benefits={[
      { icon: Banknote, title: "Sem taxa de manutenção", desc: "Conta PJ 100% digital, sem mensalidade escondida.", image: benefitNoFee },
      { icon: Zap, title: "Pix ilimitado e grátis", desc: "Envie e receba quantos Pix quiser, sem cobrança por transação.", image: benefitPix },
      { icon: CreditCard, title: "Cartão empresarial", desc: "Cartão Visa Business com cashback e controle por colaborador.", image: benefitCard },
      { icon: ShieldCheck, title: "Segurança bancária", desc: "Tecnologia de criptografia e dupla autenticação em todas as operações.", image: benefitSecurity },
      { icon: Smartphone, title: "App completo", desc: "Toda gestão financeira na palma da mão, 24 horas por dia.", image: benefitApp },
      { icon: Globe2, title: "Integrada às soluções", desc: "Conectada à antecipação, boleto garantido e cobrança da Credifácil.", image: benefitIntegration },
    ]}
    howItWorks={[
      { step: "1", title: "Solicite a abertura", desc: "Cadastro 100% digital, sem ir à agência." },
      { step: "2", title: "Envio dos documentos", desc: "Suba CNPJ, contrato social e documentos dos sócios pelo app." },
      { step: "3", title: "Aprovação rápida", desc: "Análise em até 48h úteis com retorno transparente." },
      { step: "4", title: "Pronto para operar", desc: "Conta ativa, cartão a caminho e suporte dedicado." },
    ]}
    forWho={[
      "MEI, ME e EPP",
      "Empresas de médio porte",
      "Negócios com alto volume de Pix",
      "Prestadores de serviço",
      "E-commerces e marketplaces",
      "Empresas que querem reduzir tarifas",
    ]}
    faq={[
      { q: "Tem taxa de abertura ou mensalidade?", a: "Não. A abertura é gratuita e a manutenção da conta também — você só paga pelo que usar fora do plano básico." },
      { q: "Quais tipos de empresa podem abrir?", a: "MEI, ME, EPP, LTDA e SA. Avaliamos o CNPJ e o porte para definir o pacote ideal." },
      { q: "Posso integrar com meu sistema de gestão?", a: "Sim. A Luri possui API aberta e integração com os principais ERPs do mercado." },
      { q: "O cartão empresarial tem anuidade?", a: "Não. O cartão Luri Business é gratuito e oferece cashback em compras qualificadas." },
    ]}
    ctaTitle="Abra sua conta Luri agora"
    ctaSubtitle="Em poucos minutos sua empresa terá acesso à conta digital mais completa do mercado, com a solidez de quem tem 30 anos de história."
    showcase={{
      image: showcaseImg,
      alt: "Empreendedora sorrindo enquanto usa o app da conta Luri no celular",
      eyebrow: "Tudo na palma da mão",
      heading: "Sua conta PJ, simples como deveria ser",
      text: "Pix ilimitado, cartão empresarial sem anuidade e integração nativa com cobrança e antecipação de recebíveis. Toda gestão financeira do seu negócio em um único app.",
      stats: [
        { value: "0", label: "Tarifa de manutenção" },
        { value: "∞", label: "Pix ilimitado" },
        { value: "48h", label: "Aprovação rápida" },
      ],
    }}
  />
  </div>
);

export default ContaDigitalLuri;