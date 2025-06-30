
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Z-Learn",
      description: "Z-Learn is a mobile app that provides students going in for exams with exam resources to use in preparation. It offers several features such as past questions, mark guides, Z-Bot, chat forums, announcements, and more.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      action: "Download",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Yamo",
      description: "Yamo is a food booking app that allows people to order food from the comfort of their homes, providing an excellent experience for users.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      action: "Download",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "ContriTok",
      description: "ContriTok is an app that allows Cameroonians to learn their mother tongues and culture, all in one place.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      action: "Download",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "BOLO",
      description: "BOLO is a local job search platform for Cameroonians to find local and unprofessional jobs easily.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      action: "Visit",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "CyberShield",
      description: "CyberShield is a mobile app that sensitizes Cameroonians on how to stay safe on the internet.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      action: "Download",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our innovative projects that are transforming industries and empowering users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border-0 bg-white/70 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary-900 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </CardDescription>
                <Button 
                  className="w-full bg-primary hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  {project.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
