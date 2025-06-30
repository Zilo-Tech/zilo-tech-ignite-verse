import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote, Globe, Smartphone, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    // Business Website/App Testimonials
    {
      name: "Jean-Paul Nguemeta",
      role: "Restaurant Owner, Douala",
      content: "ZiloTech built our restaurant's website and online ordering system. Our online orders increased by 300% and customer engagement improved dramatically. Professional service from start to finish!",
      rating: 5,
      category: "Website Development",
      icon: Globe,
      service: "Restaurant Website & Ordering System"
    },
    {
      name: "Marie Fotso",
      role: "Boutique Owner, Yaoundé",
      content: "They created a beautiful e-commerce website for my fashion boutique. The design is modern, mobile-friendly, and my sales have doubled since launching. Highly recommend ZiloTech!",
      rating: 5,
      category: "E-commerce Development",
      icon: Smartphone,
      service: "E-commerce Website"
    },
    {
      name: "David Kum",
      role: "NGO Director, Bamenda",
      content: "ZiloTech developed our NGO's website and donation platform. They understood our mission and created a site that effectively communicates our cause. Donations increased by 150%!",
      rating: 5,
      category: "Non-Profit Website",
      icon: Globe,
      service: "NGO Website & Donation Platform"
    },
    {
      name: "Grace Asong",
      role: "Clinic Owner, Limbe",
      content: "Our medical clinic app developed by ZiloTech has streamlined patient appointments and records. The user interface is intuitive and our staff loves how easy it is to use.",
      rating: 5,
      category: "Medical App Development",
      icon: Smartphone,
      service: "Medical Clinic Management App"
    },
    
    // Z-Learn User Reviews
    {
      name: "Emmanuel Taku",
      role: "Student, University of Yaoundé",
      content: "Z-Learn is a game-changer! The Z-Bot AI assistant helped me understand complex mathematics concepts. I improved my grades significantly and passed my exams with confidence.",
      rating: 5,
      category: "Z-Learn User",
      icon: GraduationCap,
      service: "Z-Learn Education Platform"
    },
    {
      name: "Dr. Sarah Mbua",
      role: "Student, University of Bamenda",
      content: "The past questions database in Z-Learn is incredible! I had access to 5 years of exam papers with detailed solutions. It's like having a personal tutor 24/7.",
      rating: 5,
      category: "Z-Learn User",
      icon: GraduationCap,
      service: "Z-Learn Education Platform"
    },
    {
      name: "Princella Nkeng",
      role: "Advanced Level Student, GBHS Kumba",
      content: "Z-Learn's chat forums connected me with other students preparing for the same exams. We formed study groups and helped each other. My A-Level results were outstanding!",
      rating: 5,
      category: "Z-Learn User",
      icon: GraduationCap,
      service: "Z-Learn Education Platform"
    },
    {
      name: "Boris Fonyuy",
      role: "GCE Student, Buea",
      content: "The announcements feature kept me updated about exam dates and changes. Z-Bot explained every question I had trouble with. I recommend Z-Learn to every student in Cameroon!",
      rating: 5,
      category: "Z-Learn User",
      icon: GraduationCap,
      service: "Z-Learn Education Platform"
    }
  ];

  const getCategoryColor = (category: string) => {
    if (category.includes('Z-Learn')) return 'from-blue-500 to-indigo-600';
    if (category.includes('Website')) return 'from-green-500 to-emerald-600';
    if (category.includes('App')) return 'from-purple-500 to-violet-600';
    if (category.includes('E-commerce')) return 'from-orange-500 to-red-500';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Quote size={16} className="mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            What Our Clients & Users Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Real testimonials from businesses we've helped digitize and students who've succeeded with Z-Learn
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center bg-gradient-to-r ${getCategoryColor(testimonial.category)} px-3 py-1 rounded-full text-xs font-medium text-white`}>
                          <IconComponent size={14} className="mr-2" />
                          {testimonial.category}
                        </div>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Service */}
                      <div className="text-blue-200 text-sm font-medium mb-4">
                        {testimonial.service}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-white/90 text-base leading-relaxed mb-6 italic flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="mt-auto">
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-blue-200 text-sm">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>

        {/* Mobile indicators */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="text-blue-200 text-sm">
            Swipe to see more testimonials →
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
