import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import imgFaq from "@/assets/img-faq.jpg";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { Search, HelpCircle, MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "@/components/Reveal";

const groups = [
  {
    name: "Crédito Consignado",
    items: [
      { q: "Quem pode contratar?", a: "Aposentados e pensionistas do INSS, servidores públicos (federais, estaduais e municipais) e colaboradores de empresas privadas conveniadas." },
      { q: "Como funciona o desconto em folha?", a: "As parcelas são descontadas diretamente do seu benefício ou salário mensal, garantindo taxas muito menores que o crédito pessoal comum." },
      { q: "Qual o prazo para liberação?", a: "Após a assinatura digital e averbação pelo órgão pagador, o valor é creditado em sua conta em até 24 horas úteis." },
      { q: "Preciso sair de casa para contratar?", a: "Não. O processo é 100% digital, com assinatura via biometria facial segura pelo seu celular." },
    ],
  },
  {
    name: "Securitização & Antecipação",
    items: [
      { q: "O que é uma securitizadora?", a: "É uma instituição que transforma ativos financeiros (como duplicatas e contratos) em títulos negociáveis, gerando liquidez imediata para empresas." },
      { q: "Quais recebíveis posso antecipar?", a: "Duplicatas mercantis (vendas de produtos), contratos de prestação de serviços, medições de obras e vendas no cartão de crédito." },
      { q: "A antecipação gera dívida bancária?", a: "Não. A antecipação de recebíveis é considerada fomento comercial, portanto não compromete seu limite de crédito junto aos bancos." },
      { q: "Como funciona a análise de sacado?", a: "Nós avaliamos a saúde financeira da empresa que irá pagar o título para garantir a segurança da operação." },
    ],
  },
  {
    name: "Asset Management & Investimentos",
    items: [
      { q: "Quem pode investir com a Credifácil?", a: "Nossas oportunidades são estruturadas principalmente para Investidores Qualificados e Wealth Management que buscam diversificação em crédito privado." },
      { q: "O que é um Investidor Qualificado?", a: "Conforme a CVM 554, são pessoas físicas ou jurídicas que possuem investimentos financeiros superiores a R$ 1 milhão ou certificação profissional específica." },
      { q: "Existe garantia do FGC?", a: "Produtos de crédito privado e FIDCs não contam com garantia do Fundo Garantidor de Crédito. São ativos com garantias reais ou pulverização de risco." },
    ],
  },
  {
    name: "Conta Digital Luri",
    items: [
      { q: "A conta Luri é exclusiva para empresas?", a: "Não, oferecemos soluções tanto para Pessoas Físicas quanto para Pessoas Jurídicas, com foco em gestão de caixa e pagamentos." },
      { q: "Quais as taxas da conta?", a: "A conta básica é isenta de mensalidade. Tarifas podem ser aplicadas em serviços específicos conforme o pacote de transações." },
    ],
  },
];

const Duvidas = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Suporte & Dúvidas Frequentes | Credifácil Help Center"
      description="Central de ajuda Credifácil. Respostas técnicas sobre crédito, securitização, investimentos e conta digital."
    />
    <PageHeader
      eyebrow="Help Center"
      title={<>Central de <span className="text-gold-gradient">Atendimento & Suporte</span></>}
      subtitle="Tudo o que você precisa saber sobre nossas operações estruturadas e serviços bancários."
      bgImage={imgFaq}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section className="container-x py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_2.5fr]">
        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-white">Canais Diretos</h3>
            <p className="mt-2 text-sm text-white/60">Prefere falar com um humano? Estamos prontos para ajudar.</p>
            
            <div className="mt-8 space-y-6">
              <a href="/contato" className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))] group-hover:bg-[hsl(var(--gold-soft))] group-hover:text-white transition-all">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Chat ao vivo</p>
                  <p className="text-xs text-white/50">Tempo médio: 2 min</p>
                </div>
              </a>
              <a href="tel:0800" className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))] group-hover:bg-[hsl(var(--gold-soft))] group-hover:text-white transition-all">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">0800 Central</p>
                  <p className="text-xs text-white/50">Atendimento Nacional</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))]">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Ouvidoria</p>
                  <p className="text-xs text-white/50">Canal de segunda instância</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] p-8 text-white shadow-xl">
            <h4 className="font-bold">Segurança Digital</h4>
            <p className="mt-3 text-sm opacity-90">Nunca solicitamos senhas ou tokens por telefone. Nossos e-mails oficiais terminam sempre em @credifacil.com.br</p>
          </div>
        </aside>

        <div className="space-y-16">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.1}>
              <div id={g.name.toLowerCase().replace(/ /g, '-')}>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white/90">{g.name}</h2>
                </div>
                <FAQAccordion items={g.items} dark />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection 
      title="Ainda precisa de auxílio?" 
      subtitle="Nossos consultores estão disponíveis para reuniões presenciais ou via vídeo-conferência."
      cta="Agendar Consultoria" 
    />
  </Layout>
);

export default Duvidas;
