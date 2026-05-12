import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS = [
  { name: "Marina S.", role: "Empresária — SP", text: "Antecipei recebíveis e em 24h o capital estava na conta. Atendimento humano e taxas muito melhores que o banco.", rating: 5 },
  { name: "Carlos R.", role: "Servidor público — RJ", text: "Consignado aprovado em minutos, sem burocracia. A equipe explicou tudo com clareza.", rating: 5 },
  { name: "Juliana P.", role: "Investidora — MG", text: "Operações estruturadas com transparência total. Recomendo de olhos fechados.", rating: 5 },
  { name: "Felipe A.", role: "Lojista — PR", text: "O Boleto Garantido reduziu minha inadimplência em 40%. Mudou meu fluxo de caixa.", rating: 5 },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ITEMS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const item = ITEMS[i];
  return (
    <section className="container-x py-20">
      <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:p-12">
        <Quote className="absolute -top-5 left-8 h-10 w-10 rounded-2xl bg-[hsl(var(--gold))] p-2 text-[hsl(var(--navy-deep))] shadow-[var(--shadow-gold)]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-3 flex gap-1">
              {Array.from({ length: item.rating }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">"{item.text}"</p>
            <div className="mt-6">
              <p className="text-sm font-extrabold text-white">{item.name}</p>
              <p className="text-xs uppercase tracking-wider text-white/60">{item.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {ITEMS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Depoimento ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-[hsl(var(--gold))]" : "w-3 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length)} aria-label="Anterior" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-white/15">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setI((v) => (v + 1) % ITEMS.length)} aria-label="Próximo" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-white/15">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
