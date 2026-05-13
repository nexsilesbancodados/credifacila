 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Index from "./pages/Index";
import Consignado from "./pages/Consignado";
import AntecipacaoRecebiveis from "./pages/AntecipacaoRecebiveis";
import BoletoGarantido from "./pages/BoletoGarantido";
import ContaDigitalLuri from "./pages/ContaDigitalLuri";
import InvistaConosco from "./pages/InvistaConosco";
import Blog from "./pages/Blog";
import Duvidas from "./pages/Duvidas";
 import PortalCliente from "./pages/PortalCliente";
 import NotFound from "./pages/NotFound";
       <Route path="/portal-cliente" element={<PortalCliente />} />
       <Route path="*" element={<NotFound />} />
 
 const App = () => (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Index />} />
      <Route path="/consignado" element={<Consignado />} />
      <Route path="/securitizadora/antecipacao-de-recebiveis" element={<AntecipacaoRecebiveis />} />
      <Route path="/securitizadora/boleto-garantido" element={<BoletoGarantido />} />
      <Route path="/securitizadora/conta-digital-luri" element={<ContaDigitalLuri />} />
       <Route path="/invista-conosco" element={<InvistaConosco />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/duvidas" element={<Duvidas />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </BrowserRouter>
 );
 
 export default App;