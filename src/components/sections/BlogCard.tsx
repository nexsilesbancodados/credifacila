import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const tones = [
  "from-[hsl(var(--royal))] via-[hsl(var(--sky))] to-[hsl(var(--gold))]",
  "from-[hsl(var(--navy-deep))] via-[hsl(var(--royal))] to-[hsl(var(--sky))]",
  "from-[hsl(var(--gold))] via-[hsl(var(--gold-soft))] to-[hsl(var(--royal))]",
  "from-[hsl(var(--sky))] via-[hsl(var(--royal))] to-[hsl(var(--navy))]",
];

const BlogCard = ({ post, idx = 0 }: { post: Post; idx?: number }) => (
  <Link to={`/blog/${post.slug}`} className="card-soft group block overflow-hidden p-0">
    <div className={`relative aspect-[16/9] bg-gradient-to-br ${tones[idx % tones.length]}`}>
      <div className="absolute inset-0 grid place-items-center">
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span>{post.date}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
      </div>
      <h3 className="mt-3 text-lg font-extrabold leading-snug">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[hsl(var(--royal))] transition-all group-hover:gap-3">
        Ler mais <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </Link>
);

export default BlogCard;