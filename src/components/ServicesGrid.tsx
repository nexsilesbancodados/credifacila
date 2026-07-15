import card1 from "@/assets/card-antecipacao.png.asset.json";
import card2 from "@/assets/card-boleto.png.asset.json";
import card3 from "@/assets/card-consignado.png.asset.json";
import card4 from "@/assets/card-shield-bank.png.asset.json";

const cards = [
  {
    img: card1.url,
    title: "Antecipação de Recebíveis",
    copy: "Transforme vendas a prazo em capital hoje e mantenha o caixa girando.",
    cta: "Antecipar meus recebíveis",
  },
  {
    img: card2.url,
    title: "Boleto Garantido",
    copy: "Receba à vista os boletos emitidos e elimine o risco de inadimplência.",
    cta: "Garantir meus boletos",
  },
  {
    img: card3.url,
    title: "Crédito Consignado",
    copy: "Condições exclusivas com desconto em folha para servidores e aposentados.",
    cta: "Simular consignado",
  },
  {
    img: card4.url,
    title: "Shield Bank",
    copy: "Conta digital completa com cartão, PIX e serviços bancários sem burocracia.",
    cta: "Abrir minha conta",
  },
];

const ServicesGrid = () => (
  <section className="services-grid-section">
    <div className="services-grid-container">
      <header className="services-grid-header">
        <h2>Soluções financeiras sob medida</h2>
        <p>Escolha o caminho ideal para o seu momento</p>
      </header>
      <div className="services-grid">
        {cards.map((c) => (
          <div key={c.title} className="service-card" tabIndex={0}>
            <img src={c.img} alt={c.title} className="service-card-img" />
            <div className="service-card-shade" />
            <div className="service-card-content">
              <h3 className="service-card-title">{c.title}</h3>
              <p className="service-card-copy">{c.copy}</p>
              <button className="service-card-btn">{c.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;