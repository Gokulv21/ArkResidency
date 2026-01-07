import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  message: string;
}

const EnquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder submit handler
    // TODO: Integrate EmailJS here
    // Example EmailJS integration:
    // import emailjs from '@emailjs/browser';
    // emailjs.send('service_id', 'template_id', formData, 'public_key')
    //   .then(() => { setIsSubmitted(true); })
    //   .catch((error) => { console.error('Failed to send:', error); });

    console.log('Form submitted:', formData);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        message: '',
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="enquiry" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-card p-12 rounded-lg border border-border">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-gold text-3xl">✓</span>
            </div>
            <h3 className="font-serif text-3xl text-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-muted-foreground mb-8">
              Your enquiry has been received. Our team will get back to you 
              within 24 hours with a personalized response.
            </p>
            <Button
              variant="gold"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Make a Reservation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Book Your Stay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you 
            with availability and a personalized quote.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-lg border border-border shadow-card"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <User size={16} className="text-gold" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Phone size={16} className="text-gold" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Mail size={16} className="text-gold" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Check-in Date */}
            <div className="space-y-2">
              <label
                htmlFor="checkIn"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Calendar size={16} className="text-gold" />
                Check-in Date
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground"
              />
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <label
                htmlFor="checkOut"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Calendar size={16} className="text-gold" />
                Check-out Date
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground"
              />
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <MessageSquare size={16} className="text-gold" />
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any special requests or questions..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              variant="gold"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              We typically respond within 2-4 hours during business hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
