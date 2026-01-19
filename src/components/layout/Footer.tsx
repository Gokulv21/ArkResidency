import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'Rooms', href: '#rooms' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'About', href: '#about' },
      { name: 'Amenities', href: '#amenities' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                ARK
              </span>
              <span className="font-serif text-lg font-normal italic text-gold-light">
                Grand Residency
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Experience exceptional value and comfort at ARK Residency,
              where every stay is designed for your perfect comfort.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all duration-1000 ease-in-out"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:border-transparent hover:text-white transition-all duration-1000 ease-in-out"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:border-transparent hover:text-white transition-all duration-1000 ease-in-out"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>13 Gopala Pillaiyar Street</p>
              <p>(Near Gopala Pillaiyar Temple)</p>
              <p>Tiruvannamalai-606601</p>
              <p className="pt-2">
                <a href="tel:+919443969359" className="hover:text-gold transition-colors">
                  +91 94439 69359
                </a>
              </p>
              <p>
                <a href="mailto:reservations@arkresidency.com" className="hover:text-gold transition-colors">
                  reservations@arkresidency.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-primary-foreground/50 text-center">
              © {currentYear} ARK Residency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
