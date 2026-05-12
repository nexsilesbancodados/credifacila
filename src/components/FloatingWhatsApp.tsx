import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <a
      href={`${SITE.whatsappLink}?text=${encodeURIComponent(
        "Olá! Vim pelo site e gostaria de falar com um especialista da Credifácil."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(37,211,102,0.8)] anim-pulse-glow ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-bold sm:inline">Fale conosco</span>
    </a>
  );
};

export default FloatingWhatsApp;
