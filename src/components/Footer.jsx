import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información institucional */}
          <div>
            <h3 className="text-xl font-bold mb-4">IE El Aserrío</h3>
            <p className="text-white/80 leading-relaxed">
              Institución educativa comprometida con la formación integral 
              de niños y jóvenes desde preescolar hasta grado 11.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Vereda El Aserrío, Colombia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/80">
                  Teléfono institucional
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/80">
                  contacto@ieaserrio.edu.co
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-white/80 hover:text-accent transition-base">
                Inicio
              </a>
              <a href="#niveles" className="block text-white/80 hover:text-accent transition-base">
                Niveles Educativos
              </a>
              <a href="#nosotros" className="block text-white/80 hover:text-accent transition-base">
                Sobre Nosotros
              </a>
              <a href="#valores" className="block text-white/80 hover:text-accent transition-base">
                Valores
              </a>
              <a 
                href="https://colaserrio.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-accent hover:text-accent/80 transition-base font-semibold"
              >
                Sistema de Gestión →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Institución Educativa El Aserrío. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
