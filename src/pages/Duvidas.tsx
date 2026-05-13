import { memo } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import imgFaq from "@/assets/img-faq.jpg";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { HelpCircle, MessageCircle, PhoneCall, ShieldAlert } from "lucide-react";
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

    <section className="container-x py-24">
      <div className="grid gap-16 lg:grid-cols-[1fr_2.5fr]">
        <aside className="space-y-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">Canais Diretos</h3>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">Prefere falar com um humano? Nosso tempo de resposta médio é de 2 minutos.</p>
            
            <div className="mt-10 space-y-8">
              <a href="/contato" className="flex items-center gap-5 group outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))] rounded-xl p-1 -m-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))] group-hover:bg-[hsl(var(--gold-soft))] group-hover:text-navy-deep transition-all">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-widest">Chat ao vivo</p>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest mt-1">Disponível agora</p>
                </div>
              </a>
              <a href="tel:0800" className="flex items-center gap-5 group outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))] rounded-xl p-1 -m-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))] group-hover:bg-[hsl(var(--gold-soft))] group-hover:text-navy-deep transition-all">
                  <PhoneCall className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-widest">0800 Central</p>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest mt-1">Ligação gratuita</p>
                </div>
              </a>
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))]">
                  <HelpCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-widest">Ouvidoria</p>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest mt-1">Segunda instância</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] p-10 text-white shadow-2xl relative overflow-hidden group">
            <ShieldAlert className="absolute -right-4 -bottom-4 h-32 w-32 text-white/10 rotate-12 transition-transform group-hover:scale-110" aria-hidden="true" />
            <h4 className="font-black text-xl uppercase tracking-tighter relative z-10">Segurança Digital</h4>
            <p className="mt-4 text-sm opacity-90 leading-relaxed relative z-10 font-medium">Nunca solicitamos tokens ou senhas por telefone. Nossas comunicações oficiais são centralizadas no portal Luri.</p>
          </div>
        </aside>

        <div className="space-y-20">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.1}>
              <section id={g.name.toLowerCase().replace(/ /g, '-')} aria-labelledby={`title-${i}`}>
                <div className="mb-10 flex items-center gap-6">
                  <h2 id={`title-${i}`} className="text-2xl font-black uppercase tracking-tighter text-white/90 whitespace-nowrap">{g.name}</h2>
                  <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                </div>
                <FAQAccordion items={g.items} dark />
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection 
      title="Ainda possui questionamentos técnicos?" 
      subtitle="Nossa equipe de Relationship Managers está à disposição para diagnósticos profundos."
      cta="Agendar Consultoria" 
    />
  </Layout>
);

export default memo(Duvidas);
