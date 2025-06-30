import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Basic email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden tech-particles">
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
              {success ? (
                <div className="flex flex-col items-center justify-center text-green-600 animate-fade-in">
                  <CheckCircle size={32} className="mb-2" />
                  <span className="text-lg font-semibold">Thank you! Your message has been sent. We'll get back to you soon.</span>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        name="name"
                        placeholder="Your first name"
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                        value={form.name}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email
                      </label>
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="Your email address"
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                        value={form.email}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject
                    </label>
                    <Input 
                      type="text" 
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors"
                      value={form.subject}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary transition-colors resize-none"
                      value={form.message}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  {error && <div className="text-red-600 text-sm font-medium">{error}</div>}

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl group flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
