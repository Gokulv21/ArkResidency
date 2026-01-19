import { Church, Building, Route, Utensils, Hospital } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const nearbyPlaces = [
  {
    icon: <Church className="w-6 h-6" />,
    title: 'Boothanarayanan Temple',
    description: 'Ancient temple dedicated to Lord Subramanya, just a short walk away.',
  },
  {
    icon: <Church className="w-6 h-6" />,
    title: 'Theradi Muneeshwarar Temple',
    description: 'Historic Shiva temple known for its architectural beauty.',
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Raja Gopuram',
    description: 'Magnificent gateway entrance showcasing traditional Tamil architecture.',
  },
  {
    icon: <Route className="w-6 h-6" />,
    title: 'Girivalam Start & End Point',
    description: 'Sacred path for circumambulation around the temple complex.',
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Andhra Mess',
    description: 'Authentic Andhra cuisine served with traditional flavors.',
  },
  {
    icon: <Hospital className="w-6 h-6" />,
    title: 'Rajan Hospital (For Emergency)',
    description: '24/7 emergency medical care facility nearby for peace of mind.',
  },
];



const About = () => {
  const { ref: p1Ref, isVisible: p1Visible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: p2Ref, isVisible: p2Visible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: p3Ref, isVisible: p3Visible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: p4Ref, isVisible: p4Visible } = useScrollAnimation<HTMLParagraphElement>();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-8">
              About ARK Residency
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p
                ref={p1Ref}
                className={`transition-all duration-1000 ${
                  p1Visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Nestled in a serene corner of the city, Haven Retreat stands as a
                testament to modern luxury and timeless hospitality. Since our
                establishment, we have been dedicated to creating memorable
                experiences for every guest who walks through our doors.
              </p>
              <p
                ref={p2Ref}
                className={`transition-all duration-1000 delay-200 ${
                  p2Visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Our boutique hotel combines contemporary design with warm,
                personalized service. Every detail, from the carefully curated
                interiors to our thoughtfully selected amenities, has been
                designed with your comfort in mind.
              </p>
              <p
                ref={p3Ref}
                className={`transition-all duration-1000 delay-400 ${
                  p3Visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Whether you're here for a romantic getaway, a family vacation,
                or a business trip, our team is committed to making your stay
                exceptional. We believe that true luxury lies in the details—the
                crisp linens, the welcoming smile, the perfect cup of morning coffee.
              </p>
              <p
                ref={p4Ref}
                className={`transition-all duration-1000 delay-600 ${
                  p4Visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                At Haven Retreat, you're not just a guest; you're part of our
                extended family. Welcome home.
              </p>
            </div>
          </div>

          {/* Right Column - Nearby Places */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              NearBy Places
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {place.icon}
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {place.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {place.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
