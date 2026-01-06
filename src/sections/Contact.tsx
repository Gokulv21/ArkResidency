import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    value: '123 Serenity Avenue, Downtown District\nMetropolis, MT 10001',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'reservations@havenretreat.com',
    href: 'mailto:reservations@havenretreat.com',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Reception Hours',
    value: '24 Hours, 7 Days a Week',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're here to help you plan your perfect stay. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border"
                >
                  <div className="text-gold mt-0.5">{info.icon}</div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="block text-foreground hover:text-gold transition-colors mt-1 whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground mt-1 whitespace-pre-line">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Our Location
            </h3>
            <div className="rounded-lg overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haven Retreat Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
