import React from 'react';
import { Shield, Zap, Lock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { useNavigate } from 'react-router-dom'; // ✅ added

const Hero = () => {
  const navigate = useNavigate(); // ✅ added

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "All tools vetted for ethical use"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Efficient",
      description: "Quick access to essential tools"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Focused",
      description: "Respect for user privacy"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Open Source",
      description: "Community-driven platform"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto animate-float">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>

        <AnimatedText
          text="Master the Art of Digital Investigation"
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          animationType="slideDown"
          delay={0.2}
        />

        <AnimatedText
          text="Discover, Analyze, and Secure with our comprehensive collection of ethical hacking tools and resources for cybersecurity professionals and researchers."
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          animationType="fadeIn"
          delay={0.4}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {/* ✅ Explore Tools working */}
          <button
            onClick={() => navigate('/tools')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-blue-500/25"
          >
            Explore Tools
          </button>

          {/* ✅ View Documentation working */}
          <button
            onClick={() => navigate('/resources')}
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Documentation
          </button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all mx-auto">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
      >
        {[
          { value: "500+", label: "Tools" },
          { value: "50+", label: "Categories" },
          { value: "24/7", label: "Updates" }
        ].map((stat, index) => (
          <div key={index} className="relative">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
