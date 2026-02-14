import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import { toolsData } from "../data/toolsData";

const ToolsPage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      const sectionId = category.toLowerCase().replace(/\s+/g, "-");

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  }, [location.search]);

 
  const categories = [...new Set(toolsData.map((tool) => tool.category))];

  return (
    <div className="relative z-10 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-10">Tools</h1>

      {categories.map((cat) => {
        const sectionId = cat.toLowerCase().replace(/\s+/g, "-");
        const categoryTools = toolsData.filter((tool) => tool.category === cat);

        return (
          <section key={cat} id={sectionId} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">{cat}</h2>

            {/* ✅ your existing UI component */}
            <CategorySection tools={categoryTools} />
          </section>
        );
      })}
    </div>
  );
};

export default ToolsPage;
