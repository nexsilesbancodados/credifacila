import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "@/assets/arch-1.png.asset.json";
import img2 from "@/assets/arch-2.png.asset.json";
import img3 from "@/assets/arch-3.png.asset.json";
import img4 from "@/assets/arch-4.png.asset.json";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    tag: "Antecipação",
    title: "Fluxo de caixa liberado hoje",
    desc: "Transforme vendas a prazo em capital imediato e mantenha sua operação em movimento.",
    cta: "Antecipar recebíveis",
    color: "#F5D97A",
    img: img1.url,
  },
  {
    tag: "Boleto Garantido",
    title: "Liquidez sem risco de calote",
    desc: "Receba à vista pelos boletos emitidos e transfira o risco de inadimplência para nós.",
    cta: "Garantir meus boletos",
    color: "#7DD6FF",
    img: img2.url,
  },
  {
    tag: "Consignado",
    title: "Crédito com desconto em folha",
    desc: "Taxas exclusivas para servidores, aposentados e pensionistas, com aprovação rápida.",
    cta: "Simular consignado",
    color: "#FFA0B0",
    img: img3.url,
  },
  {
    tag: "Shield Bank",
    title: "Conta digital sem burocracia",
    desc: "Cartão, PIX ilimitado e gestão financeira completa em uma única plataforma segura.",
    cta: "Abrir minha conta",
    color: "#FFA17B",
    img: img4.url,
  },
];

const bgColors = ["#0f1a3a", "#1a1330", "#2a1520", "#2a1a10"];

const ArchShowcase = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLImageElement>(".arch-img");

      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".arch",
            start: "top top",
            end: "bottom bottom",
            pin: ".arch__right",
            scrub: true,
          },
        });

        gsap.set(imgs, { clipPath: "inset(0)", objectPosition: "0px 0%" });

        imgs.forEach((current, index) => {
          const next = imgs[index + 1];
          const sub = gsap.timeline();
          if (next) {
            sub
              .to(
                root,
                { backgroundColor: bgColors[index + 1] ?? bgColors[0], duration: 1.5, ease: "power2.inOut" },
                0
              )
              .to(
                current,
                { clipPath: "inset(0px 0px 100%)", objectPosition: "0px 60%", duration: 1.5, ease: "none" },
                0
              )
              .to(next, { objectPosition: "0px 40%", duration: 1.5, ease: "none" }, 0);
          }
          tl.add(sub);
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set(imgs, { objectPosition: "0px 60%" });
        imgs.forEach((image, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: image,
                start: "top-=70% top+=50%",
                end: "bottom+=200% bottom",
                scrub: true,
              },
            })
            .to(image, { objectPosition: "0px 30%", duration: 5, ease: "none" })
            .to(root, { backgroundColor: bgColors[index] ?? bgColors[0], duration: 1.5, ease: "power2.inOut" });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="arch-showcase"
      style={{ backgroundColor: bgColors[0] }}
    >
      <div className="arch-container">
        <header className="arch-header">
          <span className="arch-eyebrow">Serviços CredMais</span>
          <h2>Uma solução para cada momento do seu negócio</h2>
        </header>

        <div className="arch">
          <div className="arch__left">
            {items.map((it) => (
              <div key={it.tag} className="arch__info">
                <div className="content">
                  <span className="arch-tag" style={{ backgroundColor: it.color }}>
                    {it.tag}
                  </span>
                  <h3 className="header">{it.title}</h3>
                  <p className="desc">{it.desc}</p>
                  <a className="link" href="#" style={{ backgroundColor: it.color }}>
                    <span>{it.cta}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="arch__right">
            {items.map((it, i) => (
              <div
                key={it.tag}
                className="img-wrapper"
                style={{ zIndex: items.length - i }}
              >
                <img src={it.img} alt={it.title} className="arch-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchShowcase;