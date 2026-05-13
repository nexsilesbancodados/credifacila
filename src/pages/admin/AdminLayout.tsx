import { memo } from "react";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, LogOut, Shield, Loader2 } from "lucide-react";
import { useAdmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const { loading, user, isAdmin } = useAdmin();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#05070A] text-white/40">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--gold-soft))]" />
          <p className="text-[10px] font-black uppercase tracking-widest">Autenticando...</p>
        </div>
      </div>
    );
  }
  
  if (!user) return <Navigate to="/auth?redirect=/admin" replace />;
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center bg-[#05070A] text-white">
        <div className="max-w-md space-y-6">
          <Shield className="mx-auto h-16 w-16 text-rose-500/20" />
          <h1 className="text-3xl font-black tracking-tighter">Acesso Restrito</h1>
          <p className="text-white/40">Sua conta não possui privilégios administrativos para este domínio.</p>
          <Link to="/" className="btn-gold inline-flex">Voltar ao Site</Link>
        </div>
      </div>
    );
  }

  const links = [
    { to: "/admin", label: "Overview", icon: LayoutDashboard, end: true },
    { to: "/admin/blog", label: "Editorial", icon: FileText },
  ];

  return (
    <div className="min-h-screen flex bg-[#05070A] text-white">
      <aside className="w-64 border-r border-white/5 bg-black/20 p-6 flex flex-col">
        <div className="mb-10 px-2 flex flex-col">
          <span className="text-lg font-black tracking-tighter">CREDIFÁCIL</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--gold-soft))]">Management</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all", isActive ? "bg-white/10 text-white shadow-xl" : "text-white/40 hover:bg-white/5 hover:text-white")}>
              {({ isActive }) => (
                <>
                  <l.icon className={cn("h-4 w-4", isActive ? "text-[hsl(var(--gold-soft))]" : "")} /> {l.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        
        <button 
          onClick={async () => { await supabase.auth.signOut(); navigate("/"); }} 
          className="mt-auto flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-rose-500/60 hover:bg-rose-500/10 hover:text-rose-500 transition-all text-left"
        >
          <LogOut className="h-4 w-4" /> Terminar Sessão
        </button>
      </aside>
      
      <main className="flex-1 overflow-x-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--gold))/0.02] blur-3xl rounded-full pointer-events-none" />
        <div className="p-12 relative z-10 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default memo(AdminLayout);
