import Layout from '@/components/layout/Layout';
import { Construction, Clock, Wrench } from 'lucide-react';

const Cotizar = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-charcoal/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Cotizar
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sistema de cotizaciones en línea
          </p>
        </div>
      </section>

      {/* Under Construction */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
              <Construction className="w-16 h-16 text-accent" />
            </div>
            
            <h2 className="section-title mb-6">En Construcción</h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Estamos trabajando para brindarte la mejor experiencia de cotización en línea. 
              Muy pronto podrás solicitar presupuestos de manera rápida y sencilla.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary p-6 rounded-xl">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Próximamente</h3>
                <p className="text-muted-foreground">
                  Sistema de cotización automática disponible pronto
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <Wrench className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Mientras Tanto</h3>
                <p className="text-muted-foreground">
                  Contáctanos directamente para obtener tu cotización
                </p>
              </div>
            </div>

            <a href="/contacto" className="btn-primary inline-block">
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cotizar;
