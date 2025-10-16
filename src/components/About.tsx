import { Card } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Misión",
    description: "Formar estudiantes íntegros con excelencia académica, pensamiento crítico y valores sólidos que contribuyan al desarrollo de la sociedad."
  },
  {
    icon: Award,
    title: "Visión",
    description: "Ser reconocidos como una institución líder en educación de calidad, innovación pedagógica y formación en valores para el año 2030."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Una familia educativa comprometida con el desarrollo integral de cada estudiante, fomentando el respeto y la colaboración."
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Dedicación constante a la mejora continua, actualización pedagógica y atención personalizada para cada miembro de nuestra comunidad."
  }
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 25 años de experiencia formando generaciones de colombianos 
            comprometidos con el conocimiento y el progreso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 gradient-card border-0 shadow-elegant hover:shadow-lg transition-base group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-base">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
