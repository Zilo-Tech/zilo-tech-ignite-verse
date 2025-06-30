
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 neural-matrix">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in">
              <Sparkles size={16} className="mr-2" />
              Innovation Starts Here
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-900 to-primary bg-clip-text text-transparent">
                Zeal Fuels
              </span>
              <br />
              <span className="text-primary">Innovation</span>
            </h1>
            
            <div className="mb-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Better Solutions For Your Business
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Ignite Innovation, Transform Possibilities, and Elevate Your Experience in the Digital Era!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="modern-btn modern-btn-primary px-8 py-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Get Started
                <ArrowRight size={20} className="icon-right" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="modern-btn modern-btn-outline px-8 py-4"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - CEO Image */}
          <div className="relative animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-lg mx-auto">
              {/* Main Card with CEO Image */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">ZiloTech</div>
                  </div>
                  
                  {/* Team at Work */}
                  <div className="text-center">
                    <div className="relative w-72 h-72 mx-auto mb-4">
                      <img 
                        src="/assets/images/bill.jpeg" 
                        alt="ZiloTech Team at Work"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Team at Work</h3>
                    <p className="text-primary font-semibold mb-3">Building the Future</p>
                    <div className="bg-primary/10 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-medium">"Ready to Transform Your Business?"</span>
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-primary to-primary-600 rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-600 to-primary rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
