import Header from "@/components/Header";
import LoansSection from "@/components/LoansSection";
import HowItWorks from "@/components/HowItWorks";
import AdvantagesSection from "@/components/AdvantagesSection";
import PartnerBanks from "@/components/PartnerBanks";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import TestimonialsMarquee, { type MarqueeTestimonial } from "@/components/TestimonialsMarquee";

const homeTestimonials: MarqueeTestimonial[] = [
  { initials: "CR", name: "Camila R.", meta: "Cliente desde 2024 · São Paulo", text: "Em poucos cliques resolvi tudo. Simples, rápido e sem stress!" },
  { initials: "JM", name: "João M.", meta: "Cliente desde 2023 · Belo Horizonte", text: "Aprovaram em minutos e o dinheiro caiu no mesmo dia. Recomendo demais!" },
  { initials: "AP", name: "Ana P.", meta: "Cliente desde 2025 · Curitiba", text: "Atendimento humano de verdade. Me explicaram tudo sem letrinha miúda." },
  { initials: "RS", name: "Rafael S.", meta: "PJ · Florianópolis", text: "Capital de giro liberado em 24h. Salvou o mês da minha empresa." },
  { initials: "MO", name: "Marina O.", meta: "Cliente desde 2024 · Salvador", text: "Fiz a portabilidade e reduzi a parcela em quase metade. Surreal." },
  { initials: "PT", name: "Paulo T.", meta: "Cliente desde 2022 · Recife", text: "Já estou na segunda contratação. Confiança 100%, sempre transparentes." },
];

const Index = () => (
  <div className="relative min-h-screen">
    <AnimatedBackdrop variant="soft" />
    <Header />
    <main id="main">
      {/* 1. Soluções — apresenta produtos logo após a hero */}
      <LoansSection />
      {/* 2. Vantagens — por que escolher a Vamos Crédito */}
      <AdvantagesSection />
      {/* 3. Bancos parceiros — prova social e credibilidade */}
      <PartnerBanks />
      {/* 4. Como funciona — desmistifica o processo em 4 passos */}
      <HowItWorks />
      {/* 5. Sobre nós — história, propósito e estatísticas */}
      <AboutSection />
      {/* 6. Depoimentos — marquee em loop (penúltima seção) */}
      <TestimonialsMarquee
        eyebrow="Quem confia"
        title="Histórias reais"
        titleHighlight="de quem escolheu a Credifácil"
        subtitle="Mais de 50 mil pessoas já contrataram com a gente. Veja por que nossos clientes recomendam."
        testimonials={homeTestimonials}
      />
      {/* 7. FAQ — remove últimas objeções antes do contato */}
      <FaqSection />
    </main>
    <ContactFooter />
  </div>
);

export default Index;
