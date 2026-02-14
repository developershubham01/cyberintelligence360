import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart,
  Code,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ✅ Import Logo
import logo from "../assets/logo1.png";

const Footer = () => {

  // ✅ Smooth navigation
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Tools: [
      { name: 'Username Tools', href: '/categories' },
      { name: 'Email Tools', href: '/categories' },
      { name: 'Network Tools', href: '/categories' },
      { name: 'Malware Analysis', href: '/categories' },
      { name: 'Image Tools', href: '/categories' }
    ],
    Resources: [
      { name: 'Documentation', href: '/resources' },
      { name: 'Tutorials', href: '/resources' },
      { name: 'Videos', href: '/resources' },
      { name: 'Research Papers', href: '/resources' },
     
    ],
    Community: [
      { name: 'Forum', href: '/resources' },
      { name: 'Discord', href: '/contact' },
      { name: 'GitHub', href: 'https://github.com/developershubham01', external: true },
      { name: 'Contributors', href: '/about' },
  
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Code of Conduct', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Disclaimer', href: '#' }
    ]
  };

  return (
    <footer className="relative mt-20 border-t border-slate-800">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800">
                <img src={logo} alt="CyberIntelligence360 Logo" className="w-full h-full object-cover" />
              </div>

              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CyberIntelligence360
                </h2>
                <p className="text-sm text-slate-400">Open Source Intelligence Platform</p>
              </div>
            </div>

            <p className="text-slate-400 mb-6 max-w-md">
              A comprehensive collection of ethical hacking and security research tools.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <Github />, href: 'https://github.com/developershubham01' },
                { icon: <Twitter />, href: 'https://x.com/SharmaShub17390' },
                { icon: <Linkedin />, href: 'https://www.linkedin.com/in/shubham-sharma395' },
                { icon: <Mail />, href: 'mailto:developershubham2005@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((linkObj, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    {linkObj.external ? (
                      <a href={linkObj.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 flex gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {linkObj.name}
                      </a>
                    ) : (
                      <Link to={linkObj.href} onClick={handleNavClick} className="text-slate-400 hover:text-blue-400 flex gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {linkObj.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-8 border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 text-sm text-slate-400">
            <div className="flex gap-2 items-center">
              <Code className="w-4 h-4" />
              Made with <Heart className="w-4 h-4 text-red-500" /> by Shubham Sharma 
            </div>
           
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <span>© 2026 CyberIntelligence360</span>

            <a href="/cyberintelligence360.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-blue-400">
              <BookOpen className="w-4 h-4" /> Documentation
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
          <p className="text-sm text-center text-slate-300">
            ⚠️ Educational use only. Unauthorized usage is prohibited.
          </p>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          Reference: <a href="https://osintframework.com/" target="_blank" rel="noopener noreferrer" className="underline">OSINT Framework</a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
