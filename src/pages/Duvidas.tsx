import { useState } from "react";
import { Search, ChevronDown, MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const categories = [
  { id: "geral", label: "Geral", icon: HelpCircle },
  { id: "credito", label: "Crédito", icon: MessageCircle },
  { id: "investimentos", label: "Investimentos", icon: Search },
  { id: "conta", label: "Conta Digital", icon: Phone },
];

const faqs = [
  {
    category: "geral",
    q: "Quem pode ser cliente Credifácil?",
    a: "Pessoas físicas e jurídicas que buscam soluções financeiras personalizadas, seja para crédito consignado, antecipação de recebíveis ou investimentos estratégicos.",
  },
  {
    category: "credito",
    q: "Como funciona o crédito consignado?",
    a: "O crédito consignado é uma modalidade de empréstimo onde as parcelas são descontadas diretamente da folha de pagamento do beneficiário, oferecendo taxas de juros muito menores que o crédito tradicional.",
  },
  {
    category: "credito",
    q: "O que é antecipação de recebíveis?",
    a: "É uma operação financeira que permite que sua empresa receba agora o dinheiro de vendas feitas a prazo (cartão, boleto, duplicatas), melhorando o fluxo de caixa sem criar dívidas bancárias.",
  },
  {
    category: "investimentos",
    q: "Qual o valor mínimo para investir?",
    a: "Trabalhamos com diversos perfis de produtos. Alguns permitem aportes iniciais acessíveis, enquanto carteiras personalizadas e fundos exclusivos podem exigir tickets maiores. Consulte nossos assessores para seu caso específico.",
  },
  {
    category: "conta",
    q: "A conta Luri tem tarifas de manutenção?",
    a: "Nossa conta digital empresarial foca em transparência. Existem modelos isentos e planos por uso que se adaptam ao volume de transações da sua empresa. Sem surpresas no extrato.",
  },
  {
    category: "geral",
    q: "Como entrar em contato com o suporte?",
    a: "Você pode nos contatar via WhatsApp, telefone fixo, e-mail ou visitando uma de nossas unidades. O atendimento é humanizado e focado em resolver sua demanda com agilidade.",
  },
];

const Duvidas = () => {
  const [activeTab, setActiveTab] = useState("geral");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(f => f.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Como podemos <span className="text-gold-gradient">ajudar?</span>
              </h1>
              <p className="text-lg text-foreground/60 mb-10">
                Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input 
                  type="text" 
                  placeholder="O que você está procurando?"
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-gold/50 shadow-2xl transition-all"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setOpenIndex(null);
                    }}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                      activeTab === cat.id 
                        ? "bg-white/5 border-gold/40 text-gold-soft shadow-lg" 
                        : "bg-transparent border-white/5 text-foreground/60 hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeTab === cat.id ? "bg-gold/10" : "bg-white/5"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{cat.label}</span>
                  </button>
                );
              })}

              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />
                <h3 className="text-xl font-display font-bold mb-4">Ainda com dúvidas?</h3>
                <p className="text-sm text-foreground/70 mb-6">
                  Nosso time de especialistas está pronto para te atender pessoalmente.
                </p>
                <div className="space-y-3">
                  <a href="https://wa.me/5511964541758" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/30">
                      <MessageCircle className="w-4 h-4 text-gold" />
                    </div>
                    WhatsApp Suporte
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/30">
                      <Mail className="w-4 h-4 text-gold" />
                    </div>
                    meajuda@credifacil.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {filteredFaqs.map((faq, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                    openIndex === i 
                      ? "border-gold/40 bg-white/[0.03]" 
                      : "border-white/5 bg-white/[0.01] hover:border-white/20"
                  }`}>
                    <button 
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-serif text-lg md:text-xl text-foreground/90">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                    </button>
                    <div 
                      className="grid transition-all duration-500 ease-in-out"
                      style={{ gridTemplateRows: openIndex === i ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="p-6 pt-0 text-foreground/60 leading-relaxed text-base md:text-lg">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Duvidas;
