import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => (
  <Layout>
    <section className="container-x py-32 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--royal))]">Erro 404</p>
      <h1 className="mt-4 text-5xl font-extrabold">Página não encontrada</h1>
      <p className="mt-4 text-muted-foreground">A página que você procura não existe ou foi movida.</p>
      <Link to="/" className="btn-primary mt-8 inline-flex">Voltar ao início</Link>
    </section>
  </Layout>
);

export default NotFound;