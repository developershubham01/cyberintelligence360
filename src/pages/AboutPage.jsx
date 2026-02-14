import React from 'react';
import { motion } from 'framer-motion';

import { 
  FaShieldAlt, 
  FaUsers, 
  FaCode, 
  FaGlobe,
  FaHeart,
  FaRocket,
  FaHandshake,
  FaEnvelope
} from 'react-icons/fa';

const AboutPage = () => {

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "All tools are vetted for security and ethical use"
    },
    {
      icon: <FaUsers />,
      title: "Community Driven",
      description: "Built by and for the security community"
    },
    {
      icon: <FaCode />,
      title: "Open Source",
      description: "Transparent code that anyone can audit and improve"
    },
    {
      icon: <FaGlobe />,
      title: "Accessible to All",
      description: "Free resources for learning and research"
    },
    {
      icon: <FaHeart />,
      title: "Ethical Foundation",
      description: "Strict ethical guidelines for all content and tools"
    },
    {
      icon: <FaRocket />,
      title: "Continuous Innovation",
      description: "Regular updates with new tools and techniques"
    }
  ];

  const milestones = [
    { year: "2025", event: "Platform Launch", description: "Started with 50 tools" },
    { year: "2025", event: "Community Growth", description: "Reached 10,000 users" },
    { year: "2026", event: "Tool Expansion", description: "Added 300+ new tools" },
    { year: "2026", event: "Global Reach", description: "Users from 150+ countries" }
  ];

  
  const registerEmail = "developershubham2005@gmail.com";

  return (
    <div className="relative min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About CyberIntelligence360
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-10">
            We're building the world's most comprehensive platform for ethical hacking tools and 
            security research resources, driven by a passionate community of cybersecurity professionals.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Tools" },
              { value: "50k+", label: "Users" },
              { value: "150+", label: "Countries" },
              { value: "24/7", label: "Updates" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-800/30 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To democratize access to security knowledge by providing a comprehensive, 
              free platform where anyone can learn, explore, and contribute to the field 
              of ethical hacking and cybersecurity research.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-800/30 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
              <FaGlobe />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              Creating a world where security knowledge is accessible to all, 
              empowering individuals and organizations to protect themselves 
              through education, collaboration, and open-source innovation.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 text-xl mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                      <div className="text-sm text-blue-400 font-semibold mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{milestone.event}</h4>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-blue-300 text-2xl mx-auto mb-6">
              <FaShieldAlt />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Register Your Tool With Us
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              If you want to submit or register your ethical hacking tool on <span className="text-blue-400 font-semibold">Cyberintelligence360</span>,
              please contact us. We verify tools before listing them publicly.
            </p>

            {/* ✅ Highlight Line */}
            <div className="max-w-3xl mx-auto mb-8 px-6 py-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm">
              <p className="text-slate-200 font-semibold">
                📩 If you want to register your tools with us, mail us below.
              </p>
            </div>

            {/* ✅ Mail Button */}
            <a
              href={`mailto:${registerEmail}?subject=Tool%20Submission%20-%20techshubham2005&body=Hello%20techshubham2005%20Team%2C%0A%0AI%20want%20to%20register%20my%20tool%20on%20your%20platform.%0A%0ATool%20Name%3A%0AWebsite%2FGitHub%20Link%3A%0ACategory%3A%0ADescription%3A%0A%0AThanks%2C%0A`}
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              <FaEnvelope />
              {registerEmail}
            </a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 text-center"
        >
          <FaHandshake className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Whether you're a beginner or an expert, there's a place for you in our community. 
            Contribute, learn, and grow with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all">
              Join Discord
            </button>
            <button className="px-8 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 transition-all">
              Contribute on GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
