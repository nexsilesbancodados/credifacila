import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { POSTS } from "@/data/posts";
import CTASection from "@/components/CTASection";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <section className="container-x py-32 text-center">
          <h1 className="text-3xl font-extrabold">Conteúdo não encontrado</h1>
          <Link to="/blog" className="btn-primary mt-6 inline-flex">Voltar ao blog</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
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
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          <p>{post.excerpt}</p>
          <p>
            Neste conteúdo trazemos uma visão prática sobre o tema, ajudando você a tomar decisões financeiras com mais clareza, segurança e propósito. O objetivo é apresentar conceitos simples, exemplos do dia a dia e caminhos possíveis para colocar em prática.
          </p>
          <p>
            A Credifácil acredita que educação financeira é o primeiro passo para construir uma trajetória sólida — seja na vida pessoal ou no crescimento de um negócio.
          </p>
          <p>Boa leitura!</p>
        </div>
      </article>
      <CTASection title="Quer aplicar isso na prática?" cta="Fale com um especialista" />
    </Layout>
  );
};

export default BlogPost;