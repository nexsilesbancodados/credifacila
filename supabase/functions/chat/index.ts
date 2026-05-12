import { corsHeaders } from "@supabase/supabase-js/cors";

const SYSTEM = `Você é a Luri, assistente virtual da Credifácil — uma instituição financeira brasileira.
Seja calorosa, objetiva e profissional. Responda em português do Brasil.
Produtos: crédito consignado, securitizadora (antecipação de recebíveis, boleto garantido, conta digital Luri) e investimentos.
Quando o usuário quiser contratar ou simular, oriente a clicar em "Solicitar crédito" no site ou falar pelo WhatsApp (11) 99999-1234.
Nunca prometa taxas exatas — diga que dependem de análise. Não solicite dados sensíveis (CPF, senha, cartão).`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not set");

    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM }, ...messages],
        stream: true,
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      if (r.status === 429) return new Response(JSON.stringify({ error: "Muitas mensagens, tente em instantes." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (r.status === 402) return new Response(JSON.stringify({ error: "Créditos esgotados." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: text }), { status: r.status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(r.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});