import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const handleLoginClick = () => {
    window.location.href = "https://colaserrio.online/";
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Estudiantes de IE El Aserrío"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Educación de calidad desde 1995</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Formando líderes del mañana
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl">
            En la IE El Aserrío brindamos educación integral desde preescolar hasta grado 11, 
            fomentando el desarrollo académico, social y personal de cada estudiante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleLoginClick}
              variant="hero" 
              size="lg"
              className="gap-2"
            >
              Acceder al sistema
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary transition-base"
            >
              Conoce más
            </Button>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
