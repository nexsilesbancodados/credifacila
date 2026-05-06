import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import ContactFooter from "@/components/ContactFooter";
import HumanizedSection from "@/components/HumanizedSection";
import SolutionsSection from "@/components/SolutionsSection";
import PartnerBanks from "@/components/PartnerBanks";
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  useSeo({
    title: "Credifácil | Crédito rápido, seguro e descomplicado",
    description:
      "Crédito consignado, antecipação de recebíveis e boleto garantido com aprovação rápida e atendimento humano. Mais de 20 mil clientes atendidos.",
    keywords:
      "crédito consignado, securitizadora, antecipação de recebíveis, boleto garantido, conta digital, Credifácil",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Credifácil",
      url: "https://www.credifacil.com.br",
      logo: "https://www.credifacil.com.br/og-image.png",
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      ],
    },
  });
  return (
    <div className="relative min-h-screen">
    <Header />
     <main id="main">
       <HeroHome />
       <HumanizedSection />
       <PartnerBanks />
       <SolutionsSection id="solucoes" />
     </main>
    <ContactFooter />
  </div>
  );
};

export default Index;
