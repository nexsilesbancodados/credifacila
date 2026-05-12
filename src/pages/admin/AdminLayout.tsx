import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, LogOut, Shield } from "lucide-react";
import { useAdmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const { loading, user, isAdmin } = useAdmin();
  const navigate = useNavigate();

  if (loading) {
    return <div className="min-h-screen grid place-items-center text-muted-foreground">Carregando…</div>;
  }
  if (!user) return <Navigate to="/auth?redirect=/admin" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <Shield className="mx-auto h-12 w-12 text-muted-foreground" />
          <h1 className="text-2xl font-extrabold">Acesso restrito</h1>
          <p className="text-muted-foreground">Você precisa de permissões de administrador para acessar esta área.</p>
          <Link to="/" className="btn-primary inline-flex">Voltar para o site</Link>
        </div>
      </div>
    );
  }

  const links = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
    { to: "/admin/blog", label: "Blog", icon: FileText },
  ];

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-60 border-r bg-background p-4 flex flex-col">
        <Link to="/" className="px-2 py-3 font-extrabold text-lg">Credifácil <span className="text-xs font-medium text-muted-foreground">admin</span></Link>
        <nav className="mt-6 flex-1 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              )}
            >
              <l.icon className="h-4 w-4" /> {l.label}
            </NavLink>
          ))}
        </nav>
        <Button variant="ghost" size="sm" className="justify-start gap-3" onClick={async () => { await supabase.auth.signOut(); navigate("/"); }}>
          <LogOut className="h-4 w-4" /> Sair
        </Button>
      </aside>
      <main className="flex-1 p-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;