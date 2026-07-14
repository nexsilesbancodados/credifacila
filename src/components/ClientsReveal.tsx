import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./clients-reveal.css";

gsap.registerPlugin(ScrollTrigger);

const rows: [string, string][] = [
  ["Bradesco", "Itaú"],
  ["Santander", "Caixa"],
  ["Banco do Brasil", "BTG Pactual"],
  ["Safra", "Sicoob"],
  ["Sicredi", "Inter"],
  ["Nubank", "C6 Bank"],
  ["Original", "Pan"],
  ["Daycoval", "BMG"],
  ["Mercantil", "Banrisul"],
  ["Votorantim", "Agibank"],
];

export default function ClientsReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stickyBar = root.querySelector<HTMLElement>(".cr-sticky-bar")!;
    const footerTrigger = root.querySelector<HTMLElement>(".cr-trigger-footer")!;
    const rowEls = root.querySelectorAll<HTMLElement>(".cr-row");

    const getCenter = () => stickyBar.offsetTop + stickyBar.offsetHeight / 2;
    const triggers: ScrollTrigger[] = [];

    rowEls.forEach((row) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${getCenter() - 650} center`,
          end: () => `top+=${getCenter() - 450} center`,
          scrub: true,
          onUpdate: (self) => {
            const max = window.innerWidth < 900 ? 10 : 15;
            const min = window.innerWidth < 900 ? 0.5 : 1;
            row.style.gap = `${min + (max - min) * self.progress}em`;
          },
        }),
      );
      triggers.push(
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${getCenter() - 400} center`,
          end: () => `top+=${getCenter() - 300} center`,
          scrub: true,
          onUpdate: (self) => {
            const max = window.innerWidth < 900 ? 0.5 : 1;
            const min = window.innerWidth < 900 ? 10 : 15;
            row.style.gap = `${min + (max - min) * self.progress}em`;
          },
        }),
      );
    });

    const ftH = footerTrigger.offsetHeight;
    triggers.push(
      ScrollTrigger.create({
        trigger: footerTrigger,
        start: "top bottom",
        end: () => `top+=${ftH - window.innerHeight} center`,
        scrub: true,
        onUpdate: (self) => {
          stickyBar.style.top = `${50 + (92 - 50) * self.progress}%`;
        },
      }),
    );
    triggers.push(
      ScrollTrigger.create({
        trigger: footerTrigger,
        start: () => `top+=${ftH - (window.innerHeight + 100)} bottom`,
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const s = window.innerWidth < 900 ? 2.5 : 1.25;
          const e = 9;
          const size = s + (e - s) * self.progress;
          stickyBar.querySelectorAll("p").forEach((p) => {
            (p as HTMLElement).style.fontSize = `${size}vw`;
          });
        },
      }),
    );

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div ref={rootRef} className="clients-reveal">
      <div className="cr-sticky-bar">
        <div className="cr-item"><p>CredMais</p></div>
        <div className="cr-item"><p>&</p></div>
        <div className="cr-item"><p>Parceiros</p></div>
      </div>

      <section className="cr-clients">
        {rows.map(([a, b], i) => (
          <div className="cr-row" key={i}>
            <div className="cr-logo"><p>{a}</p></div>
            <div className="cr-logo"><p>{b}</p></div>
          </div>
        ))}
      </section>

      <section className="cr-trigger-footer" />
    </div>
  );
}