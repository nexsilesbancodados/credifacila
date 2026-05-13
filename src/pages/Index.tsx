import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BanksMarquee } from "@/components/BanksMarquee";
import EasyLoanSection from "@/components/EasyLoanSection";
import hero1 from "@/assets/hero/hero-1.png";
import hero2 from "@/assets/hero/hero-2.png";
import hero3 from "@/assets/hero/hero-3.png";
import hero4 from "@/assets/hero/hero-4.png";
import hero5 from "@/assets/hero/hero-5.png";
import hero6 from "@/assets/hero/hero-6.png";
import hero7 from "@/assets/hero/hero-7.png";
import hero8 from "@/assets/hero/hero-8.png";

const slides = [
  { src: hero1, alt: "Seu novo projeto começa aqui" },
  { src: hero2, alt: "Empréstimo com segurança" },
  { src: hero3, alt: "Mais crédito, menos complicação" },
  { src: hero4, alt: "Crédito para o seu negócio" },
  { src: hero5, alt: "Crédito para empresas" },
  { src: hero6, alt: "Capital de giro" },
  { src: hero7, alt: "Atendimento especializado" },
  { src: hero8, alt: "Crédito consignado" },
];

const Index = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] w-full">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/80 to-transparent" />

          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/50 md:left-6 md:p-3"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/50 md:right-6 md:p-3"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-[hsl(var(--gold))]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <BanksMarquee />
      <EasyLoanSection />
    </main>
  );
};

export default Index;
