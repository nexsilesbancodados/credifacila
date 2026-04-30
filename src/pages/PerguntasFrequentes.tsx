import { useState } from "react";
import { Search, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import { useSeo } from "@/hooks/useSeo";
import { whatsappLink } from "@/config/site";

const categories = [
  {
    name: "Crédito Consignado",
    items: [
      { q: "Quem pode contratar consignado?", a: "Aposentados e pensionistas do INSS, servidores públicos, militares e trabalhadores CLT de empresas conveniadas." },
      { q: "Qual a taxa do consignado Credifácil?", a: "A partir de 1,19% ao mês — sempre comparamos as melhores ofertas entre nossos bancos parceiros." },
      { q: "Posso contratar com nome negativado?", a: "Sim. Como o desconto é em folha, a maioria dos bancos parceiros não consulta SPC/Serasa." },
      { q: "Em quanto tempo o dinheiro cai na conta?", a: "Após assinatura digital, em média 24 horas úteis." },
    ],
  },
  {
    name: "Securitizadora",
    items: [
      { q: "Antecipação de recebíveis é empréstimo?", a: "Não. É a venda dos seus créditos. Não impacta endividamento e não exige garantias." },
      { q: "Como funciona o Boleto Garantido?", a: "Você emite o boleto pela nossa plataforma e nós garantimos o pagamento no vencimento, mesmo que o cliente não pague." },
      { q: "Qual o volume mínimo para antecipar?", a: "A partir de R$ 50 mil em recebíveis." },
    ],
  },
  {
    name: "Conta Digital Luri",
    items: [
      { q: "A Conta Luri é gratuita?", a: "Sim. Sem mensalidade, com Pix e TED ilimitados gratuitos." },
      { q: "Quanto tempo leva para abrir?", a: "Em torno de 5 minutos pelo aplicativo." },
      { q: "Tem cartão físico?", a: "Sim. Cartão Visa internacional sem anuidade, entregue em até 7 dias úteis." },
    ],
  },
  {
    name: "Segurança e LGPD",
    items: [
      { q: "Meus dados estão seguros?", a: "Sim. Operamos sob LGPD, com criptografia de ponta-a-ponta e auditorias regulares." },
      { q: "Vocês são autorizados pelo Banco Central?", a: "Operamos como correspondente bancário e securitizadora, dentro de todas as normas regulatórias aplicáveis." },
    ],
  },
];

const PerguntasFrequentes = () => {
  useSeo({
    title: "Perguntas Frequentes — FAQ Credifácil",
    description: "Tire suas dúvidas sobre consignado, securitizadora, conta digital e nossa estrutura. Respostas claras e objetivas.",
  });
  const [query, setQuery] = useState("");

  const filtered = categories
    .map((c) => ({
      ...c,
      items: c.items.filter(
        (it) =>
          it.q.toLowerCase().includes(query.toLowerCase()) ||
          it.a.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main id="main">
        <section className="relative overflow-hidden py-20 md:py-28">
          <AnimatedBackdrop variant="dark" />
          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <span className="pill-eyebrow-dark mx-auto" data-anim="fade-down">
              <Sparkles className="h-3.5 w-3.5" /> Central de ajuda
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight md:text-6xl" data-anim="fade-up">
              Perguntas <span className="text-gold-gradient">frequentes</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg" data-anim="fade-up">
              Respostas claras para tudo o que você precisa saber sobre os produtos Credifácil.
            </p>
            <div className="relative mx-auto mt-10 max-w-xl" data-anim="fade-up">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-gold" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busque sua dúvida…"
                className="w-full rounded-full border border-brand-gold/30 bg-card/85 py-4 pl-14 pr-5 text-[15px] text-foreground shadow-[var(--shadow-elev)] outline-none backdrop-blur-xl focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>
          </div>
        </section>

        <section className="relative pb-24">
          <div className="mx-auto max-w-4xl space-y-12 px-5 md:px-8">
            {filtered.length === 0 && (
              <div className="rounded-3xl border border-brand-gold/20 bg-card/80 p-10 text-center backdrop-blur-xl">
                <HelpCircle className="mx-auto h-10 w-10 text-brand-gold" />
                <p className="mt-4 font-display text-lg font-bold">Nada encontrado para "{query}"</p>
                <p className="mt-2 text-sm text-muted-foreground">Fale conosco no WhatsApp e respondemos em minutos.</p>
                <a href={whatsappLink("Olá! Tenho uma dúvida.")} className="btn-gold mt-6">
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </a>
              </div>
            )}
            {filtered.map((cat) => (
              <div key={cat.name} data-anim="fade-up">
                <h2 className="mb-6 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  <span className="text-gold-gradient">{cat.name}</span>
                </h2>
                <div className="space-y-3" data-anim-stagger>
                  {cat.items.map((it) => (
                    <details
                      key={it.q}
                      className="group rounded-2xl border border-brand-gold/15 bg-card/85 p-6 backdrop-blur-xl transition-all open:border-brand-gold/50 open:shadow-[var(--shadow-gold-sm)]"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-[15px] font-semibold md:text-base">
                        {it.q}
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{it.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
};

export default PerguntasFrequentes;
