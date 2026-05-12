import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Users, Mail, PlusCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Stat = ({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: number | string }) => (
  <div className="rounded-2xl border bg-background p-6">
    <div className="flex items-center gap-3 text-muted-foreground"><Icon className="h-5 w-5" /> <span className="text-sm font-medium">{label}</span></div>
    <div className="mt-3 text-3xl font-extrabold">{value}</div>
  </div>
);

const AdminDashboard = () => {
  const [posts, setPosts] = useState(0);
  const [subs, setSubs] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    (async () => {
      const [{ count: p }, { count: s }, { count: c }] = await Promise.all([
        supabase.from("blog_posts").select("*", { count: "exact", head: true }),
        supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
        supabase.from("clients").select("*", { count: "exact", head: true }),
      ]);
      setPosts(p ?? 0); setSubs(s ?? 0); setClients(c ?? 0);
    })();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do conteúdo e operações.</p>
        </div>
        <Link to="/admin/blog/new" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90">
          <PlusCircle className="h-4 w-4" /> Novo post
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Stat icon={FileText} label="Posts publicados" value={posts} />
        <Stat icon={Mail} label="Inscritos newsletter" value={subs} />
        <Stat icon={Users} label="Clientes cadastrados" value={clients} />
      </div>
    </div>
  );
};

export default AdminDashboard;