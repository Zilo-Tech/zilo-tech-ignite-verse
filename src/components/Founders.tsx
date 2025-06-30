import { Quote, Linkedin, Twitter, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Founders = () => {
  const founders = [
    {
      name: "Nyuydine Bill",
      role: "CEO | Founder",
      quote: "Believe in Possibilities!",
      image: "/assets/images/nyuydine.jpeg",
      bio: "Visionary leader with a passion for transforming ideas into reality.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Kongyuy Livingston",
      role: "CTO | Founder",
      quote: "In the midst of difficulty lies opportunity.",
      image: "/assets/images/kongnyuy.jpeg",
      bio: "Tech innovator dedicated to building scalable solutions that meets client goals.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="founders" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden glowing-orbs">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote size={16} className="mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary founders of ZiloTech, who are dedicated to driving innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8 inline-block">
                {/* Main Image */}
                <div className="relative w-64 h-64 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating Gradient Ring */}
                <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-primary to-primary-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Social Icons */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href={founder.social.linkedin} className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={founder.social.twitter} className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {founder.name}
                </h3>
                <p className="text-primary font-semibold text-lg">
                  {founder.role}
                </p>
                <p className="text-gray-600 max-w-md mx-auto">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Team Button */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/team">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Users size={20} className="mr-3 group-hover:animate-pulse" />
              View Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Founders;
