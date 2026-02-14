import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToolCard from "./ToolCard";
import { Grid3x3, LayoutGrid, List } from "lucide-react";

const CategorySection = ({ tools }) => {
  const [viewMode, setViewMode] = React.useState("grid");

  
  const [showAll, setShowAll] = React.useState(false);
  const visibleTools = showAll ? tools : tools.slice(0, 6);

  if (tools.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
          <div className="text-4xl">🔍</div>
        </div>
        <h3 className="text-2xl font-bold mb-3">No tools found</h3>
        <p className="text-slate-400 max-w-md mx-auto">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </motion.div>
    );
  }

  return (
    <section id="tools" className="py-12">
      {/* View Controls */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Available Tools{" "}
          <span className="text-blue-400">
            ({showAll ? tools.length : visibleTools.length})
          </span>
        </h2>

        <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-1">
          {[
            { mode: "grid", icon: <Grid3x3 className="w-4 h-4" /> },
            { mode: "compact", icon: <LayoutGrid className="w-4 h-4" /> },
            { mode: "list", icon: <List className="w-4 h-4" /> },
          ].map(({ mode, icon }) => (
            <motion.button
              key={mode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setViewMode(mode)}
              className={`p-2 rounded-lg transition-all ${
                viewMode === mode
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {icon}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : viewMode === "compact"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {visibleTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {tools.length > 6 && (
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            {showAll ? "Show Less Tools" : "Load More Tools"}
          </motion.button>

          <p className="text-sm text-slate-500 mt-4">
            Showing {visibleTools.length} of {tools.length} tools
          </p>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
