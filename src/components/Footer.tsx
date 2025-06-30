import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubscribed, setFooterSubscribed] = useState(false);
  const [footerError, setFooterError] = useState('');
  const [footerLoading, setFooterLoading] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For non-anchor links, navigate normally
      navigate(href);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "/team" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              ZiloTech
            </h3>
            <p className="text-blue-100 leading-relaxed mb-6 text-lg max-w-md">
              Pioneering cutting-edge technology solutions to transform possibilities and elevate your digital experience in the modern era.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                  >
                    <IconComponent size={20} className="text-blue-200 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigation(link.href)}
                    className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block group text-left"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Bambili, Bamenda, Cameroon" },
                { icon: Mail, text: "info@zilotech.org" },
                { icon: Phone, text: "+237 681775574" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 group">
                    <IconComponent size={18} className="text-blue-300 mt-0.5 group-hover:text-white transition-colors" />
                    <span className="text-blue-200 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-blue-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-blue-200 mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
            {footerSubscribed ? (
              <div className="flex items-center justify-center text-white animate-fade-in">
                <span className="text-lg font-semibold">Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={e => {
                  e.preventDefault();
                  setFooterError('');
                  if (!footerEmail) {
                    setFooterError('Please enter your email address.');
                    return;
                  }
                  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(footerEmail)) {
                    setFooterError('Please enter a valid email address.');
                    return;
                  }
                  setFooterLoading(true);
                  setTimeout(() => {
                    setFooterSubscribed(true);
                    setFooterEmail('');
                    setFooterLoading(false);
                    setTimeout(() => setFooterSubscribed(false), 4000);
                  }, 1500);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors"
                  value={footerEmail}
                  onChange={e => setFooterEmail(e.target.value)}
                  disabled={footerLoading}
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-colors hover:scale-105 transform duration-300 flex items-center justify-center"
                  disabled={footerLoading}
                >
                  {footerLoading ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  ) : null}
                  Subscribe
                </button>
              </form>
            )}
            {footerError && <div className="text-red-300 text-sm font-medium mt-2">{footerError}</div>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 text-lg">
            © {currentYear} ZiloTech. All rights reserved. Built with passion for innovation.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-blue-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
