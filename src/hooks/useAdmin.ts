import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useAdmin() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let mounted = true;
    const check = async (u: User | null) => {
      if (!u) {
        if (mounted) { setUser(null); setIsAdmin(false); setLoading(false); }
        return;
      }
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.id).eq("role", "admin").maybeSingle();
      if (mounted) { setUser(u); setIsAdmin(!!data); setLoading(false); }
    };
    supabase.auth.getSession().then(({ data }) => check(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => check(s?.user ?? null));
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);

  return { loading, user, isAdmin };
}