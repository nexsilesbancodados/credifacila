import { useEffect, useState, memo } from "react";
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
    const t = setInterval(() => setI((v) => (v + 1) % ITEMS.length), 10000);
    return () => clearInterval(t);
  }, []);

  const item = ITEMS[i];

  return (
    <section 
      className="relative mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16"
      aria-roledescription="carousel"
      aria-label="Depoimentos de clientes"
    >
      <Quote className="absolute -top-6 left-12 h-12 w-12 rounded-2xl bg-[hsl(var(--gold-soft))] p-3 text-navy-deep shadow-2xl" aria-hidden="true" />
      
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-[200px] flex flex-col justify-center"
            role="group"
            aria-roledescription="slide"
            aria-label={`Depoimento ${i + 1} de ${ITEMS.length}`}
          >
            <div className="mb-6 flex gap-1" aria-label={`Avaliação: ${item.rating} de 5 estrelas`}>
              {Array.from({ length: item.rating }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-[hsl(var(--gold-soft))] text-[hsl(var(--gold-soft))]" aria-hidden="true" />
              ))}
            </div>
            <p className="text-xl leading-relaxed text-white md:text-3xl font-medium tracking-tight">"{item.text}"</p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-[hsl(var(--gold-soft))] font-black" aria-hidden="true">
                {item.name[0]}
              </div>
              <div>
                <p className="text-lg font-black text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">{item.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <div className="flex gap-3" role="tablist" aria-label="Selecionar depoimento">
          {ITEMS.map((_, k) => (
            <button
              key={k}
              role="tab"
              aria-selected={k === i}
              aria-label={`Ir para depoimento ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))] ${k === i ? "w-10 bg-[hsl(var(--gold-soft))]" : "w-3 bg-white/10 hover:bg-white/20"}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button 
            aria-label="Depoimento anterior"
            onClick={() => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length)} 
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-[hsl(var(--gold-soft))] hover:text-navy-deep hover:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button 
            aria-label="Próximo depoimento"
            onClick={() => setI((v) => (v + 1) % ITEMS.length)} 
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-[hsl(var(--gold-soft))] hover:text-navy-deep hover:border-transparent outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
