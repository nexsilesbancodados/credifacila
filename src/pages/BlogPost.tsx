import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import TopNav from "@/components/header/TopNav";
import ContactFooter from "@/components/ContactFooter";
import { whatsappLink } from "@/config/site";

const POSTS: Record<string, { title: string; category: string; date: string; author: string; image: string; lead: string; body: string[] }> = {
  "organizacao-financeira-2026": {
    title: "Como se organizar financeiramente para 2026",
    category: "Educação Financeira",
    date: "15 Mai, 2026",
    author: "Equipe Credifácil",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
    lead: "Planejar o ano financeiro é o passo mais importante para conquistar estabilidade e realizar projetos sem sustos.",
    body: [
      "Comece mapeando todas as suas receitas fixas e variáveis. Conhecer o quanto entra é tão importante quanto saber para onde o dinheiro vai.",
      "Em seguida, classifique suas despesas em essenciais, importantes e supérfluas. Esse exercício revela onde estão as oportunidades reais de economia.",
      "Defina metas trimestrais — não apenas anuais. Metas mais curtas geram engajamento e permitem ajustes ao longo do caminho.",
      "Por fim, mantenha uma reserva de emergência equivalente a 3–6 meses do seu custo de vida, em aplicação líquida e segura.",
    ],
  },
  "vantagens-consignado-servidores": {
    title: "Vantagens do crédito consignado para servidores",
    category: "Crédito",
    date: "10 Mai, 2026",
    author: "Consultoria Financeira",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1600",
    lead: "O consignado segue como a modalidade mais barata do mercado — e os servidores públicos têm condições ainda mais especiais.",
    body: [
      "Por contar com desconto direto em folha, o risco para a instituição é menor, o que se traduz em juros bem mais baixos para o tomador.",
      "Servidores estáveis têm acesso às melhores taxas e prazos longos, com possibilidade de portabilidade e refinanciamento sempre que o mercado oferecer condições melhores.",
      "É essencial respeitar a margem consignável e contratar apenas o necessário, evitando comprometer demais a renda mensal.",
    ],
  },
  "o-que-e-securitizadora": {
    title: "O que é uma securitizadora e como ela ajuda sua empresa",
    category: "Negócios",
    date: "05 Mai, 2026",
    author: "Especialista B2B",
    image: "https://images.unsplash.com/photo-1454165833767-027ffb5782da?auto=format&fit=crop&q=80&w=1600",
    lead: "Securitizadoras transformam recebíveis em capital de giro disponível hoje — sem precisar contrair dívida.",
    body: [
      "Diferente de um empréstimo, a antecipação não compõe o endividamento da empresa: trata-se da venda de um direito de receber.",
      "Essa estrutura libera caixa imediato para investir em estoque, marketing, contratações e expansão, sem comprometer o balanço.",
      "Na Credifácil Securitizadora, a operação é 100% digital, com análise em até 4h úteis e liberação em 24h.",
    ],
  },
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = POSTS[slug];

  useSeo({
    title: post ? `${post.title} | Blog Credifácil` : `Artigo | Blog Credifácil`,
    description: post?.lead,
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-[hsl(0_0%_4%)]">
        <TopNav />
        <main className="mx-auto max-w-3xl px-5 py-32 pt-[140px] text-center text-white">
          <h1 className="font-display text-3xl font-extrabold">Artigo não encontrado</h1>
          <p className="mt-3 text-white/60">Volte ao blog para ver os conteúdos disponíveis.</p>
          <Link to="/blog" className="btn-gold mt-8 inline-flex">
            <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
          </Link>
        </main>
        <ContactFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(0_0%_4%)] text-white">
      <TopNav />
      <article className="mx-auto max-w-3xl px-5 py-12 pt-[120px] md:pt-[140px]">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao Blog
        </Link>
        <span className="mt-6 inline-block rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
          {post.category}
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-white/40">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
        </div>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <p className="mt-10 text-lg leading-relaxed text-white/85 md:text-xl">{post.lead}</p>
        <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-white/70">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <a href={whatsappLink(`Olá! Li o artigo "${post.title}" e quero saber mais.`)} className="btn-gold">
            <MessageCircle className="h-4 w-4" /> Falar com especialista
          </a>
          <button
            onClick={() => navigator.share?.({ title: post.title, url: window.location.href }).catch(() => navigator.clipboard.writeText(window.location.href))}
            className="btn-ghost-light"
          >
            <Share2 className="h-4 w-4" /> Compartilhar
          </button>
        </div>
      </article>
      <ContactFooter />
    </div>
  );
};

export default BlogPost;