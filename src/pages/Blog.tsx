import { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, BookOpen, TrendingUp, Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const featuredPost = {
  title: "O Futuro do Mercado de Capitais no Brasil",
  subtitle: "Tendências, regulações e oportunidades para investidores em 2026",
  category: "Análise",
  author: "Equipe Credifácil",
  date: "13 Mai, 2026",
  readTime: "8 min",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
};

const posts = [
  {
    id: 1,
    number: "01",
    title: "Como planejar suas finanças para 2026",
    excerpt: "Dicas práticas para organizar seu orçamento e começar a investir com segurança no próximo ano.",
    category: "Planejamento",
    author: "Ricardo Mendes",
    date: "12 Mai, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900",
    size: "lg",
  },
  {
    id: 2,
    number: "02",
    title: "Antecipação de Recebíveis: o motor do seu fluxo de caixa",
    excerpt: "Transforme vendas a prazo em capital imediato sem comprometer a saúde financeira.",
    category: "Empresarial",
    author: "Ana Silveira",
    date: "10 Mai, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
    size: "sm",
  },
  {
    id: 3,
    number: "03",
    title: "Consignado: o crédito mais inteligente do mercado",
    excerpt: "Por que servidores e aposentados continuam preferindo essa modalidade.",
    category: "Crédito",
    author: "Carlos Porto",
    date: "08 Mai, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1573163281538-50bd845ffc3e?auto=format&fit=crop&q=80&w=900",
    size: "sm",
  },
  {
    id: 4,
    number: "04",
    title: "Renda Fixa em alta: onde estão as melhores taxas",
    excerpt: "Análise completa do cenário de juros e oportunidades para diferentes perfis de investidor.",
    category: "Investimentos",
    author: "Luiza Ferro",
    date: "05 Mai, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1611974714158-f88c146447c1?auto=format&fit=crop&q=80&w=900",
    size: "lg",
  },
  {
    id: 5,
    number: "05",
    title: "PIX em lote: produtividade na gestão financeira",
    excerpt: "Como conta digital empresarial pode automatizar pagamentos e economizar horas.",
    category: "Empresarial",
    author: "Marina Costa",
    date: "02 Mai, 2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=900",
    size: "sm",
  },
  {
    id: 6,
    number: "06",
    title: "Educação financeira para a próxima geração",
    excerpt: "Como ensinar filhos a lidar com dinheiro desde cedo e construir patrimônio familiar.",
    category: "Educação",
    author: "Pedro Lima",
    date: "28 Abr, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=900",
    size: "sm",
  },
];

const categories = [
  { label: "Todos", count: 42 },
  { label: "Investimentos", count: 12 },
  { label: "Empresarial", count: 9 },
  { label: "Crédito", count: 8 },
  { label: "Planejamento", count: 7 },
  { label: "Educação", count: 6 },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div className="min-h-screen bg-[#050a18] text-white overflow-x-hidden">
      <style>{`
        @keyframes blogFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blogShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes blogMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .blog-fade-up { animation: blogFadeUp 0.8s ease-out forwards; }
        .blog-shimmer {
          background: linear-gradient(90deg, transparent, rgba(240,215,140,0.2), transparent);
          background-size: 200% 100%;
          animation: blogShimmer 3s ease-in-out infinite;
        }
        .blog-marquee { animation: blogMarquee 35s linear infinite; }
        .blog-grain {
          background-image: radial-gradient(rgba(240,215,140,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .blog-card-img { transition: transform 1.2s cubic-bezier(.2,.8,.2,1); }
        .blog-card:hover .blog-card-img { transform: scale(1.08); }
      `}</style>

      <Navbar />

      {/* ----------------------------------------------------------- */}
      {/*  EDITORIAL HEADER                                           */}
      {/* ----------------------------------------------------------- */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 blog-grain opacity-50" />
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#b8893f]/10 blur-3xl" />
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#f0d78c]/5 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b8893f]/40" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#f0d78c]/80 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> Edição #28 · Maio 2026
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b8893f]/40" />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <Reveal delay={150}>
              <div className="lg:col-span-8">
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
                  <span className="block text-white">Diário</span>
                  <span className="block bg-gradient-to-br from-[#f0d78c] via-[#d4a84a] to-[#8b6f3a] bg-clip-text text-transparent italic">
                    Financeiro
                  </span>
                </h1>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="lg:col-span-4">
                <p className="text-base md:text-lg text-white/70 leading-relaxed border-l-2 border-[#f0d78c]/40 pl-6">
                  Análises, ensaios e curadoria sobre crédito, investimentos e o futuro do dinheiro — escritos pela nossa mesa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/*  CATEGORY BAR + SEARCH                                      */}
      {/* ----------------------------------------------------------- */}
      <section className="relative py-8 border-y border-white/5 bg-[#070e20]/40 backdrop-blur-sm sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
              {categories.map((cat) => {
                const active = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`shrink-0 group flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-[#b8893f] to-[#f0d78c] text-[#050a18] border-transparent shadow-[0_8px_30px_-10px_rgba(240,215,140,0.5)]"
                        : "bg-white/[0.02] border-white/10 text-white/70 hover:border-[#b8893f]/40 hover:text-[#f0d78c]"
                    }`}
                  >
                    {cat.label}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active ? "bg-[#050a18]/20" : "bg-white/5"}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f0d78c]/60" />
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#f0d78c]/50 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/*  FEATURED — magazine style asymmetric                        */}
      {/* ----------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <Reveal>
            <article className="group grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative">
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-[#b8893f]/20 shadow-[0_30px_80px_-30px_rgba(184,137,63,0.4)]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover blog-card-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a18]/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#050a18]/70 backdrop-blur-md border border-[#f0d78c]/30 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0d78c]">
                      <Sparkles className="w-3 h-3 inline mr-1" /> Destaque da semana
                    </span>
                  </div>
                </div>
                {/* serial number floating */}
                <div className="absolute -top-6 -left-2 lg:-left-6 font-serif text-[120px] lg:text-[180px] leading-none text-[#f0d78c]/10 select-none pointer-events-none">
                  00
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70 mb-4">
                  {featuredPost.category} · Leitura de {featuredPost.readTime}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white">
                  {featuredPost.title}
                </h2>
                <p className="mt-6 text-lg text-white/65 leading-relaxed">
                  {featuredPost.subtitle}
                </p>
                <div className="mt-8 flex items-center gap-4 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b8893f] to-[#f0d78c] text-[#050a18] flex items-center justify-center font-bold text-xs">
                      EC
                    </div>
                    {featuredPost.author}
                  </div>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{featuredPost.date}</span>
                </div>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#b8893f] to-[#f0d78c] text-[#050a18] font-medium hover:shadow-[0_10px_40px_-10px_rgba(240,215,140,0.6)] transition-all group/btn"
                >
                  Ler ensaio completo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/*  TOPIC TICKER                                                */}
      {/* ----------------------------------------------------------- */}
      <section className="relative py-8 border-y border-[#b8893f]/10 bg-[#070e20] overflow-hidden">
        <div className="flex blog-marquee whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0">
              {["Renda Fixa", "Selic", "Antecipação", "PIX", "Tesouro Direto", "Consignado", "Fundos Imobiliários", "Educação Financeira", "ESG", "Inflação"].map(
                (label, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-3 px-8 text-white/30 font-serif text-2xl">
                    #{label}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f0d78c]/40" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/*  EDITORIAL GRID — varied sizes                               */}
      {/* ----------------------------------------------------------- */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <Reveal>
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70">Mais recentes</span>
                <h2 className="mt-3 font-serif text-3xl md:text-5xl">
                  Edição <span className="italic text-[#f0d78c]">corrente</span>
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <a href="#" className="hidden md:inline-flex items-center gap-2 text-[#f0d78c] hover:text-white transition-colors text-sm">
                Ver arquivo completo <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6">
            {posts.map((post, i) => {
              const isLarge = post.size === "lg";
              return (
                <Reveal key={post.id} delay={i * 80} className={isLarge ? "lg:col-span-3" : "lg:col-span-2"}>
                  <article className="blog-card group h-full flex flex-col bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl border border-white/5 overflow-hidden hover:border-[#b8893f]/40 transition-all duration-500">
                    <div className={`relative overflow-hidden ${isLarge ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover blog-card-img"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a18]/80 via-[#050a18]/10 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#050a18]/70 backdrop-blur-md border border-[#f0d78c]/20 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f0d78c]">
                          {post.category}
                        </span>
                      </div>
                      <span className="absolute top-4 right-4 font-serif text-3xl text-white/30 group-hover:text-[#f0d78c]/80 transition-colors">
                        {post.number}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-[11px] text-white/40 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className={`font-serif font-medium leading-tight text-white group-hover:text-[#f0d78c] transition-colors ${isLarge ? "text-2xl md:text-3xl" : "text-xl"}`}>
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-2">{post.excerpt}</p>
                      <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/5">
                        <span className="text-xs text-white/60">por {post.author}</span>
                        <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#b8893f] group-hover:to-[#f0d78c] group-hover:border-transparent group-hover:text-[#050a18] transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/*  TRENDING SIDEBAR + NEWSLETTER                              */}
      {/* ----------------------------------------------------------- */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-[#070e20] to-transparent">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10">
          {/* Trending */}
          <Reveal className="lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-4 h-4 text-[#f0d78c]" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/80">Mais lidos do mês</span>
              </div>
              <ul className="space-y-1">
                {posts.slice(0, 5).map((p, i) => (
                  <li key={p.id}>
                    <a
                      href="#"
                      className="group flex items-center gap-6 py-5 border-b border-white/5 hover:border-[#f0d78c]/30 transition-colors"
                    >
                      <span className="font-serif text-3xl text-[#f0d78c]/40 group-hover:text-[#f0d78c] transition-colors w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="font-serif text-lg text-white group-hover:text-[#f0d78c] transition-colors leading-snug">
                          {p.title}
                        </p>
                        <p className="text-xs text-white/40 mt-1">
                          {p.category} · {p.readTime}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#f0d78c] group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={200} className="lg:col-span-7">
            <div className="relative h-full rounded-[2rem] border border-[#b8893f]/30 bg-gradient-to-br from-[#0a1428] via-[#081229] to-[#050a18] p-10 md:p-14 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#f0d78c]/10 blur-3xl" />
              <div className="absolute inset-x-0 -bottom-px h-px blog-shimmer" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f0d78c]/30 text-[#f0d78c] text-[11px] uppercase tracking-[0.25em] mb-6">
                  <Mail className="w-3 h-3" /> Newsletter semanal
                </div>
                <h3 className="font-serif text-4xl md:text-5xl leading-tight">
                  Receba o <span className="italic text-[#f0d78c]">Diário</span> <br />
                  todo domingo no seu e-mail.
                </h3>
                <p className="mt-5 text-white/65 max-w-md leading-relaxed">
                  Curadoria exclusiva da nossa mesa — análises, ensaios e oportunidades, sem ruído.
                </p>

                <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-5 py-3.5 placeholder:text-white/30 focus:outline-none focus:border-[#f0d78c]/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#b8893f] to-[#f0d78c] text-[#050a18] font-medium hover:shadow-[0_10px_40px_-10px_rgba(240,215,140,0.6)] transition-all whitespace-nowrap"
                  >
                    Assinar
                  </button>
                </form>

                <p className="mt-4 text-xs text-white/40">Sem spam. Cancele quando quiser.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
