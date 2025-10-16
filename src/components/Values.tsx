import { Card } from "@/components/ui/card";
import { Handshake, Lightbulb, Scale, Sparkles, Star, Trophy } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Excelencia",
    description: "Búsqueda constante de la calidad en todos los procesos educativos y formativos."
  },
  {
    icon: Handshake,
    title: "Respeto",
    description: "Valoración de la diversidad y promoción de un ambiente de convivencia armónica."
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Adaptación continua a nuevas metodologías y tecnologías educativas."
  },
  {
    icon: Scale,
    title: "Responsabilidad",
    description: "Compromiso con el cumplimiento de deberes académicos y sociales."
  },
  {
    icon: Trophy,
    title: "Liderazgo",
    description: "Formación de estudiantes capaces de liderar cambios positivos en la sociedad."
  },
  {
    icon: Sparkles,
    title: "Integridad",
    description: "Actuación ética y coherente en todos los aspectos de la vida escolar."
  }
];

const Values = () => {
  return (
    <section id="valores" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Principios fundamentales que guían nuestra labor educativa 
            y la formación integral de nuestros estudiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center gradient-card border-0 shadow-elegant hover:shadow-lg transition-base group"
              >
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-base">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
