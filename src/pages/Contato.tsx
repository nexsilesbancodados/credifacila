import { useState } from "react";
import { Clock, Headset, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, Sparkles, Zap, Building2, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import HeroImage from "@/components/HeroImage";
import imgAtendimento from "@/assets/img-atendimento.jpg";
import imgHumanizado from "@/assets/img-humanizado.jpg";
import { SITE } from "@/data/site";
import Reveal from "@/components/Reveal";

const Contato = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout tone="midnight">
      <SEOHead
        title="Canais de Atendimento | Credifácil Corporate"
        description="Fale com nosso Wealth Advisory ou suporte corporativo. Atendimento especializado para indivíduos e empresas."
      />
      <PageHeader
        eyebrow="Relationship Management"
        title={<>Canais de <span className="text-gold-gradient">Atendimento e Suporte</span></>}
        subtitle="Agende uma consultoria presencial ou digital com um de nossos especialistas financeiros."
        bgImage={imgAtendimento}
        className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
      />

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm shadow-2xl">
              <h2 className="text-3xl font-black text-white">Solicitar Consultoria</h2>
              <p className="mt-4 text-white/60">Um Wealth Manager dedicado entrará em contato em até 1 hora útil.</p>

              {sent ? (
                <div className="mt-12 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-8 text-emerald-400 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <p className="text-xl font-bold">Solicitação enviada!</p>
                  <p className="mt-2 text-sm opacity-80">Seu ticket de atendimento foi gerado com sucesso.</p>
                </div>
              ) : (
                <form className="mt-10 grid gap-6 sm:grid-cols-2" onSubmit={onSubmit}>
                  <div className="sm:col-span-2">
                    <label className="form-label text-white/70">Nome ou Razão Social</label>
                    <input required className="form-input bg-white/5 border-white/10 text-white" placeholder="Identificação completa" />
                  </div>
                  <div>
                    <label className="form-label text-white/70">Telefone Corporativo</label>
                    <input required className="form-input bg-white/5 border-white/10 text-white" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="form-label text-white/70">E-mail Profissional</label>
                    <input required type="email" className="form-input bg-white/5 border-white/10 text-white" placeholder="nome@empresa.com.br" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label text-white/70">Área de Interesse</label>
                    <select required className="form-input bg-white/5 border-white/10 text-white">
                      <option value="" className="bg-navy-deep">Selecione uma opção...</option>
                      <option className="bg-navy-deep">Securitização & Antecipação</option>
                      <option className="bg-navy-deep">Crédito Consignado</option>
                      <option className="bg-navy-deep">Asset & Wealth Management</option>
                      <option className="bg-navy-deep">Conta Digital Luri Business</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label text-white/70">Observações Estratégicas</label>
                    <textarea rows={4} className="form-input bg-white/5 border-white/10 text-white resize-none" placeholder="Breve resumo da necessidade..." />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-gold w-full flex justify-center py-4">
                      Agendar Consultoria <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="card-soft p-10 bg-white/5">
                <h3 className="text-xl font-bold text-white">Relationship Center</h3>
                <div className="mt-8 space-y-6">
                  {[
                    { icon: Phone, title: "Central Nacional", value: SITE.phone },
                    { icon: MessageCircle, title: "WhatsApp Corporate", value: SITE.whatsapp, link: SITE.whatsappLink },
                    { icon: Mail, title: "E-mail de Suporte", value: SITE.email },
                    { icon: MapPin, title: "Headquarters", value: SITE.address },
                    { icon: Clock, title: "Horário de Operação", value: SITE.hours }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="text-white font-medium hover:text-[hsl(var(--gold-soft))] transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] p-8 text-white">
                <h4 className="font-bold text-lg">Suporte de Segunda Instância</h4>
                <p className="mt-3 text-sm opacity-80 leading-relaxed">
                  Possui algum ticket em aberto e deseja prioridade? Entre em contato diretamente com nossa Ouvidoria através do portal do cliente.
                </p>
                <button className="mt-6 text-sm font-bold underline">Acessar Ouvidoria</button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-[hsl(var(--gold))/0.1] blur-2xl rounded-full" />
              <HeroImage src={imgHumanizado} alt="Atendimento de excelência" withLogo />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="pill-gold"><UserCheck className="h-3 w-3" /> Wealth Advisory</span>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">Atendimento que valoriza seu tempo</h2>
              <p className="mt-6 text-lg text-white/70">Na Credifácil, acreditamos que decisões financeiras complexas exigem conversas profundas. Nossos gerentes de relacionamento são certificados e preparados para oferecer diagnósticos precisos, sem burocracia.</p>
              
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))]">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Presence Office</h4>
                    <p className="text-sm text-white/50">Salas de reunião premium para sua privacidade.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))]">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">SLA Prioritário</h4>
                    <p className="text-sm text-white/50">Respostas executivas em tempo recorde.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
import { ArrowRight } from "lucide-react";
