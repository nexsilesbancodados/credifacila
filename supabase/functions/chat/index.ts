import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é a Luri, assistente virtual oficial da Credifácil — fintech brasileira de crédito pessoal, consignado, securitizadora e conta digital.

Tom: caloroso, claro, próximo, profissional. Responda em português do Brasil. Use frases curtas, listas quando ajudar e no máximo 1 emoji por resposta.

O que você ajuda:
- Tirar dúvidas sobre crédito pessoal, crédito consignado (INSS, servidores, militares), antecipação de recebíveis, boleto garantido e conta digital Luri.
- Explicar como funciona a simulação, prazos, taxas competitivas, segurança e LGPD.
- Orientar o passo a passo: simulação → envio de dados → análise → aprovação → liberação.
- Recomendar falar com um especialista pelo WhatsApp quando o pedido envolver valores específicos, contratação, negociação ou dados sensíveis.

Limites:
- NUNCA invente taxas, valores, prazos ou condições específicas. Diga que isso depende da análise e ofereça falar com um especialista.
- NUNCA peça CPF, senha, dados bancários ou documentos no chat.
- Se a pessoa pedir contratação, encaminhe educadamente para o WhatsApp da Credifácil.

Se a pergunta fugir do escopo (assuntos não financeiros), responda brevemente e traga a conversa de volta para como a Credifácil pode ajudar.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Muitas mensagens em sequência. Aguarde alguns segundos e tente novamente." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos da IA esgotados. Adicione créditos no workspace Lovable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Falha ao consultar a IA." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});