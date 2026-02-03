import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProjectCategory = 'todos' | 'edificio' | 'vivienda' | 'institucion';

interface Project {
  id: number;
  title: string;
  year: number;
  category: 'edificio' | 'vivienda' | 'institucion';
  description: string;
  image: string;
}

// Generate 56 sample projects
const generateProjects = (): Project[] => {
  const categories: ('edificio' | 'vivienda' | 'institucion')[] = ['edificio', 'vivienda', 'institucion'];
  const projectNames = {
    edificio: [
      'Torre Residencial Aurora', 'Edificio Corporativo Plaza', 'Torre Mirador del Sol',
      'Residencial Las Palmas', 'Edificio Central Business', 'Torre Vista Hermosa',
      'Condominio Alto Mar', 'Edificio Platinum', 'Torre Ejecutiva Norte', 'Residencial El Parque',
      'Edificio San Martín', 'Torre Costanera', 'Residencial Los Jardines', 'Edificio Imperial',
      'Torre del Valle', 'Condominio Real', 'Edificio Monterrey', 'Torre Pacífico', 'Residencial Oasis'
    ],
    vivienda: [
      'Casa Bella Vista', 'Residencia La Encantada', 'Villa del Bosque', 'Casa Moderna Surco',
      'Residencia Premium', 'Villa Campestre', 'Casa Contemporánea', 'Residencia El Roble',
      'Villa Marina', 'Casa Colonial', 'Residencia Los Pinos', 'Villa Serena', 'Casa del Sol',
      'Residencia Dorada', 'Villa Los Ángeles', 'Casa Mediterránea', 'Residencia Elite', 'Villa Real'
    ],
    institucion: [
      'Colegio Nacional San Juan', 'Centro Comercial Plaza Norte', 'Hospital Regional',
      'Universidad del Pacífico', 'Centro Empresarial Lima', 'Clínica San Rafael',
      'Instituto Tecnológico', 'Centro Educativo Primavera', 'Mall Aventura',
      'Hospital Santa Rosa', 'Colegio Internacional', 'Centro Financiero', 'Universidad Nacional',
      'Clínica Metropolitana', 'Centro Cultural', 'Instituto de Formación', 'Mall Central', 'Hospital del Norte'
    ]
  };

  const projects: Project[] = [];
  for (let i = 1; i <= 56; i++) {
    const category = categories[i % 3];
    const names = projectNames[category];
    const nameIndex = Math.floor((i - 1) / 3) % names.length;
    projects.push({
      id: i,
      title: names[nameIndex],
      year: 2010 + Math.floor(Math.random() * 14),
      category,
      description: `Proyecto ${category === 'edificio' ? 'de edificación' : category === 'vivienda' ? 'residencial' : 'institucional'} ejecutado con los más altos estándares de calidad y diseño innovador.`,
      image: `https://images.unsplash.com/photo-${1480714378408 + i * 1000}-67cf0d13bc1a?w=600&h=400&fit=crop`,
    });
  }
  return projects;
};

const allProjects = generateProjects();
const PROJECTS_PER_PAGE = 9;

const categoryLabels = {
  todos: 'Todos',
  edificio: 'Edificios',
  vivienda: 'Viviendas',
  institucion: 'Instituciones',
};

const categoryColors = {
  edificio: 'bg-primary',
  vivienda: 'bg-accent',
  institucion: 'bg-charcoal',
};

// Fallback images for projects
const fallbackImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop',
];

const Proyectos = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeCategory === 'todos' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-charcoal/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Más de 56 proyectos completados con excelencia
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* All Projects Button */}
          <div className="text-center mb-6">
            <button
              onClick={() => handleCategoryChange('todos')}
              className={`filter-btn ${
                activeCategory === 'todos' ? 'filter-btn-active' : 'filter-btn-inactive'
              }`}
            >
              Ver Todos los Proyectos
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(['edificio', 'vivienda', 'institucion'] as const).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`filter-btn ${
                  activeCategory === category ? 'filter-btn-active' : 'filter-btn-inactive'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <p className="text-center text-muted-foreground mb-8">
            Mostrando {displayedProjects.length} de {filteredProjects.length} proyectos
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="card-project group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={fallbackImages[index % fallbackImages.length]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className={`absolute top-4 left-4 ${categoryColors[project.category]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {categoryLabels[project.category]}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-accent font-semibold">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === page 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-transparent text-foreground hover:bg-primary/10'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Proyectos;
