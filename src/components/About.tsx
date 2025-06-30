
import { Rocket, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Unleash Your Potential",
      description: "Welcome to ZiloTech, where we empower individuals and businesses to unlock their full potential. Our innovative solutions are designed to inspire creativity, spark new ideas, and drive growth.",
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Exceptional Support",
      description: "At ZiloTech, we believe in providing exceptional support to our clients. Our dedicated team is committed to your success and is always ready to assist you at every step.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden circuit-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users size={16} className="mr-2" />
            About ZiloTech
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are more than just a tech startup. We are pioneers, trailblazing through the realms of 
            cutting-edge technology to bring you solutions that not only meet but exceed your expectations. 
            With a passion for innovation and a commitment to excellence, we're here to transform the way 
            you engage with technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '100+', label: 'Happy Clients' },
            { number: '5', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
