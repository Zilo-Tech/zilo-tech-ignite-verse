import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
      setLoading(false);
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates about ZiloTech's latest innovations.",
      });
      setTimeout(() => setIsSubscribed(false), 4000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
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
                disabled={loading}
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 whitespace-nowrap group flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          )}
          {error && <div className="text-red-300 text-sm font-medium mt-2">{error}</div>}
          <p className="text-blue-200 text-sm mt-4 opacity-80">
            Join 5,000+ tech enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
