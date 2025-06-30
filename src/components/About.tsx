
const About = () => {
  const features = [
    {
      title: "Unleash Your Potential",
      description: "Welcome to ZiloTech, where we empower individuals and businesses to unlock their full potential. Our innovative solutions are designed to inspire creativity, spark new ideas, and drive growth.",
      icon: "🚀"
    },
    {
      title: "Exceptional Support",
      description: "At ZiloTech, we believe in providing exceptional support to our clients. Our dedicated team is committed to your success and is always ready to assist you at every step.",
      icon: "🎯"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are more than just a tech startup. We are pioneers, trailblazing through the realms of 
            cutting-edge technology to bring you solutions that not only meet but exceed your expectations. 
            With a passion for innovation and a commitment to excellence, we're here to transform the way 
            you engage with technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-blue-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
