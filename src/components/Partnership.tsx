
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Handshake, 
  TrendingUp, 
  Globe, 
  Users, 
  Lightbulb, 
  Target,
  ArrowRight,
  DollarSign,
  Building,
  Award
} from 'lucide-react';

const Partnership = () => {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate with us to integrate cutting-edge solutions and expand your tech capabilities.",
      icon: Lightbulb,
      benefits: ["Joint Product Development", "Technology Integration", "Market Expansion"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Channel Partners",
      description: "Join our network of resellers and distributors to reach new markets across Africa.",
      icon: Globe,
      benefits: ["Revenue Sharing", "Marketing Support", "Training Programs"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Strategic Investors",
      description: "Invest in ZiloTech's growth and be part of Africa's tech revolution.",
      icon: TrendingUp,
      benefits: ["High ROI Potential", "Market Leadership", "Innovation Access"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const investmentHighlights = [
    {
      icon: DollarSign,
      title: "Growing Revenue",
      value: "300% YoY",
      description: "Consistent revenue growth"
    },
    {
      icon: Users,
      title: "User Base",
      value: "10K+",
      description: "Active users across platforms"
    },
    {
      icon: Building,
      title: "Market Size",
      value: "$2.5B",
      description: "African EdTech market"
    },
    {
      icon: Award,
      title: "Recognition",
      value: "Top 10",
      description: "African Tech Startups"
    }
  ];

  return (
    <section id="partnership" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Handshake size={16} className="mr-2" />
            Partnership & Investment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Partner With Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join forces with ZiloTech to shape the future of technology in Africa. Whether you're looking 
            to partner or invest, we offer compelling opportunities for growth and impact.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partnershipTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Investment Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Investment Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-fade-in bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{highlight.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{highlight.title}</div>
                  <div className="text-sm text-gray-600">{highlight.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-12 text-white" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can create mutual value and drive innovation together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4">
              Partnership Inquiry
              <Handshake size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4">
              Investment Details
              <TrendingUp size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
