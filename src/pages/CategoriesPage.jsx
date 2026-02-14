import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUserCircle,
  FaEnvelope,
  FaNetworkWired,
  FaVirus,
  FaEye,
  FaSearch,
  FaShieldAlt,
  FaCode,
  FaImage,
  FaDatabase,
  FaMapMarkedAlt,
  FaLock
} from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const navigate = useNavigate();

  // ✅ Search state
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Pills active tab state
  const [activeTab, setActiveTab] = useState("All Tools");

  // ✅ Pills Tabs (like screenshot)
  const topTabs = [
    "All Tools",
    "OSINT Tools",
    "Username",
    "Email",
    "Google",
    "Domain",
    "Network",
    "Archives",
    "Malware",
    "Geo",
    "Images",
    "Social Media",
    "Metadata"
  ];

  const categories = [
    {
      id: 1,
      name: "Username Investigation",
      icon: <FaUserCircle />,
      description: "Tools for finding social media accounts and online presence by username",
      tools: 45,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Email Analysis",
      icon: <FaEnvelope />,
      description: "Email finders, verifiers, and breach data checkers",
      tools: 32,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Network Intelligence",
      icon: <FaNetworkWired />,
      description: "Network scanners, IP analysis, and infrastructure discovery tools",
      tools: 67,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Malware Analysis",
      icon: <FaVirus />,
      description: "Sandboxes, malware scanners, and threat intelligence platforms",
      tools: 28,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      name: "Reconnaissance",
      icon: <FaEye />,
      description: "Information gathering and footprinting tools",
      tools: 51,
      color: "from-yellow-500 to-amber-500"
    },
    {
      id: 6,
      name: "Image Analysis",
      icon: <FaImage />,
      description: "Reverse image search, metadata extraction, and forensics",
      tools: 23,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 7,
      name: "Domain Intelligence",
      icon: <FaShieldAlt />,
      description: "WHOIS lookup, DNS analysis, and domain monitoring",
      tools: 38,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 8,
      name: "Code Analysis",
      icon: <FaCode />,
      description: "Source code scanners, secret finders, and vulnerability detectors",
      tools: 29,
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 9,
      name: "Database Tools",
      icon: <FaDatabase />,
      description: "Data leak finders, breach databases, and public records",
      tools: 42,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 10,
      name: "Geolocation",
      icon: <FaMapMarkedAlt />,
      description: "IP geolocation, map analysis, and location intelligence",
      tools: 19,
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 11,
      name: "Encryption & Security",
      icon: <FaLock />,
      description: "Encryption tools, security headers analyzers, and SSL checkers",
      tools: 36,
      color: "from-gray-500 to-slate-500"
    },
    {
      id: 12,
      name: "Threat Intelligence",
      icon: <MdSecurity />,
      description: "Threat feeds, IOC databases, and security advisories",
      tools: 31,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 13,
      name: "OSINT Tools",
      icon: <MdSecurity />,
      description: "Threat feeds, IOC databases, and security advisories",
      tools: 841,
      color: "from-red-500 to-pink-500"
    }
  ];

  // ✅ Tabs + Search filter
  const filteredCategories = categories.filter((category) => {
    const q = searchTerm.toLowerCase().trim();

    // Search match
    const matchesSearch =
      !q ||
      category.name.toLowerCase().includes(q) ||
      category.description.toLowerCase().includes(q);

    // Tabs match
    const tab = activeTab.toLowerCase();

    const matchesTab =
      activeTab === "All Tools" ||
      category.name.toLowerCase().includes(tab) ||
      category.description.toLowerCase().includes(tab);

    return matchesSearch && matchesTab;
  });

  const handleExplore = (categoryName) => {
    navigate(`/tools?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="relative min-h-screen py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tool Categories
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Browse through our comprehensive collection of ethical hacking tools organized by category.
            Each category contains specialized tools for specific security research tasks.
          </p>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
              <span className="text-slate-300">
                <span className="text-emerald-400 font-bold">
                  {categories.reduce((acc, cat) => acc + cat.tools, 0)}+
                </span>{" "}
                Tools
              </span>
            </div>
            <div className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
              <span className="text-slate-300">
                <span className="text-blue-400 font-bold">{categories.length}</span> Categories
              </span>
            </div>
          </div>
        </motion.div>

        {/* ✅ Pills Tabs (Added) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 overflow-x-auto"
        >
          <div className="flex gap-3 min-w-max pb-2">
            {topTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
            />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition duration-500 blur-xl rounded-2xl"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0">
                  <div className={`w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 transform translate-x-12 -translate-y-12 rotate-45`}></div>
                </div>

                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 text-white text-2xl`}>
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {category.name}
                </h3>

                <p className="text-slate-300 mb-6">{category.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-300">{category.tools} tools</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleExplore(category.name)}
                    className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 text-sm font-medium rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all group-hover:translate-x-2"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-slate-400">No categories found matching your search.</p>
            </div>
          )}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-800/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-slate-300">Total Tools</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-800/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-slate-300">Updated Daily</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 border border-emerald-800/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-slate-300">Open Source</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;
