import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { POSTS } from "@/data/posts";
import CTASection from "@/components/CTASection";
import { supabase } from "@/integrations/supabase/client";

type DbPost = {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  published_at: string | null;
  blog_categories?: { name?: string } | null;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const fallback = POSTS.find((p) => p.slug === slug);
  const [dbPost, setDbPost] = useState<DbPost | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("blog_posts")
      .select("title,slug,excerpt,content,cover_image,published_at,blog_categories(name)")
      .eq("slug", slug)
      .lte("published_at", new Date().toISOString())
      .maybeSingle()
      .then(({ data }) => { setDbPost(data as DbPost | null); setLoaded(true); });
  }, [slug]);

  const post = dbPost
    ? {
        slug: dbPost.slug,
        title: dbPost.title,
        excerpt: dbPost.excerpt ?? "",
        category: dbPost.blog_categories?.name ?? "Conteúdo",
        date: dbPost.published_at ? new Date(dbPost.published_at).toLocaleDateString("pt-BR") : "",
        readTime: "5 min",
        content: dbPost.content ?? "",
        cover: dbPost.cover_image ?? "",
      }
    : fallback
    ? { ...fallback, content: "", cover: "" }
    : null;

  if (!post && loaded) {
    return (
      <Layout>
        <section className="container-x py-32 text-center">
          <h1 className="text-3xl font-extrabold">Conteúdo não encontrado</h1>
          <Link to="/blog" className="btn-primary mt-6 inline-flex">Voltar ao blog</Link>
        </section>
      </Layout>
    );
  }
  if (!post) return <Layout><div className="container-x py-32" /></Layout>;

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | Blog Credifácil`}
        description={post.excerpt}
        image={post.cover || undefined}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.cover || undefined,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Credifácil" },
        }}
      />
      <article className="container-x max-w-3xl py-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--royal))]">
          <ArrowLeft className="h-4 w-4" /> Voltar para o blog
        </Link>
        <span className="pill mt-6">{post.category}</span>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
        </div>
        {post.cover && (
          <img src={post.cover} alt={post.title} loading="lazy" className="mt-8 w-full rounded-2xl object-cover aspect-[16/9]" />
        )}
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.content ? (
            post.content.split(/\n\n+/).map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <>
              <p>{post.excerpt}</p>
              <p>Neste conteúdo trazemos uma visão prática sobre o tema, ajudando você a tomar decisões financeiras com mais clareza, segurança e propósito.</p>
              <p>A Credifácil acredita que educação financeira é o primeiro passo para construir uma trajetória sólida.</p>
            </>
          )}
        </div>
      </article>
      <CTASection title="Quer aplicar isso na prática?" cta="Fale com um especialista" />
    </Layout>
  );
};

export default BlogPost;