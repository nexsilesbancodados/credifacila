 import { useState, useEffect } from "react";
 import { Menu, X, Landmark } from "lucide-react";
 
 const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => setIsScrolled(window.scrollY > 20);
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const navLinks = [
     { name: "Início", href: "#" },
     { name: "Soluções", href: "#solutions" },
     { name: "Sobre", href: "#about" },
     { name: "Contato", href: "#contact" },
   ];
 
   return (
     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
       <div className="container-x flex items-center justify-between">
         <div className="flex items-center gap-2">
           <Landmark className="h-8 w-8 text-gold" />
           <span className="text-xl font-bold tracking-tighter text-white">LURI<span className="text-gold">BANK</span></span>
         </div>
 
         {/* Desktop Menu */}
         <div className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
             <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
               {link.name}
             </a>
           ))}
           <button className="rounded-full bg-gold px-6 py-2 text-sm font-bold text-black hover:bg-gold-soft transition-all">
             Acessar Conta
           </button>
         </div>
 
         {/* Mobile Toggle */}
         <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
           {isMenuOpen ? <X /> : <Menu />}
         </button>
       </div>
 
       {/* Mobile Menu */}
       {isMenuOpen && (
         <div className="absolute top-full left-0 right-0 bg-black border-t border-white/10 p-6 flex flex-col gap-6 md:hidden">
           {navLinks.map((link) => (
             <a key={link.name} href={link.href} className="text-lg font-medium text-white/70" onClick={() => setIsMenuOpen(false)}>
               {link.name}
             </a>
           ))}
           <button className="w-full rounded-full bg-gold py-3 text-lg font-bold text-black">
             Acessar Conta
           </button>
         </div>
       )}
     </nav>
   );
 };
 
 export default Navbar;