import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Rooms from '@/components/sections/Rooms';
import Gallery from '@/components/sections/Gallery';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import EnquiryForm from '@/components/sections/EnquiryForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Gallery />
        <About />
        <Contact />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
