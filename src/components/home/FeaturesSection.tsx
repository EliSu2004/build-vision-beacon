import { Building2, Users, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: '+56 Proyectos',
    description: 'Edificios, viviendas e instituciones completados exitosamente',
  },
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Profesionales altamente capacitados en construcción y ascensores',
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    description: 'Materiales de primera y acabados de excelencia',
  },
  {
    icon: Clock,
    title: '+15 Años',
    description: 'De experiencia respaldando cada proyecto',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <p className="section-subtitle">
            Nuestra trayectoria y compromiso nos respaldan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
