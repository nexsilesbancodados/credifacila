import { useEffect, useRef } from "react";
import "./living-words.css";

const poem = `<p>Se você pode <span>sonhar</span> quando todos duvidam,
e <span>construir</span> quando faltam as ferramentas;
se você pode <span>confiar</span> no próprio caminho,
e <span>seguir</span> mesmo diante das tormentas;
se você pode <span>trabalhar</span> sem desanimar,
e <span>recomeçar</span> quando o dinheiro some;
se você pode <span>investir</span> no seu futuro,
e <span>colher</span> aquilo que hoje se consome;
se você pode <span>crescer</span> com paciência,
e <span>vencer</span> a pressa e a impaciência;
se você pode <span>acreditar</span> no impossível,
e transformar cada <span>meta</span> em existência;
então o <span>crédito</span> é apenas a chave,
e a <span>liberdade</span> financeira é o portal —
e você, com a <span>CredMais</span> ao seu lado,
realiza tudo o que era <span>ideal</span>.
 &nbsp; &nbsp; &nbsp; — CredMais Manifesto</p>`;

export default function LivingWords() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll(".lw-text").forEach((el) => {
      el.innerHTML = poem;
    });

    const content = root.querySelector<HTMLElement>(".lw-content")!;
    const adjust = () => {
      const vw = window.innerWidth;
      const base = 1000;
      const scale = vw < base ? (vw / base) * 0.9 : 1;
      content.style.transform = `scale(${scale})`;
    };
    adjust();
    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, []);

  return (
    <section ref={rootRef} className="living-words">
      <div className="lw-card">
        <div className="lw-content">
          <div className="lw-container-full">
            <div className="lw-hue animated" />
            <div className="lw-bg" />
            <div className="lw-container">
              <div className="lw-cube">
                <div className="lw-face lw-top" />
                <div className="lw-face lw-bottom" />
                <div className="lw-face lw-left lw-text" />
                <div className="lw-face lw-right lw-text" />
                <div className="lw-face lw-front" />
                <div className="lw-face lw-back lw-text" />
              </div>
            </div>
            <div className="lw-container-reflect">
              <div className="lw-cube">
                <div className="lw-face lw-top" />
                <div className="lw-face lw-bottom" />
                <div className="lw-face lw-left lw-text" />
                <div className="lw-face lw-right lw-text" />
                <div className="lw-face lw-front" />
                <div className="lw-face lw-back lw-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}