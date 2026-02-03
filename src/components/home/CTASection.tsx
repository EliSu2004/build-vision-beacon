import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Contáctanos hoy y descubre cómo podemos hacer realidad tu visión. 
            Nuestro equipo está listo para asesorarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto" 
              className="btn-accent inline-flex items-center justify-center gap-2 group"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/conocenos" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
