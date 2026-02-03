import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBuilding1 from '@/assets/hero-building-1.jpg';
import heroBuilding2 from '@/assets/hero-building-2.jpg';
import heroBuilding3 from '@/assets/hero-building-3.jpg';

const slides = [
  {
    image: heroBuilding1,
    title: 'Construyendo el Futuro',
    subtitle: 'Más de 15 años de excelencia en construcción y ascensores',
  },
  {
    image: heroBuilding2,
    title: 'Calidad y Compromiso',
    subtitle: 'Proyectos residenciales que transforman vidas',
  },
  {
    image: heroBuilding3,
    title: 'Innovación Constante',
    subtitle: 'Tecnología de vanguardia en sistemas de elevación',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              animationPlayState: index === currentSlide ? 'running' : 'paused',
            }}
          />
          <div className="gradient-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 
            key={`title-${currentSlide}`}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 hero-text-shadow animate-fade-in"
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            key={`subtitle-${currentSlide}`}
            className="text-xl md:text-2xl text-white/90 mb-12 hero-text-shadow animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="/proyectos" className="btn-primary">
              Ver Proyectos
            </a>
            <a href="/contacto" className="btn-accent">
              Contáctanos
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
