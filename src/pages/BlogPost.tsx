import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Bookmark, User } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { POSTS } from "@/data/posts";
import CTASection from "@/components/CTASection";
import { supabase } from "@/integrations/supabase/client";
import Reveal from "@/components/Reveal";

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
        category: dbPost.blog_categories?.name ?? "Insights",
        date: dbPost.published_at ? new Date(dbPost.published_at).toLocaleDateString("pt-BR") : "",
        readTime: "6 min",
        content: dbPost.content ?? "",
        cover: dbPost.cover_image ?? "",
      }
    : fallback
    ? { ...fallback, content: "", cover: "" }
    : null;

  if (!post && loaded) {
    return (
      <Layout tone="midnight">
        <section className="container-x py-32 text-center">
          <h1 className="text-3xl font-black text-white">Conteúdo não encontrado</h1>
          <Link to="/blog" className="btn-gold mt-8 inline-flex">Voltar ao portal</Link>
        </section>
      </Layout>
    );
  }
  if (!post) return <Layout tone="midnight"><div className="container-x py-32" /></Layout>;

  return (
    <Layout tone="midnight">
      <SEOHead
        title={`${post.title} | Credifácil Intelligence`}
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
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden opacity-30">
          <img src={post.cover} className="w-full h-full object-cover blur-2xl" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight" />
        </div>

        <article className="container-x max-w-4xl relative pt-12 pb-24">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-[hsl(var(--gold-soft))] transition-colors">
                <ArrowLeft className="h-4 w-4" /> Editorial & Insights
              </Link>
              <div className="flex gap-4">
                <button className="text-white/40 hover:text-white transition-colors"><Share2 className="h-4 w-4" /></button>
                <button className="text-white/40 hover:text-white transition-colors"><Bookmark className="h-4 w-4" /></button>
              </div>
            </div>

            <span className="pill-gold">{post.category}</span>
            <h1 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl tracking-tighter">{post.title}</h1>
            
            <div className="mt-8 flex items-center gap-6 border-y border-white/10 py-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-[hsl(var(--gold-soft))]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Editorial Team</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Credifácil Financial Group</p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img src={post.cover} alt={post.title} className="w-full aspect-[21/9] object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 space-y-8 text-lg leading-relaxed text-white/80 max-w-3xl mx-auto prose prose-invert prose-gold">
              {post.content ? (
                post.content.split(/\n\n+/).map((para, i) => <p key={i} className="mb-6">{para}</p>)
              ) : (
                <>
                  <p className="text-xl font-medium text-white">{post.excerpt}</p>
                  <p>A inteligência financeira é o pilar central de qualquer trajetória de sucesso. Neste artigo, exploramos como as mudanças recentes no cenário macroeconômico podem impactar diretamente suas decisões de crédito e alocação de ativos.</p>
                  <div className="p-8 rounded-3xl bg-white/5 border-l-4 border-[hsl(var(--gold-soft))] my-12 italic text-white/70">
                    "O crédito bem estruturado não é uma dívida, mas sim uma ferramenta de alavancagem para quem possui visão estratégica de mercado."
                  </div>
                  <p>Nosso time editorial revisa semanalmente as principais tendências para garantir que você tenha acesso a informações de alta qualidade e relevância técnica.</p>
                </>
              )}
            </div>
          </Reveal>
        </article>
      </div>

      <CTASection title="Quer aprofundar essa análise?" subtitle="Agende uma conversa com nosso comitê técnico." cta="Falar com Especialista" />
    </Layout>
  );
};

export default BlogPost;
