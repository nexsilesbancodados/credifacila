import { ArrowRight, Search, Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const posts = [
  {
    id: 1,
    title: "Como planejar suas finanças para 2026",
    excerpt: "Dicas práticas para organizar seu orçamento e começar a investir com segurança no próximo ano.",
    category: "Planejamento",
    author: "Ricardo Mendes",
    date: "12 Mai, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "O que é Antecipação de Recebíveis e como ela ajuda sua empresa",
    excerpt: "Entenda como transformar suas vendas a prazo em dinheiro imediato para o caixa do seu negócio.",
    category: "Empresarial",
    author: "Ana Silveira",
    date: "10 Mai, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Vantagens do Crédito Consignado para servidores públicos",
    excerpt: "Descubra por que o consignado continua sendo uma das melhores opções de crédito do mercado.",
    category: "Crédito",
    author: "Carlos Porto",
    date: "08 Mai, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1573163281538-50bd845ffc3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Investimentos em Renda Fixa: o que esperar dos juros hoje",
    excerpt: "Uma análise completa sobre o cenário atual e onde encontrar as melhores taxas para seu perfil.",
    category: "Investimentos",
    author: "Luiza Ferro",
    date: "05 Mai, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1611974714158-f88c146447c1?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = ["Todos", "Planejamento", "Empresarial", "Crédito", "Investimentos", "Educação"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Conteúdo para sua <br />
                <span className="text-gold-gradient italic">evolução financeira</span>
              </h1>
              <p className="mt-6 text-lg text-foreground/60">
                Notícias, dicas e análises para você tomar as melhores decisões com seu dinheiro e sua empresa.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    i === 0 
                      ? "bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] text-background shadow-lg" 
                      : "bg-white/5 border border-white/10 hover:border-gold/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input 
                type="text" 
                placeholder="Buscar artigos..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:border-gold/50 transition-all"
              />
            </div>
          </div>

          <Reveal delay={200}>
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-16 aspect-[16/9] md:aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured post" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md text-gold-soft text-xs font-bold uppercase mb-4 tracking-wider">
                  Destaque
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-gold-soft transition-colors">
                  O Futuro do Mercado de Capitais no Brasil: Tendências para Investidores
                </h2>
                <p className="text-foreground/70 mb-6 hidden md:block">
                  Confira nossa análise detalhada sobre as mudanças regulatórias e as novas oportunidades que estão surgindo no cenário nacional.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-gold group-hover:gap-3 transition-all">
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Reveal key={post.id} delay={100 * (i + 1)}>
                <article className="group flex flex-col h-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gold-soft border border-gold/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-foreground/40 mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gold-soft transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                        <User className="w-3 h-3 text-gold-soft" /> {post.author}
                      </span>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full bg-gold text-background font-bold">1</button>
            <button className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 transition-all">2</button>
            <button className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 transition-all">3</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
