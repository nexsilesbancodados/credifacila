import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";

gsap.registerPlugin(CustomEase);

const projectsData = [
  { name: "Crédito Consignado", director: "Aprovação 24h", location: "Todo Brasil" },
  { name: "Antecipação", director: "Recebíveis", location: "Empresas" },
  { name: "Boleto Garantido", director: "Fluxo de Caixa", location: "PME" },
  { name: "Conta Digital", director: "Luri Bank", location: "Digital" },
  { name: "CredMais Motorista", director: "Apps de Corrida", location: "Nacional" },
  { name: "CredMais Entregador", director: "Delivery", location: "Nacional" },
  { name: "Parcerias Bancárias", director: "+20 Bancos", location: "Brasil" },
  { name: "Assessoria", director: "Especializada", location: "Online" },
];

export default function HeroReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const q = (sel: string) => root.querySelectorAll(sel);
    const projectsContainer = root.querySelector(".projects")!;
    const locationsContainer = root.querySelector(".locations")!;
    const gridImages = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".img"));
    const heroImage = root.querySelector(".img.hero-img") as HTMLElement;
    const images = gridImages.filter((img) => img !== heroImage);

    const introCopy = new SplitType(root.querySelectorAll(".intro-copy h3") as any, { types: "words", absolute: false });
    const titleHeading = new SplitType(root.querySelectorAll(".title h1") as any, { types: "words", absolute: false });

    const allImageSources = Array.from({ length: 35 }, (_, i) => `/img${i + 1}.jpeg`);
    const getRandomImageSet = () => [...allImageSources].sort(() => 0.5 - Math.random()).slice(0, 9);

    projectsData.forEach((p) => {
      const item = document.createElement("div");
      item.className = "project-item";
      const n = document.createElement("p"); n.textContent = p.name;
      const d = document.createElement("p"); d.textContent = p.director;
      item.append(n, d); projectsContainer.appendChild(item);

      const loc = document.createElement("div");
      loc.className = "location-item";
      const l = document.createElement("p"); l.textContent = p.location;
      loc.appendChild(l); locationsContainer.appendChild(loc);
    });

    gsap.set(root.querySelector("nav"), { y: "-125%" });
    gsap.set(introCopy.words, { y: "110%" });
    gsap.set(titleHeading.words, { y: "110%" });

    const overlayTl = gsap.timeline();
    const imagesTl = gsap.timeline();
    const textTl = gsap.timeline();

    overlayTl.to(q(".logo-line-1"), {
      backgroundPosition: "0% 0%", color: "#fff", duration: 1, ease: "none", delay: 0.5,
      onComplete: () => { gsap.to(q(".logo-line-2"), { backgroundPosition: "0% 0%", color: "#fff", duration: 1, ease: "none" }); },
    });
    overlayTl.to([q(".projects-header"), q(".project-item")], { opacity: 1, duration: 0.15, stagger: 0.075, delay: 1 });
    overlayTl.to([q(".locations-header"), q(".location-item")], { opacity: 1, duration: 0.15, stagger: 0.075 }, "<");
    overlayTl.to(q(".project-item"), { color: "#fff", duration: 0.15, stagger: 0.075 });
    overlayTl.to(q(".location-item"), { color: "#fff", duration: 0.15, stagger: 0.075 }, "<");
    overlayTl.to([q(".projects-header"), q(".project-item")], { opacity: 0, duration: 0.15, stagger: 0.075 });
    overlayTl.to([q(".locations-header"), q(".location-item")], { opacity: 0, duration: 0.15, stagger: 0.075 }, "<");
    overlayTl.to(q(".overlay"), { opacity: 0, duration: 0.5, delay: 1.5, onComplete: () => { (root.querySelector(".overlay") as HTMLElement).style.display = "none"; } });

    imagesTl.to(q(".img"), {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1, delay: 2.5, stagger: 0.05, ease: "hop",
      onStart: () => {
        setTimeout(() => {
          const totalCycles = 20;
          for (let cycle = 0; cycle < totalCycles; cycle++) {
            const randomImages = getRandomImageSet();
            gsap.to({}, {
              duration: 0, delay: cycle * 0.15,
              onComplete: () => {
                gridImages.forEach((img, index) => {
                  const el = img.querySelector("img") as HTMLImageElement;
                  if (cycle === totalCycles - 1 && img === heroImage) {
                    el.src = "/img5.jpeg";
                    gsap.set(root.querySelectorAll(".hero-img img"), { scale: 2 });
                  } else {
                    el.src = randomImages[index];
                  }
                });
              },
            });
          }
          gsap.to(q(".loader"), { opacity: 0, duration: 0.3 });
        }, 1000);
      },
    });
    imagesTl.to(images, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1, delay: 2.5, stagger: 0.05, ease: "hop" });
    imagesTl.to(q(".hero-img"), { y: -50, duration: 1, ease: "hop" });
    imagesTl.to(q(".hero-img"), {
      scale: 4, clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)", duration: 1.5, ease: "hop",
      onStart: () => {
        gsap.to(root.querySelectorAll(".hero-img img"), { scale: 1, duration: 1.5, ease: "hop" });
        gsap.to(q(".banner-img"), { scale: 1, delay: 0.5, duration: 0.5 });
        gsap.to(root.querySelector("nav"), { y: "0%", duration: 1, ease: "hop", delay: 0.25 });
      },
    });
    imagesTl.to(q(".banner-img-1"), { left: "40%", rotate: -20, duration: 1.5, delay: 0.5, ease: "hop" }, "<");
    imagesTl.to(q(".banner-img-2"), { left: "60%", rotate: 20, duration: 1.5, ease: "hop" }, "<");

    textTl.to(titleHeading.words, { y: "0%", duration: 1, stagger: 0.1, delay: 9.5, ease: "power3.out" });
    textTl.to(introCopy.words, { y: "0%", duration: 1, stagger: 0.1, delay: 0.25, ease: "power3.out" }, "<");

    return () => {
      overlayTl.kill(); imagesTl.kill(); textTl.kill();
      introCopy.revert(); titleHeading.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-reveal">
      <div className="overlay">
        <div className="projects">
          <div className="projects-header"><p>Produto</p><p>Destaque</p></div>
        </div>
        <div className="loader">
          <h1 className="logo-line-1">Cred</h1>
          <h1 className="logo-line-2">Mais</h1>
        </div>
        <div className="locations">
          <div className="locations-header"><p>Alcance</p></div>
        </div>
      </div>

      <div className="image-grid">
        <div className="grid-row">
          <div className="img"><img src="/img1.jpeg" alt="" /></div>
          <div className="img"><img src="/img2.jpeg" alt="" /></div>
          <div className="img"><img src="/img3.jpeg" alt="" /></div>
        </div>
        <div className="grid-row">
          <div className="img"><img src="/img4.jpeg" alt="" /></div>
          <div className="img hero-img"><img src="/img5.jpeg" alt="" /></div>
          <div className="img"><img src="/img6.jpeg" alt="" /></div>
        </div>
        <div className="grid-row">
          <div className="img"><img src="/img7.jpeg" alt="" /></div>
          <div className="img"><img src="/img8.jpeg" alt="" /></div>
          <div className="img"><img src="/img9.jpeg" alt="" /></div>
        </div>
      </div>

      <nav>
        <div className="links"><a href="/">Início</a><a href="/blog">Blog</a></div>
        <div className="nav-logo"><a href="/">Cred<br />Mais</a></div>
        <div className="links"><a href="/duvidas">Dúvidas</a><a href="https://wa.me/5511964541758">Contato</a></div>
      </nav>

      <div className="banner-img banner-img-1"><img src="/img7.jpeg" alt="" /></div>
      <div className="banner-img banner-img-2"><img src="/img16.jpeg" alt="" /></div>

      <div className="intro-copy">
        <h3>Crédito Inteligente</h3>
        <h3>Resultados Reais</h3>
      </div>

      <div className="title">
        <h1>Soluções financeiras sob medida</h1>
      </div>
    </div>
  );
}