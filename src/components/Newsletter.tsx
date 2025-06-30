
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about ZiloTech's latest innovations.",
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Mail size={16} className="mr-2" />
            Stay Connected
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get the Latest Tech Insights
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Subscribe to our newsletter for exclusive updates on African tech innovations, 
            ZiloTech product launches, and industry insights delivered straight to your inbox.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center text-white animate-fade-in">
              <CheckCircle size={24} className="mr-3 text-green-300" />
              <span className="text-lg font-semibold">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 backdrop-blur-sm"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 whitespace-nowrap group"
              >
                Subscribe
                <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-blue-200 text-sm mt-4 opacity-80">
            Join 5,000+ tech enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
