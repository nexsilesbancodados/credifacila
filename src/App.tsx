 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Index from "./pages/Index";
import Consignado from "./pages/Consignado";
import AntecipacaoRecebiveis from "./pages/AntecipacaoRecebiveis";
 import NotFound from "./pages/NotFound";
 
 const App = () => (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Index />} />
      <Route path="/consignado" element={<Consignado />} />
      <Route path="/securitizadora/antecipacao-de-recebiveis" element={<AntecipacaoRecebiveis />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </BrowserRouter>
 );
 
 export default App;