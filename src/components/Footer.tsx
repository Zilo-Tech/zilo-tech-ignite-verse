
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ZiloTech</h3>
            <p className="text-blue-200 leading-relaxed">
              Pioneering cutting-edge technology solutions to transform possibilities and elevate your digital experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-blue-200 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-blue-200">
              <p>Bambili, Bamenda, Cameroon</p>
              <p>info@zilotech.org</p>
              <p>+237 681775574</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200">
            © {currentYear} ZiloTech. All rights reserved. Built with passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
