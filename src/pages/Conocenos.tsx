import Layout from '@/components/layout/Layout';
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compromiso', description: 'Dedicación total a cada proyecto' },
  { icon: Award, title: 'Excelencia', description: 'Altos estándares de calidad' },
  { icon: Users, title: 'Trabajo en Equipo', description: 'Colaboración para el éxito' },
  { icon: Target, title: 'Innovación', description: 'Soluciones modernas y eficientes' },
];

const Conocenos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-charcoal/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Conócenos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Más de 15 años construyendo sueños y elevando proyectos
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-accent font-semibold uppercase tracking-wider">Sobre Nosotros</span>
              <h2 className="section-title mt-2">Una Empresa con Historia</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                CRISMATIK es una empresa líder en el sector de la construcción y ascensores, 
                con más de <span className="text-primary font-semibold">15 años de experiencia</span> 
                entregando proyectos de alta calidad en todo el país.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nuestro compromiso con la excelencia y la innovación nos ha permitido completar 
                más de 56 proyectos exitosos, incluyendo edificios residenciales, viviendas 
                unifamiliares e instituciones educativas y comerciales.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Contamos con un equipo de profesionales altamente capacitados, desde arquitectos 
                e ingenieros hasta técnicos especializados en sistemas de elevación, todos 
                trabajando juntos para superar las expectativas de nuestros clientes.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                    <span className="text-4xl font-bold text-primary font-serif">+15</span>
                    <p className="text-muted-foreground mt-2">Años de Experiencia</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                    <span className="text-4xl font-bold text-primary font-serif">56</span>
                    <p className="text-muted-foreground mt-2">Proyectos Completados</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                    <span className="text-4xl font-bold text-primary font-serif">+200</span>
                    <p className="text-muted-foreground mt-2">Clientes Satisfechos</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                    <span className="text-4xl font-bold text-primary font-serif">+50</span>
                    <p className="text-muted-foreground mt-2">Profesionales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Brindar soluciones integrales en construcción y sistemas de elevación, 
                garantizando la máxima calidad, seguridad y satisfacción de nuestros clientes. 
                Nos comprometemos a entregar proyectos que superen las expectativas, 
                utilizando tecnología de vanguardia y materiales de primera calidad.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ser la empresa líder y referente en el sector de construcción y ascensores 
                a nivel nacional, reconocida por nuestra excelencia operativa, innovación 
                constante y compromiso con el desarrollo sostenible. Aspiramos a transformar 
                el horizonte urbano con proyectos que inspiren y perduren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Valores</h2>
            <p className="section-subtitle">
              Los principios que guían cada uno de nuestros proyectos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12">
            Contamos con un equipo multidisciplinario de profesionales apasionados: 
            arquitectos, ingenieros civiles, técnicos especializados en ascensores, 
            y expertos en gestión de proyectos que trabajan en conjunto para 
            garantizar el éxito de cada obra.
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conocenos;
