import React from 'react';
import { ExternalLink, Star, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ToolCard = ({ tool, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Username: 'from-blue-500 to-cyan-500',
      Email: 'from-purple-500 to-pink-500',
      Network: 'from-green-500 to-emerald-500',
      Malware: 'from-red-500 to-orange-500',
      Reconnaissance: 'from-yellow-500 to-amber-500',
      Visualization: 'from-indigo-500 to-purple-500',
      Automation: 'from-teal-500 to-cyan-500',
      Google: 'from-blue-500 to-red-500',
      Images: 'from-pink-500 to-rose-500',
      Metadata: 'from-slate-500 to-gray-500',
      Archives: 'from-amber-500 to-yellow-500',
      Exploitation: 'from-red-500 to-pink-500',
      'Web Security': 'from-emerald-500 to-green-500',
    };
    return colors[category] || 'from-slate-500 to-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group relative"
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-30 transition duration-500 blur-xl rounded-2xl"></div>

      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover-card">
        
        {/* Category Badge */}
        <div className="absolute -top-3 left-4">
          <div
            className={`px-4 py-1.5 bg-gradient-to-r ${getCategoryColor(
              tool.category
            )} text-white text-xs font-bold rounded-full flex items-center gap-2`}
          >
            <span>{tool.icon}</span>
            <span>{tool.category}</span>
          </div>
        </div>

        {/* Tool Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {tool.name}
            </h3>

            {/* External Link Icon */}
            <motion.a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </motion.a>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Features List */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-slate-400">FEATURES</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Open Source', 'Active', 'Documented', 'Free'].map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-800/50 text-xs text-slate-300 rounded-full border border-slate-700"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>4.8</span>
            <span className="text-slate-500">•</span>
            <span>2.4k stars</span>
          </div>

          {/* Visit Button */}
          <div className="flex gap-2">
            <motion.a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 text-sm font-medium rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all flex items-center gap-2"
            >
              <Globe className="w-3 h-3" />
              Visit
            </motion.a>
          </div>
        </div>

        {/* Security Badge */}
        <div className="absolute -bottom-2 -right-2">
          <div className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-lg flex items-center gap-2">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-300">Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
    
  );
};

export default ToolCard;
