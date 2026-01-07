import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-hotel.jpg';

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ark Residency exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-gold-light" />
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to
            </span>
            <span className="w-12 h-[1px] bg-gold-light" />
          </div>

          {/* Hotel Name */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 tracking-light">
            ARK Grand Residency
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4 tracking-wide">
            Where Comfort Meets Affordability
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Experience exceptional value in our well-maintained residency,
            where every stay is designed for your perfect comfort.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToRooms}
            >
              View Rooms
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
