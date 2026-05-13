import { useEffect, useMemo, useState } from "react";
import { Search, Filter, Newspaper, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHeader from "@/components/PageHeader";
import BlogCard, { type Post } from "@/components/sections/BlogCard";
import { POSTS, CATEGORIES } from "@/data/posts";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

const Blog = () => {
  const [cat, setCat] = useState<string>("Todos");
  const [q, setQ] = useState("");
  const [posts, setPosts] = useState<Post[]>(POSTS);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("slug,title,excerpt,published_at,blog_categories(name)")
        .lte("published_at", new Date().toISOString())
        .order("published_at", { ascending: false });
      if (data && data.length > 0) {
        setPosts(
          data.map((p) => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt ?? "",
            category: (p as { blog_categories?: { name?: string } }).blog_categories?.name ?? "Conteúdo",
            date: p.published_at ? new Date(p.published_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }) : "",
            readTime: "5 min",
          })),
        );
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = cat === "Todos" || p.category === cat;
      const matchQ = !term || p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term);
      return matchCat && matchQ;
    });
  }, [cat, q, posts]);

  return (
    <Layout tone="midnight">
      <SEOHead
        title="Editorial & Insights Financeiros | Credifácil Intelligence"
        description="O portal de inteligência da Credifácil. Análises de mercado, tendências de crédito e educação financeira de alto nível."
      />
      <PageHeader
        eyebrow="Editorial & Insights"
        title={<>Inteligência para sua <span className="text-gold-gradient">evolução financeira</span></>}
        subtitle="Análises técnicas e conteúdos exclusivos produzidos pelo nosso comitê de economia e especialistas em crédito."
        className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
      />

      <section className="container-x py-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 border-b border-white/10 pb-12">
            <div className="relative max-w-md w-full">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Pesquisar análises e insights..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[hsl(var(--gold-soft))/0.5] focus:ring-4 focus:ring-[hsl(var(--gold-soft))/0.1] transition-all"
              />
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
              <Filter className="h-4 w-4 text-white/40 shrink-0" />
              <div className="flex gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={cn(
                      "whitespace-nowrap rounded-full border px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                      cat === c
                        ? "border-[hsl(var(--gold-soft))] bg-[hsl(var(--gold-soft))] text-navy-deep shadow-lg"
                        : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <BlogCard post={p} idx={i} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <Reveal>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-20 text-center">
              <Search className="h-12 w-12 text-white/20 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-white">Nenhum insight encontrado</h3>
              <p className="mt-4 text-white/40">Tente ajustar seus termos de busca ou filtros de categoria.</p>
              <button onClick={() => {setQ(""); setCat("Todos");}} className="mt-8 text-sm font-bold text-[hsl(var(--gold-soft))] underline uppercase tracking-widest">Limpar todos os filtros</button>
            </div>
          </Reveal>
        )}
      </section>

      <section className="container-x py-24 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Newspaper, title: "Curadoria Mensal", desc: "Os temas mais relevantes selecionados por nossos gestores." },
            { icon: TrendingUp, title: "Market Review", desc: "Análises semanais do cenário macro e juros." },
            { icon: ShieldCheck, title: "Segurança Jurídica", text: "Updates sobre regulação do Banco Central e CVM." },
            { icon: Zap, title: "Quick Reads", desc: "Resumos executivos para decisões rápidas." },
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <item.icon className="h-6 w-6 text-[hsl(var(--gold-soft))] mb-4 mx-auto md:mx-0" />
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2">{item.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc || item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
