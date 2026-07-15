import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/boleto-hero.png.asset.json";
import footerImg from "@/assets/boleto-footer.png.asset.json";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  ["Padarias", "Mercados"],
  ["Farmácias", "Restaurantes"],
  ["Distribuidoras", "Atacadistas"],
  ["Confecções", "Óticas"],
  ["Autopeças", "Materiais"],
  ["Clínicas", "Escolas"],
  ["Petshops", "Salões"],
  ["Indústrias", "Comércio"],
  ["Serviços", "Franquias"],
  ["Prestadores", "Fornecedores"],
];

const BoletoAntecipado = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const stickyBar = root.querySelector<HTMLElement>(".ba-sticky-bar");
      const footerTrigger = root.querySelector<HTMLElement>(".ba-trigger-footer");
      if (!stickyBar || !footerTrigger) return;

      const getCenter = () => stickyBar.offsetTop + stickyBar.offsetHeight / 2;

      root.querySelectorAll<HTMLElement>(".ba-row").forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${getCenter() - 650} center`,
          end: () => `top+=${getCenter() - 450} center`,
          scrub: true,
          onUpdate: (self) => {
            const maxGap = window.innerWidth < 900 ? 10 : 15;
            const minGap = window.innerWidth < 900 ? 0.5 : 1;
            row.style.gap = `${minGap + (maxGap - minGap) * self.progress}em`;
          },
        });
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${getCenter() - 400} center`,
          end: () => `top+=${getCenter() - 300} center`,
          scrub: true,
          onUpdate: (self) => {
            const maxGap = window.innerWidth < 900 ? 0.5 : 1;
            const minGap = window.innerWidth < 900 ? 10 : 15;
            row.style.gap = `${minGap + (maxGap - minGap) * self.progress}em`;
          },
        });
      });

      ScrollTrigger.create({
        trigger: footerTrigger,
        start: "top bottom",
        end: () => `top+=${footerTrigger.offsetHeight - window.innerHeight} center`,
        scrub: true,
        onUpdate: (self) => {
          stickyBar.style.top = `${50 + (92 - 50) * self.progress}%`;
        },
      });

      ScrollTrigger.create({
        trigger: footerTrigger,
        start: () => `top+=${footerTrigger.offsetHeight - (window.innerHeight + 100)} bottom`,
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const start = window.innerWidth < 900 ? 2.5 : 1.25;
          const end = 9;
          const size = start + (end - start) * self.progress;
          stickyBar.querySelectorAll<HTMLElement>("p").forEach((p) => {
            p.style.fontSize = `${size}vw`;
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="ba-page">
      <Navbar />

      <div className="ba-sticky-bar">
        <div className="ba-item"><p>Vendeu</p></div>
        <div className="ba-item"><p>→</p></div>
        <div className="ba-item"><p>Recebeu</p></div>
      </div>

      <section className="ba-hero">
        <img src={heroImg.url} alt="Cliente antecipando boletos com a CredMais" />
      </section>

      <section className="ba-clients">
        {rows.map(([a, b], i) => (
          <div key={i} className="ba-row">
            <div className="ba-logo"><p>{a}</p></div>
            <div className="ba-logo"><p>{b}</p></div>
          </div>
        ))}
      </section>

      <section className="ba-trigger-footer">
        <img src={footerImg.url} alt="Atendimento CredMais Boleto Antecipado" />
      </section>
    </main>
  );
};

export default BoletoAntecipado;