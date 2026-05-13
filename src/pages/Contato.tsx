import { useState } from "react";
import { Clock, Headset, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import HeroImage from "@/components/HeroImage";
import imgAtendimento from "@/assets/img-atendimento.jpg";
import imgHumanizado from "@/assets/img-humanizado.jpg";
import { SITE } from "@/data/site";

const Contato = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout tone="twilight">
      <PageHeader
        eyebrow="Fale com a Credifácil"
        title={<>Estamos prontos para <span className="text-gold-gradient">ajudar você</span></>}
        subtitle="Nossa equipe está pronta para encontrar a melhor solução para você."
        bgImage={imgAtendimento}
        className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
      />

      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-extrabold">Solicitar crédito ou tirar dúvidas</h2>
            <p className="mt-2 text-sm text-muted-foreground">Preencha o formulário e em breve um especialista entrará em contato.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-emerald-700">
                <p className="text-base font-bold">Solicitação enviada!</p>
                <p className="mt-1 text-sm">Em breve um de nossos especialistas entrará em contato com você.</p>
              </div>
            ) : (
              <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                <div className="sm:col-span-2">
                  <label className="form-label">Nome completo</label>
                  <input required className="form-input" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="form-label">Telefone / WhatsApp</label>
                  <input required className="form-input" placeholder="(11) 99999-0000" />
                </div>
                <div>
                  <label className="form-label">E-mail</label>
                  <input required type="email" className="form-input" placeholder="voce@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Solução desejada</label>
                  <select required className="form-input">
                    <option value="">Selecione...</option>
                    <option>Consignado</option>
                    <option>Antecipação de Recebíveis</option>
                    <option>Boleto Garantido</option>
                    <option>Conta Digital Luri</option>
                    <option>Invista Conosco</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Mensagem</label>
                  <textarea rows={4} className="form-input resize-none" placeholder="Conte como podemos ajudar..." />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Enviar solicitação <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="card-soft p-7">
              <h3 className="text-lg font-extrabold">Canais de atendimento</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[hsl(var(--royal))]" /><div><p className="font-bold">Telefone</p><p className="text-muted-foreground">{SITE.phone}</p></div></li>
                <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-5 w-5 text-[hsl(var(--royal))]" /><div><p className="font-bold">WhatsApp</p><a href={SITE.whatsappLink} className="text-muted-foreground hover:text-[hsl(var(--royal))]">{SITE.whatsapp}</a></div></li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-[hsl(var(--royal))]" /><div><p className="font-bold">E-mail</p><p className="text-muted-foreground">{SITE.email}</p></div></li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[hsl(var(--royal))]" /><div><p className="font-bold">Endereço</p><p className="text-muted-foreground">{SITE.address}</p></div></li>
                <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-[hsl(var(--royal))]" /><div><p className="font-bold">Horário</p><p className="text-muted-foreground">{SITE.hours}</p></div></li>
              </ul>
            </div>
            <a href={SITE.whatsappLink} className="btn-gold w-full">Falar pelo WhatsApp</a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { I: Headset, t: "Atendimento humano" },
            { I: ShieldCheck, t: "Processo seguro" },
            { I: Zap, t: "Resposta rápida" },
            { I: Sparkles, t: "Especialistas financeiros" },
          ].map(({ I, t }) => (
            <div key={t} className="card-soft flex items-center gap-3 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[hsl(var(--royal))/0.1] text-[hsl(var(--royal))]"><I className="h-5 w-5" /></div>
              <p className="text-sm font-bold">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <HeroImage src={imgHumanizado} alt="Consultora atendendo cliente" withLogo />
          <div>
            <span className="pill">Atendimento consultivo</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Mais que crédito: parceria de verdade</h2>
            <p className="mt-5 text-muted-foreground md:text-lg">Conversamos, entendemos seu momento e ajudamos a escolher a melhor solução. Sem promessas vazias, sem letras miúdas.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;