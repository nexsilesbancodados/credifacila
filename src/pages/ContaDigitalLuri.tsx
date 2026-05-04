import { useEffect } from "react";
import TopNav from "@/components/header/TopNav";

const LURI_URL = "https://luri.com.vc/";

const ContaDigitalLuri = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Conta Digital Luri | Credifácil";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 w-full">
        <h1 className="sr-only">Conta Digital Luri</h1>
        <div className="w-full h-[calc(100dvh-72px)] md:h-[calc(100vh-80px)]">
          <iframe
            src={LURI_URL}
            title="Conta Digital Luri"
            className="w-full h-full border-0 bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="clipboard-write; clipboard-read; camera; microphone; geolocation; payment"
          />
        </div>
      </main>
    </div>
  );
};

export default ContaDigitalLuri;
