
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary-900">Zeal Fuels</span>
              <br />
              <span className="text-primary">Innovation</span>
            </h1>
            
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                Better Solutions For Your Business
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Ignite Innovation, Transform Possibilities, and Elevate Your Experience in the Digital Era!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Tech Illustration */}
          <div className="relative animate-slide-in">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl p-6 transform -rotate-3">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-primary/20 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="h-8 bg-primary rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-600/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
