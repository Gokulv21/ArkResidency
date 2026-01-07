import { MapPin, Clock, Shield, Sparkles, Users, Leaf } from 'lucide-react';

const highlights = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Prime Location',
    description: 'Situated in the heart of the city with easy access to major attractions, shopping, and dining.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Clean & Spacious',
    description: 'Meticulously maintained rooms with generous space for your comfort and relaxation.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Family & Business Friendly',
    description: 'Whether traveling for leisure or work, we cater to all your needs with dedicated amenities.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Affordable Luxury',
    description: 'Experience premium hospitality without the premium price tag. Value meets elegance.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Service',
    description: 'Our dedicated staff is available around the clock to ensure your stay is seamless.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Eco-Conscious',
    description: 'Committed to sustainable practices while maintaining the highest standards of comfort.',
  },
];

const About = () => {
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
              <p>
                Nestled in a serene corner of the city, Haven Retreat stands as a 
                testament to modern luxury and timeless hospitality. Since our 
                establishment, we have been dedicated to creating memorable 
                experiences for every guest who walks through our doors.
              </p>
              <p>
                Our boutique hotel combines contemporary design with warm, 
                personalized service. Every detail, from the carefully curated 
                interiors to our thoughtfully selected amenities, has been 
                designed with your comfort in mind.
              </p>
              <p>
                Whether you're here for a romantic getaway, a family vacation, 
                or a business trip, our team is committed to making your stay 
                exceptional. We believe that true luxury lies in the details—the 
                crisp linens, the welcoming smile, the perfect cup of morning coffee.
              </p>
              <p>
                At Haven Retreat, you're not just a guest; you're part of our 
                extended family. Welcome home.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Why Choose Us
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
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
