import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BoletoAntecipado from "./pages/BoletoAntecipado";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/boleto-antecipado" element={<BoletoAntecipado />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;