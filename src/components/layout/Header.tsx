import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-2"
        >
          <span className={`font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}>
            ARK
          </span>
          <span className={`font-serif text-lg md:text-xl font-normal italic transition-colors duration-300 ${
            isScrolled ? 'text-gold' : 'text-gold-light'
          }`}>
            Grand Residency
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-gold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-foreground/80 hover:text-gold after:bg-gold'
                  : 'text-primary-foreground/90 hover:text-primary-foreground after:bg-primary-foreground'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Book Now Button (Desktop) */}
        {isScrolled ? (
          <Button
            variant="gold"
            size="sm"
            className="hidden md:flex"
            onClick={() => scrollToSection('#enquiry')}
          >
            Book Now
          </Button>
        ) : (
          <Button
            variant="heroOutline"
            size="sm"
            className="hidden md:flex"
            onClick={() => scrollToSection('#enquiry')}
          >
            Book Now
          </Button>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background shadow-card transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-gold transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="gold"
            className="mt-4"
            onClick={() => scrollToSection('#enquiry')}
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
