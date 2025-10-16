import { Button } from "@/components/ui/button";
import { GraduationCap, LogIn } from "lucide-react";

const Header = () => {
  const handleLoginClick = () => {
    window.location.href = "https://colaserrio.online/";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Espacio circular para el logo */}
            <div className="w-12 h-12 rounded-full bg-secondary border-2 border-primary flex items-center justify-center overflow-hidden">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                Institución Educativa
              </h1>
              <p className="text-sm text-muted-foreground">El Aserrío</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-base font-medium">
              Inicio
            </a>
            <a href="#niveles" className="text-foreground hover:text-primary transition-base font-medium">
              Niveles
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-base font-medium">
              Nosotros
            </a>
            <a href="#valores" className="text-foreground hover:text-primary transition-base font-medium">
              Valores
            </a>
          </nav>

          <Button onClick={handleLoginClick} variant="default" className="gap-2">
            <LogIn className="w-4 h-4" />
            Ingresar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
