import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaFilePdf, FaGraduationCap, FaTools, FaCode } from 'react-icons/fa';
import { SiReadthedocs } from 'react-icons/si';
import { resourcesData } from '../data/resourcesData';

const ResourcesPage = () => {

  
  const getIcon = (key) => {
    const iconMap = {
      book: <FaBook />,
      video: <FaVideo />,
      pdf: <FaFilePdf />,
      graduation: <FaGraduationCap />,
      docs: <SiReadthedocs />,
      code: <FaCode />,
    };
    return iconMap[key] || <FaTools />;
  };


  const resources = resourcesData.map((r) => ({
    ...r,
    icon: getIcon(r.iconKey),
  }));

  return (
    <div className="relative min-h-screen py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Learning Resources
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive collection of tutorials, guides, documentation, and learning materials 
            to help you master ethical hacking and security research.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: "150+", label: "Guides", color: "text-blue-400" },
            { value: "45+", label: "Video Tutorials", color: "text-purple-400" },
            { value: "80+", label: "Cheat Sheets", color: "text-emerald-400" },
            { value: "25+", label: "Courses", color: "text-amber-400" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
{/* Documentation PDF Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="flex justify-center mb-12"
>
  <a
    href="/cyberintelligence360.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
  >
    <FaFilePdf className="text-xl" />
    View Documentation PDF
  </a>
</motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
            >
              {/* Resource Header */}
              <div className={`bg-gradient-to-r ${resource.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-xl">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{resource.category}</h3>
                      <p className="text-white/80 text-sm">{resource.items.length} resources</p>
                    </div>
                  </div>
                  <div className="text-white text-3xl opacity-20">
                    {resource.icon}
                  </div>
                </div>
              </div>

              {/* Resource Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {resource.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      className="group flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20">
                          <FaTools className="text-slate-400 group-hover:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white group-hover:text-blue-300">{item.name}</h4>
                          <div className="flex items-center space-x-3 mt-1">
                            <span className="text-xs px-2 py-1 bg-slate-800/50 rounded">
                              {item.type}
                            </span>
                            <span className="text-xs text-slate-400">
                              {item.size || item.duration || item.pages || item.updated || item.language || "Free"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all text-sm font-medium"
                      >
                        Download
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

             
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-blue-800/30 rounded-2xl p-8 text-center"
        >
          <FaGraduationCap className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Start Learning Today</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Access all resources for free. Join our community of security researchers 
            and enhance your skills with our comprehensive learning materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all">
              Join Community
            </button>
            <button className="px-8 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 transition-all">
              Request Resource
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;
