import { useMemo, useState } from "react";
import { useSeo } from "@/hooks/useSeo";
import TopNav from "@/components/header/TopNav";
import ContactFooter from "@/components/ContactFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag, Search } from "lucide-react";
import { Link } from "react-router-dom";

const MOCK_POSTS = [
  {
    id: 1,
    title: "Como se organizar financeiramente para 2026",
    excerpt: "Dicas práticas para manter o orçamento em dia e planejar seus investimentos com segurança.",
    category: "Educação Financeira",
    author: "Equipe Credifácil",
    date: "15 Mai, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    slug: "organizacao-financeira-2026"
  },
  {
    id: 2,
    title: "Vantagens do crédito consignado para servidores",
    excerpt: "Entenda por que essa modalidade oferece as menores taxas do mercado e como aproveitar.",
    category: "Crédito",
    author: "Consultoria Financeira",
    date: "10 Mai, 2026",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
    slug: "vantagens-consignado-servidores"
  },
  {
    id: 3,
    title: "O que é uma securitizadora e como ela ajuda sua empresa",
    excerpt: "Descubra como a antecipação de recebíveis pode injetar fôlego no seu capital de giro.",
    category: "Negócios",
    author: "Especialista B2B",
    date: "05 Mai, 2026",
    image: "https://images.unsplash.com/photo-1454165833767-027ffb5782da?auto=format&fit=crop&q=80&w=800",
    slug: "o-que-e-securitizadora"
  }
];

const Blog = () => {
  useSeo({ 
    title: "Blog Credifácil | Educação Financeira e Notícias do Mercado",
    description: "Fique por dentro das melhores dicas de educação financeira, crédito e investimentos com o blog da Credifácil."
  });

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(MOCK_POSTS.map(p => p.category)))], []);
  const [activeCat, setActiveCat] = useState("Todos");
  const [query, setQuery] = useState("");

  const [featured, ...rest] = MOCK_POSTS;
  const filtered = rest.filter(p =>
    (activeCat === "Todos" || p.category === activeCat) &&
    (query === "" || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[hsl(0_0%_4%)]">
      <TopNav />
      
       <main className="mx-auto max-w-7xl px-4 py-12 pt-[112px] sm:px-5 sm:py-20 sm:pt-[132px] lg:px-10">
        <header className="mb-10 text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
            Conhecimento e Estratégia
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Blog <span className="text-brand-gold">Credifácil</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Notícias, dicas e análises para você tomar as melhores decisões com o seu dinheiro.
          </p>
        </header>

        {/* Featured */}
        <Link to={`/blog/${featured.slug}`} className="group mb-12 block">
          <Card className="grid overflow-hidden border-white/10 bg-white/[0.02] transition-all hover:border-brand-gold/40 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden lg:aspect-auto">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(0_0%_4%)]">
                Em destaque
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                <Tag className="h-3 w-3" /> {featured.category}
              </span>
              <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-brand-gold md:text-3xl">{featured.title}</h2>
              <p className="mt-4 text-white/60">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold">
                Ler artigo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Card>
        </Link>

        {/* Filtros */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCat === c
                    ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                    : "border-white/10 text-white/50 hover:border-brand-gold/40 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artigos…"
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:border-brand-gold/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 && (
            <p className="col-span-full py-16 text-center text-white/40">Nenhum artigo encontrado.</p>
          )}
          {filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group flex h-full">
              <Card className="flex flex-col overflow-hidden border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-brand-gold/40 hover:bg-white/[0.05]">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="flex items-center gap-1.5 rounded-full bg-[hsl(0_0%_4%/0.8)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold backdrop-blur-md">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-brand-gold">
                    {post.title}
                  </h2>
                  
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-white/60">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold opacity-80 transition-all group-hover:gap-3 group-hover:opacity-100">
                    Ler mais
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <section className="mt-24 rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/5 to-transparent p-10 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">Fique por dentro de tudo</h3>
          <p className="mb-8 text-white/60">Assine nossa newsletter e receba as novidades direto no seu e-mail.</p>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white placeholder:text-white/30 focus:border-brand-gold/50 focus:outline-none"
            />
            <Button className="rounded-full bg-brand-gold text-[hsl(0_0%_4%)] hover:bg-brand-gold/90">
              Assinar agora
            </Button>
          </div>
        </section>
      </main>

      <ContactFooter />
    </div>
  );
};

export default Blog;