import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Rooms from '@/sections/Rooms';
import Gallery from '@/sections/Gallery';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import EnquiryForm from '@/sections/EnquiryForm';

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
