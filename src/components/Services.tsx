
const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We specialize in creating responsive, user-friendly, and scalable websites that not only captivate your audience but also drive results.",
      icon: "💻",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "UI/UX Design",
      description: "Our UI/UX design services blend creativity with functionality to leave a lasting impression on your users.",
      icon: "🎨",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Mobile Development",
      description: "Our mobile development services cater to both iOS and Android platforms, ensuring your business reaches users wherever they are.",
      icon: "📱",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Search Engine Optimization",
      description: "We employ strategic optimization techniques to improve your website's search engine rankings, drive organic traffic, and enhance overall online presence.",
      icon: "🔍",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services
          </h2>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Embrace the future with ZiloTech as your technology partner. Whether you're a startup looking 
            for a tech boost or an established enterprise seeking to innovate, we have the solutions to 
            elevate your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-5xl mb-6 group-hover:animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
