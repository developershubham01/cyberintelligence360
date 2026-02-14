import React from "react";
import { Menu, X, Github } from "lucide-react";
import { FaXTwitter , FaLinkedin } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
  <header className="sticky top-0 z-50">
  <div className="px-4 pt-4">
    <div className="rounded-2xl backdrop-blur-lg bg-slate-900/80 border border-slate-800 shadow-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="CyberIntelligence360 Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>

              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CyberIntelligence360
                </h1>
                <p className="text-xs text-slate-400">
                  Open Source Intelligence Platform
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className="text-slate-300 hover:text-blue-400 transition font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="hidden md:flex items-center gap-3">

           {/* Github */}
  <motion.a
    href="https://github.com/developershubham01"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-gray-300 transition"
  >
    <Github className="w-5 h-5" />
  </motion.a>

  {/* Twitter / X */}
  <motion.a
    href="https://x.com/SharmaShub17390?t=z37rSDFHOw4__yRDmESlMQ&s=09"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-sky-400 transition"
  >
    <FaXTwitter className="w-5 h-5" />
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/in/shubham-sharma395/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-blue-500 transition"
  >
    <FaLinkedin className="w-5 h-5" />
  </motion.a>

            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-slate-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
              
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
 <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden border-t border-slate-800"
    >
      <div className="px-6 py-4 flex flex-col gap-4">

        {/* Navigation Links */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={handleNavClick}
            className="text-slate-300 hover:text-blue-400"
          >
            {item.name}
          </Link>
        ))}

        {/* Social Icons Row */}
        <div className="flex justify-center gap-4 pt-3 border-t border-slate-800
">

          {/* Github */}
          <motion.a
            href="https://github.com/developershubham01"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-gray-300 transition"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          {/* Twitter / X */}
          <motion.a
            href="https://x.com/SharmaShub17390?t=z37rSDFHOw4__yRDmESlMQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-sky-400 transition"
          >
            <FaXTwitter className="w-5 h-5" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shubham-sharma395/"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-blue-500 transition"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>

        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

</div>
      </div>
    </header>
  );
};

export default Navbar;
