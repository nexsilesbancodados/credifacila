import { Smartphone, ShieldCheck, Zap, CreditCard, Send, BadgePercent } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";
import hero from "@/assets/luri-hero.webp";
import showcase from "@/assets/luri-humanizada.webp";

const ContaDigitalLuri = () => (
  <SolutionPage
    eyebrow="Conta Digital Luri"
    title="Sua conta digital,"
    titleGold="inteligente e sem tarifas"
    description="Conta PJ e PF 100% digital, com Pix ilimitado, cartão sem anuidade e gestão financeira integrada à plataforma Credifácil."
    heroIllustration={hero}
    heroAlt="Pessoa usando o app da Conta Luri no celular"
    metaTitle="Conta Digital Luri — PJ e PF sem tarifas | Credifácil"
    metaDescription="Abra sua Conta Luri grátis: Pix ilimitado, cartão sem anuidade, integração com crédito e gestão financeira para sua empresa ou família."
    intro={{
      heading: "Mais que uma conta — um centro financeiro",
      paragraphs: [
        "A Conta Luri foi pensada para quem quer simplicidade real: abertura em 5 minutos, sem filas, sem papelada, sem tarifa escondida. Para você e para sua empresa.",
        "E o melhor: integrada nativamente aos serviços de crédito e antecipação Credifácil. Acesse capital, faça pagamentos, gerencie seu fluxo — tudo no mesmo app.",
      ],
    }}
    benefits={[
      { icon: Zap, title: "Abertura em 5 minutos", desc: "100% digital, sem ir a agência, sem filas, sem comprovantes." },
      { icon: BadgePercent, title: "Sem tarifas mensais", desc: "Manutenção, Pix, TED e DOC — tudo grátis e ilimitado." },
      { icon: CreditCard, title: "Cartão sem anuidade", desc: "Visa internacional com cashback em parceiros." },
      { icon: Send, title: "Pix 24/7 ilimitado", desc: "Receba e envie sem custo, sem limite de quantidade." },
      { icon: ShieldCheck, title: "Segurança bancária", desc: "Criptografia ponta-a-ponta e biometria facial." },
      { icon: Smartphone, title: "App intuitivo", desc: "Gestão, cobranças, boletos e crédito num só lugar." },
    ]}
    showcase={{
      image: showcase,
      alt: "App da Luri exibindo gestão financeira",
      eyebrow: "Para PJ e PF",
      heading: "Sua vida financeira, inteira no celular",
      text: "Cobranças em massa, conciliação automática, integração com sua contabilidade. A Luri foi feita para empreendedores e famílias que querem clareza total do dinheiro.",
      stats: [
        { value: "0", label: "Tarifa mensal" },
        { value: "5min", label: "Abertura" },
        { value: "24/7", label: "Suporte" },
      ],
      imagePosition: "right",
    }}
    howItWorks={[
      { step: "01", title: "Baixe o app", desc: "Disponível para Android e iOS, gratuito." },
      { step: "02", title: "Faça o cadastro", desc: "CPF/CNPJ + selfie. Aprovação em minutos." },
      { step: "03", title: "Receba seu cartão", desc: "Cartão físico chega em até 7 dias úteis." },
      { step: "04", title: "Use sem limites", desc: "Pix, transferências, pagamentos e crédito integrados." },
    ]}
    forWho={[
      "MEIs e pequenos empresários",
      "Profissionais autônomos e PJs",
      "Famílias que querem organização",
      "Quem quer fugir das tarifas bancárias",
      "Clientes Credifácil que buscam integração total",
      "Quem precisa de crédito ágil junto da conta",
    ]}
    faq={[
      { q: "A conta é grátis mesmo?", a: "Sim. Sem tarifa de manutenção, sem custo por Pix, TED, DOC ou emissão de boleto até o limite mensal." },
      { q: "Tem cheque especial ou crédito vinculado?", a: "Sim, oferecemos linhas de crédito personalizadas conforme seu histórico — com taxas exclusivas para clientes Luri." },
      { q: "Está garantida pelo FGC?", a: "Sim. A Conta Luri é uma conta de pagamento operada por instituição financeira autorizada pelo Banco Central." },
      { q: "Posso usar para minha empresa?", a: "Sim. Temos plano PF e plano PJ, ambos sem mensalidade, com funcionalidades específicas para cada perfil." },
    ]}
    ctaTitle="Abra sua Conta Luri agora"
    ctaSubtitle="Em 5 minutos você tem uma conta digital completa, sem tarifas e integrada ao melhor crédito do mercado."
  />
);

export default ContaDigitalLuri;
