import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import CategoriesPage from "./pages/CategoriesPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { toolsData } from "./data/toolsData";
import ToolsPage from "./pages/ToolsPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(toolsData);

  const categories = [...new Set(toolsData.map(tool => tool.category))];

  useEffect(() => {
    let filtered = toolsData;

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        tool => tool.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    setFilteredData(filtered);
  }, [activeCategory]);

  return (
    <Router>
        <ScrollToTop />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navbar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <main className="container mx-auto px-4 py-12">
                  <CategorySection tools={filteredData} />
                </main>
              </>
            }
          />

          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/tools"
            element={
              <ToolsPage
                tools={filteredData}
                activeCategory={activeCategory}
              />
            }
          />
        </Routes>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
