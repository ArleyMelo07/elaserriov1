import { Card } from "@/components/ui/card";
import { Baby, BookOpen, GraduationCap } from "lucide-react";
import preescolarImg from "@/assets/level-preescolar.jpg";
import primariaImg from "@/assets/level-primaria.jpg";
import bachilleratoImg from "@/assets/level-bachillerato.jpg";

const levels = [
  {
    title: "Preescolar",
    description: "Educación inicial para niños de 3 a 5 años, enfocada en el desarrollo de habilidades básicas y socialización.",
    icon: Baby,
    image: preescolarImg,
    grades: "Pre-jardín, Jardín y Transición"
  },
  {
    title: "Primaria",
    description: "Formación académica sólida de 1° a 5° grado, fortaleciendo competencias en lectura, matemáticas y ciencias.",
    icon: BookOpen,
    image: primariaImg,
    grades: "Grados 1° a 5°"
  },
  {
    title: "Bachillerato",
    description: "Preparación integral de 6° a 11° grado, orientando a los estudiantes hacia la educación superior y el mundo laboral.",
    icon: GraduationCap,
    image: bachilleratoImg,
    grades: "Grados 6° a 11°"
  }
];

const Levels = () => {
  return (
    <section id="niveles" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Niveles Educativos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una educación continua y de calidad en todos los niveles, 
            acompañando el crecimiento de nuestros estudiantes desde temprana edad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden gradient-card border-0 shadow-elegant hover:shadow-lg transition-base group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-base"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{level.title}</h3>
                  </div>
                  <p className="text-sm text-accent font-semibold mb-3">{level.grades}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {level.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Levels;
