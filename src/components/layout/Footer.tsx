import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6 text-gold">CRISMATIK</h3>
            <p className="text-white/70 leading-relaxed">
              Más de 15 años de experiencia en el sector de la construcción y ascensores. 
              Construimos el futuro con calidad y compromiso.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/70">+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/70">contacto@crismatik.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/70">Av. Principal 123, Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Horario de Atención</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-white/70">Lunes - Viernes</p>
                  <p className="text-white/90 font-medium">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-white/70">Sábados</p>
                  <p className="text-white/90 font-medium">9:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 CRISMATIK. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
