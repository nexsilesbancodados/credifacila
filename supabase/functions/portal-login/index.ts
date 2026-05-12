import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { document, birthDate } = await req.json();
    if (typeof document !== "string" || typeof birthDate !== "string") {
      return new Response(JSON.stringify({ error: "Dados inválidos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const cleanDoc = document.replace(/\D/g, "");
    if (cleanDoc.length < 11 || !/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
      return new Response(JSON.stringify({ error: "Formato inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: client, error } = await supabase
      .from("clients")
      .select("id, name, document, email, phone, birth_date")
      .eq("document", cleanDoc)
      .eq("birth_date", birthDate)
      .maybeSingle();

    if (error) throw error;
    if (!client) {
      return new Response(JSON.stringify({ error: "not_found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: debts, error: debtsError } = await supabase
      .from("debts")
      .select("id, amount, due_date, status, description")
      .eq("client_id", client.id)
      .order("due_date", { ascending: true });

    if (debtsError) throw debtsError;

    return new Response(JSON.stringify({ client, debts: debts ?? [] }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("portal-login error", e);
    return new Response(JSON.stringify({ error: "internal" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});