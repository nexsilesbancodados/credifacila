import { memo } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover?: string;
};

const BlogCard = ({ post }: { post: Post; idx?: number }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col h-full rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-[hsl(var(--gold-soft))/0.3] hover:bg-white/[0.08] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))]"
    aria-label={`Ler artigo: ${post.title}`}
  >
    {post.cover ? (
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-xl bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
          {post.category}
        </span>
      </div>
    ) : (
      <div className="p-8 pb-0">
        <span className="inline-flex rounded-xl bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[hsl(var(--gold-soft))] border border-white/10">
          {post.category}
        </span>
      </div>
    )}
    <div className="flex flex-col flex-1 p-8">
      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">
        <span>{post.date}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden="true" /> {post.readTime}</span>
      </div>
      <h3 className="text-xl font-black leading-tight text-white group-hover:text-[hsl(var(--gold-soft))] transition-colors">
        {post.title}
      </h3>
      <p className="mt-4 line-clamp-2 text-sm text-white/80 leading-relaxed font-medium">
        {post.excerpt}
      </p>
      <div className="mt-auto pt-8 flex items-center justify-end">
        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-[hsl(var(--gold-soft))] group-hover:bg-[hsl(var(--gold-soft))] group-hover:text-navy-deep transition-all transform group-hover:translate-x-1">
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  </Link>
);

export default memo(BlogCard);
