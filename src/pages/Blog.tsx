import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/sections/BlogCard";
import { POSTS, CATEGORIES } from "@/data/posts";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [cat, setCat] = useState<string>("Todos");
  const filtered = useMemo(
    () => (cat === "Todos" ? POSTS : POSTS.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <Layout tone="steel">
      <PageHeader
        eyebrow="Blog Credifácil"
        title={<>Conteúdos para <span className="text-gold-gradient">cuidar melhor do seu dinheiro</span></>}
        subtitle="Dicas, novidades e informações sobre crédito, investimentos e soluções financeiras."
        className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
      />

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
                cat === c
                  ? "border-[hsl(var(--royal))] bg-[hsl(var(--royal))] text-white"
                  : "border-border bg-white text-foreground hover:border-[hsl(var(--royal))/0.6]"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => <BlogCard key={p.slug} post={p} idx={i} />)}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;