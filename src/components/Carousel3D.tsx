import "./carousel3d.css";

const images = [
  "https://i.postimg.cc/g2xg536T/2-3-2.png",
  "https://i.postimg.cc/hjWZVhv6/2-3.png",
];

const N = 12;

export default function Carousel3D() {
  return (
    <section className="carousel3d-section">
      <div className="scene">
        <div className="a3d" style={{ ["--n" as any]: N }}>
          {Array.from({ length: N }).map((_, i) => (
            <img
              key={i}
              className="card"
              src={images[i % images.length]}
              style={{ ["--i" as any]: i }}
              alt={`slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}