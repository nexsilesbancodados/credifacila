import {
  ShieldCheck,
  Lock,
  Clock,
  TrendingUp,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import SolutionPage from "@/components/SolutionPage";
import heroImg from "@/assets/sol-boleto.jpg";

const BoletoGarantido = () => (
  <SolutionPage
    eyebrow="Boleto Garantido"
    title="Receba no prazo,"
    titleGold="sempre."
    description="A garantia de recebimento que sua empresa precisa. Mais previsibilidade, menos inadimplência e fluxo de caixa estável todos os meses."
    heroImg={heroImg}
    heroAlt="Boleto bancário com cadeado dourado simbolizando segurança"
    metaTitle="Boleto Garantido | Credifácil Securitizadora"
    metaDescription="Garanta o recebimento dos seus boletos com a Credifácil Securitizadora. Reduza inadimplência e tenha previsibilidade no fluxo de caixa do seu negócio."
    intro={{
      heading: "Sua receita garantida, do emissão ao crédito",
      paragraphs: [
        "O Boleto Garantido é a solução ideal para empresas que querem eliminar o risco de inadimplência e ter total controle sobre o fluxo de caixa. Você emite o boleto, nós garantimos o recebimento.",
        "Com nossa estrutura nacional e tecnologia de análise de crédito, você passa a operar com a previsibilidade que sua operação merece — sem sustos no caixa e sem precisar terceirizar a cobrança.",
      ],
    }}
    benefits={[
      { icon: ShieldCheck, title: "Recebimento garantido", desc: "Você recebe na data combinada, mesmo se o sacado atrasar." },
      { icon: TrendingUp, title: "Menos inadimplência", desc: "Reduza drasticamente a perda com clientes inadimplentes." },
      { icon: Clock, title: "Previsibilidade total", desc: "Saiba exatamente quanto e quando vai entrar no seu caixa." },
      { icon: Lock, title: "Análise de crédito inclusa", desc: "Avaliamos seus sacados antes da emissão para mitigar riscos." },
      { icon: FileCheck, title: "Cobrança profissional", desc: "Equipe especializada cuida da régua de cobrança." },
      { icon: CheckCircle2, title: "Integração simples", desc: "API e integração com seu ERP ou sistema de gestão." },
    ]}
    howItWorks={[
      { step: "1", title: "Cadastro", desc: "Envie a relação dos seus clientes e operação atual." },
      { step: "2", title: "Análise", desc: "Avaliamos a carteira e definimos as condições de garantia." },
      { step: "3", title: "Emissão", desc: "Você emite os boletos via plataforma ou integração." },
      { step: "4", title: "Recebimento garantido", desc: "Receba o valor no prazo, com ou sem o pagamento do sacado." },
    ]}
    forWho={[
      "Empresas com alta inadimplência",
      "Negócios com vendas recorrentes",
      "Prestadores de serviço B2B",
      "Distribuidoras e atacadistas",
      "Empresas de mensalidades",
      "Indústrias e fabricantes",
    ]}
    faq={[
      { q: "O que acontece se o cliente não pagar?", a: "Mesmo em caso de inadimplência do sacado, sua empresa recebe na data combinada — esse é o coração do produto." },
      { q: "Como é feita a análise dos meus clientes?", a: "Utilizamos bureaus de crédito, comportamento de pagamento e análise proprietária para precificar o risco de cada sacado." },
      { q: "Posso integrar com meu sistema?", a: "Sim. Oferecemos API e integrações com os principais ERPs do mercado para emissão automatizada." },
      { q: "Existe valor mínimo para contratar?", a: "Avaliamos cada operação caso a caso. Recomendado para empresas com faturamento mensal a partir de R$ 100 mil em boletos." },
    ]}
    ctaTitle="Acabe com a inadimplência hoje mesmo"
    ctaSubtitle="Converse com um consultor e descubra como o Boleto Garantido pode transformar a previsibilidade do seu negócio."
  />
);

export default BoletoGarantido;