 import { Link } from "react-router-dom";
 
 const NotFound = () => {
   return (
     <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
       <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
       <p className="text-xl text-gray-400 mb-8">Página não encontrada</p>
       <Link to="/" className="btn-gold">Voltar ao Início</Link>
     </div>
   );
 };
 
 export default NotFound;