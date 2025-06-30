import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For non-anchor links, navigate normally
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '/team' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigation('#home')} 
            className="flex items-center space-x-3 group"
          >
            <img 
              src="/assets/images/zilotech-favicon-bgtransparent.png" 
              alt="ZiloTech Logo" 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-2xl font-bold text-primary group-hover:text-primary-600 transition-colors">
              ZiloTech
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => handleNavigation('#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg mt-4"
                onClick={() => handleNavigation('#contact')}
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
