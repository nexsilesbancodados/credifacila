import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHeader from "@/components/PageHeader";
import BlogCard, { type Post } from "@/components/sections/BlogCard";
import { POSTS, CATEGORIES } from "@/data/posts";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

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
    <Layout tone="steel">
      <SEOHead
        title="Blog Credifácil | Educação financeira e crédito inteligente"
        description="Conteúdos práticos sobre crédito, investimentos e gestão financeira para você e sua empresa. Atualizado semanalmente."
      />
      <PageHeader
        eyebrow="Blog Credifácil"
        title={<>Conteúdos para <span className="text-gold-gradient">cuidar melhor do seu dinheiro</span></>}
        subtitle="Dicas, novidades e informações sobre crédito, investimentos e soluções financeiras."
        className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
      />

      <section className="container-x py-16">
        <div className="mb-6 relative max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar conteúdos..."
            className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md focus:border-[hsl(var(--gold))] focus:ring-2 focus:ring-[hsl(var(--gold))/0.25]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
                cat === c
                  ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]"
                  : "border-white/20 bg-white/5 text-white/80 backdrop-blur-md hover:border-[hsl(var(--gold))/0.6] hover:text-white"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => <BlogCard key={p.slug} post={p} idx={i} />)}
          {filtered.length === 0 && (
            <p className="col-span-full rounded-2xl border border-white/15 bg-white/5 p-8 text-center text-white/70">
              Nenhum conteúdo encontrado para sua busca.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;