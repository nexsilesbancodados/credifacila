import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, PlusCircle, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Post = { id: string; title: string; slug: string; published_at: string | null; updated_at: string };

const AdminBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("blog_posts").select("id,title,slug,published_at,updated_at").order("updated_at", { ascending: false });
    if (error) toast.error(error.message);
    else setPosts((data as Post[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const remove = async (id: string) => {
    if (!confirm("Excluir este post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Post excluído"); load(); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Blog</h1>
          <p className="text-muted-foreground">Gerencie os conteúdos publicados no site.</p>
        </div>
        <Link to="/admin/blog/new" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90">
          <PlusCircle className="h-4 w-4" /> Novo post
        </Link>
      </div>

      <div className="rounded-2xl border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Título</th>
              <th className="px-4 py-3 font-semibold">Slug</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Atualizado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">Carregando…</td></tr>}
            {!loading && posts.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">Nenhum post ainda. Crie o primeiro!</td></tr>}
            {posts.map((p) => {
              const published = p.published_at && new Date(p.published_at) <= new Date();
              return (
                <tr key={p.id} className="border-t">
                  <td className="px-4 py-3 font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">/{p.slug}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${published ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {published ? "Publicado" : "Rascunho"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{new Date(p.updated_at).toLocaleDateString("pt-BR")}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-2">
                      {published && <a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-muted" aria-label="Ver"><ExternalLink className="h-4 w-4" /></a>}
                      <Link to={`/admin/blog/${p.id}`} className="rounded-md p-2 hover:bg-muted" aria-label="Editar"><Pencil className="h-4 w-4" /></Link>
                      <button onClick={() => remove(p.id)} className="rounded-md p-2 hover:bg-destructive/10 text-destructive" aria-label="Excluir"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlog;