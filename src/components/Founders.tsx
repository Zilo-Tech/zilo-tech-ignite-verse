
const Founders = () => {
  const founders = [
    {
      name: "Nyuydine Bill",
      role: "CEO | Founder",
      quote: "Believe in Possibilities!",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Kongyuy Livingston",
      role: "CTO | Founder",
      quote: "In the midst of difficulty lies opportunity.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our Founders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary founders of ZiloTech, who are dedicated to driving innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary-600/20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                {founder.name}
              </h3>
              <p className="text-primary font-semibold text-lg mb-4">
                {founder.role}
              </p>
              <blockquote className="text-gray-600 italic text-lg font-medium">
                "{founder.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
