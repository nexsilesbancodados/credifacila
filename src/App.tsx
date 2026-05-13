 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Index from "./pages/Index";
import Consignado from "./pages/Consignado";
import AntecipacaoRecebiveis from "./pages/AntecipacaoRecebiveis";
import BoletoGarantido from "./pages/BoletoGarantido";
import ContaDigitalLuri from "./pages/ContaDigitalLuri";
 import NotFound from "./pages/NotFound";
 
 const App = () => (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Index />} />
      <Route path="/consignado" element={<Consignado />} />
      <Route path="/securitizadora/antecipacao-de-recebiveis" element={<AntecipacaoRecebiveis />} />
      <Route path="/securitizadora/boleto-garantido" element={<BoletoGarantido />} />
      <Route path="/securitizadora/conta-digital-luri" element={<ContaDigitalLuri />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </BrowserRouter>
 );
 
 export default App;