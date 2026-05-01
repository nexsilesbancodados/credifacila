import { Helmet } from "react-helmet-async";
import TopNav from "@/components/header/TopNav";

const LURI_URL = "https://luri.com.vc/";

const ContaDigitalLuri = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Conta Digital Luri | Credifácil</title>
        <meta
          name="description"
          content="Acesse a Conta Digital Luri diretamente pela Credifácil — conta PJ e PF 100% digital, Pix ilimitado e cartão sem anuidade."
        />
        <link rel="canonical" href="/securitizadora/conta-digital-luri" />
      </Helmet>

      <TopNav />

      <main className="flex-1 w-full">
        <h1 className="sr-only">Conta Digital Luri</h1>
        <div className="w-full h-[calc(100vh-80px)]">
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
