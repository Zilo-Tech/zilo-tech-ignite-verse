
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Founders from '@/components/Founders';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Founders />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
