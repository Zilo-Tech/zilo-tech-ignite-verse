import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Users, 
  Target, 
  Rocket, 
  Lightbulb, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  TrendingUp,
  Star
} from 'lucide-react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We listen, understand, and deliver solutions tailored to your unique needs."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in all our interactions."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "50+ Projects",
      description: "Successfully delivered across various industries"
    },
    {
      icon: Users,
      title: "100+ Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Globe,
      title: "5+ Countries",
      description: "Serving clients across multiple continents"
    },
    {
      icon: TrendingUp,
      title: "5 Years",
      description: "Of consistent growth and innovation"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "ZiloTech was founded with a vision to transform businesses through innovative technology solutions."
    },
    {
      year: "2020",
      title: "First Major Project",
      description: "Launched our first major educational platform, setting the foundation for our EdTech expertise."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to include specialists in mobile development, UI/UX design, and digital marketing."
    },
    {
      year: "2022",
      title: "Market Recognition",
      description: "Received recognition as one of the top emerging tech companies in Cameroon."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded our services internationally, serving clients across Africa and beyond."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established our innovation lab, focusing on AI, blockchain, and emerging technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-matrix opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About ZiloTech
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            We are more than just a tech company. We are pioneers, trailblazing through the realms of cutting-edge technology to bring you solutions that exceed expectations.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses and individuals with innovative technology solutions that drive growth, 
                  enhance productivity, and create meaningful impact in the digital world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To be Africa's leading technology innovation hub, recognized globally for creating 
                  transformative solutions that bridge the digital divide and foster sustainable development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and continuous growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a recognized technology leader - here's our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8 relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30 last:hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join the growing list of satisfied clients who have transformed their businesses with ZiloTech's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4">
                Meet Our Team
                <Users size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
