
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ExternalLink, Smartphone, Utensils, Globe, Shield, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Z-Learn",
      description: "Z-Learn is a mobile app that provides students going in for exams with exam resources to use in preparation. It offers several features such as past questions, mark guides, Z-Bot, chat forums, announcements, and more.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      action: "Download",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
      category: "Education"
    },
    {
      title: "Yamo",
      description: "Yamo is a food booking app that allows people to order food from the comfort of their homes, providing an excellent experience for users.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      action: "Download",
      icon: Utensils,
      gradient: "from-green-500 to-emerald-600",
      category: "Food & Delivery"
    },
    {
      title: "ContriTok",
      description: "ContriTok is an app that allows Cameroonians to learn their mother tongues and culture, all in one place.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      action: "Download",
      icon: Globe,
      gradient: "from-purple-500 to-violet-600",
      category: "Culture & Language"
    },
    {
      title: "BOLO",
      description: "BOLO is a local job search platform for Cameroonians to find local and unprofessional jobs easily.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      action: "Visit",
      icon: Smartphone,
      gradient: "from-orange-500 to-red-500",
      category: "Job Platform"
    },
    {
      title: "CyberShield",
      description: "CyberShield is a mobile app that sensitizes Cameroonians on how to stay safe on the internet.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      action: "Download",
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      category: "Cybersecurity"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone size={16} className="mr-2" />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our innovative projects that are transforming industries and empowering users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <Button 
                    className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg group`}
                  >
                    {project.action}
                    {project.action === "Download" ? (
                      <Download size={16} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                    ) : (
                      <ExternalLink size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
