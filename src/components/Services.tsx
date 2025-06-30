
import { Code, Palette, Smartphone, Search, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We specialize in creating responsive, user-friendly, and scalable websites that not only captivate your audience but also drive results.",
      icon: Code,
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"]
    },
    {
      title: "UI/UX Design",
      description: "Our UI/UX design services blend creativity with functionality to leave a lasting impression on your users.",
      icon: Palette,
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      title: "Mobile Development",
      description: "Our mobile development services cater to both iOS and Android platforms, ensuring your business reaches users wherever they are.",
      icon: Smartphone,
      features: ["Native Apps", "Cross-Platform", "App Store Optimization", "Maintenance"]
    },
    {
      title: "Search Engine Optimization",
      description: "We employ strategic optimization techniques to improve your website's search engine rankings, drive organic traffic, and enhance overall online presence.",
      icon: Search,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Code size={16} className="mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Services
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Embrace the future with ZiloTech as your technology partner. Whether you're a startup looking 
            for a tech boost or an established enterprise seeking to innovate, we have the solutions to 
            elevate your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-blue-100 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-blue-200 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <button className="inline-flex items-center text-white hover:text-blue-200 transition-colors group/btn">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
