import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Shield, Sparkles, Users, Leaf } from 'lucide-react';

const amenities = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Prime Location',
    description: 'Situated in the heart of the city with easy access to major attractions, shopping, and dining.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Clean & Spacious',
    description: 'Meticulously maintained rooms with generous space for your comfort and relaxation.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Family & Business Friendly',
    description: 'Whether traveling for leisure or work, we cater to all your needs with dedicated amenities.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Affordable Luxury',
    description: 'Experience premium hospitality without the premium price tag. Value meets elegance.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Service',
    description: 'Our dedicated staff is available around the clock to ensure your stay is seamless.',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Eco-Conscious',
    description: 'Committed to sustainable practices while maintaining the highest standards of comfort.',
  },
];

const Amenities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && !isPaused) {
          scrollContainer.scrollLeft += 2;

          // Reset to beginning when reaching the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 50);
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered, isPaused]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsPaused(!isPaused);

  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Our Amenities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            Why Choose ARK Residency
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 cursor-pointer scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group min-w-[320px] p-8 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {amenities.map((amenity, index) => (
            <div
              key={`duplicate-${index}`}
              className="group min-w-[320px] p-8 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
