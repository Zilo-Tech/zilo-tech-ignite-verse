import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Founders from '@/components/Founders';
import Services from '@/components/Services';
import Partnership from '@/components/Partnership';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Founders />
      <Services />
      <Partnership />
      <Blog />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
