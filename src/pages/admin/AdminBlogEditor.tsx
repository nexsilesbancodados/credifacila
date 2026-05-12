import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Category = { id: string; name: string };

const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="mb-1.5 block text-sm font-semibold">{label}</span>
    {children}
  </label>
);

const inputCls = "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary";

const AdminBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [cats, setCats] = useState<Category[]>([]);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    category_id: "",
    published_at: "",
  });

  useEffect(() => {
    supabase.from("blog_categories").select("id,name").order("name").then(({ data }) => setCats((data as Category[]) ?? []));
    if (!isNew) {
      supabase.from("blog_posts").select("*").eq("id", id!).maybeSingle().then(({ data, error }) => {
        if (error || !data) { alert("Post não encontrado"); navigate("/admin/blog"); return; }
        setForm({
          title: data.title ?? "",
          slug: data.slug ?? "",
          excerpt: data.excerpt ?? "",
          content: data.content ?? "",
          cover_image: data.cover_image ?? "",
          category_id: data.category_id ?? "",
          published_at: data.published_at ? new Date(data.published_at).toISOString().slice(0, 16) : "",
        });
        setLoading(false);
      });
    }
  }, [id, isNew, navigate]);

  const upload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("blog").upload(path, file, { upsert: false });
    if (error) { alert(error.message); setUploading(false); return; }
    const { data } = supabase.storage.from("blog").getPublicUrl(path);
    setForm((f) => ({ ...f, cover_image: data.publicUrl }));
    setUploading(false);
  };

  const save = async () => {
    if (!form.title.trim()) { alert("Informe o título"); return; }
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim() || slugify(form.title),
      excerpt: form.excerpt || null,
      content: form.content || null,
      cover_image: form.cover_image || null,
      category_id: form.category_id || null,
      published_at: form.published_at ? new Date(form.published_at).toISOString() : null,
    };
    const { error } = isNew
      ? await supabase.from("blog_posts").insert(payload)
      : await supabase.from("blog_posts").update(payload).eq("id", id!);
    setSaving(false);
    if (error) { alert(error.message); return; }
    navigate("/admin/blog");
  };

  if (loading) return <div className="text-muted-foreground">Carregando…</div>;

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/admin/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90 disabled:opacity-60">
          <Save className="h-4 w-4" /> {saving ? "Salvando…" : "Salvar"}
        </button>
      </div>

      <h1 className="text-3xl font-extrabold">{isNew ? "Novo post" : "Editar post"}</h1>

      <div className="space-y-4 rounded-2xl border bg-background p-6">
        <Field label="Título">
          <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })} />
        </Field>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Slug (URL)">
            <input className={inputCls} value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} placeholder="meu-post" />
          </Field>
          <Field label="Categoria">
            <select className={inputCls} value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })}>
              <option value="">— Sem categoria —</option>
              {cats.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Resumo">
          <textarea rows={2} className={inputCls} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </Field>
        <Field label="Conteúdo (Markdown suportado)">
          <textarea rows={14} className={`${inputCls} font-mono`} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        </Field>
        <Field label="Imagem de capa">
          <div className="flex items-center gap-3">
            <input className={inputCls} value={form.cover_image} onChange={(e) => setForm({ ...form, cover_image: e.target.value })} placeholder="https://…" />
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border bg-muted px-3 py-2 text-sm font-semibold hover:bg-muted/80">
              <Upload className="h-4 w-4" /> {uploading ? "Enviando…" : "Upload"}
              <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); }} />
            </label>
          </div>
          {form.cover_image && <img src={form.cover_image} alt="capa" className="mt-3 h-40 w-full rounded-lg object-cover" loading="lazy" />}
        </Field>
        <Field label="Publicar em (deixe vazio para rascunho)">
          <input type="datetime-local" className={inputCls} value={form.published_at} onChange={(e) => setForm({ ...form, published_at: e.target.value })} />
        </Field>
      </div>
    </div>
  );
};

export default AdminBlogEditor;