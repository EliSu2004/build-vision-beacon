import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/conocenos', label: 'Conócenos' },
    { path: '/proyectos', label: 'Nuestros Proyectos' },
    { path: '/cotizar', label: 'Cotizar' },
    { path: '/contacto', label: 'Contáctanos' },
  ];

  const headerBg = isHome && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-charcoal/95 backdrop-blur-md shadow-lg';

  const textColor = isHome && !isScrolled 
    ? 'text-white' 
    : 'text-white';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Left nav items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${textColor} ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center justify-center group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Home className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className={`mt-1 text-lg font-serif font-bold tracking-wider ${textColor} transition-colors duration-300`}>
                CRISMATIK
              </span>
            </div>
          </Link>

          {/* Right nav items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${textColor} ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal/95 backdrop-blur-md py-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-white text-center py-2 text-lg font-medium transition-colors duration-300 hover:text-accent ${
                    location.pathname === item.path ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
