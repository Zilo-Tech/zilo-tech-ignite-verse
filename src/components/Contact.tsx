
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Send size={16} className="mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your digital transformation? Contact us today to discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Contact Information</h3>
            
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Bambili, Bamenda, Cameroon",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@zilotech.org",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+237 681775574",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-lg">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary-600/10 rounded-3xl p-8 text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h4>
              <p className="text-gray-600">We'd love to meet you in person at our Bamenda location.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your first name"
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your last name"
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject
                  </label>
                  <Input 
                    type="text" 
                    placeholder="What's this about?"
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl group"
                >
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
