import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/* PAGES */
import Home from "./pages/Home";

/* CATEGORY PAGES */
import CategoryGIS from "./pages/categories/GISCategory";
import CategoryML from "./pages/categories/MLCategory";
import CategoryCV from "./pages/categories/CVCategory";
import CategoryIoT from "./pages/categories/IoTCategory";
import CategoryDB from "./pages/categories/DBCategory";

/* PROJECT PAGES */
import GISAutomation from "./pages/projects/GISAutomation";
import FloodDashboard from "./pages/projects/FloodDashboard";
import AdvancedWebGIS from "./pages/projects/AdvancedWebGIS";
import SpatialML from "./pages/projects/SpatialML";
import SatelliteSeg from "./pages/projects/SatelliteSegmentation";
import SensorDashboard from "./pages/projects/SensorDashboard";
import PostGISExplorer from "./pages/projects/PostGISExplorer";

export default function App() {
  /* ---------------------- DARK MODE ---------------------- */
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("q-dark");
    if (saved) return saved === "1";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("q-dark", dark ? "1" : "0");
  }, [dark]);

  /* ------------------ MOBILE NAVIGATION ------------------ */
  const [menuOpen, setMenuOpen] = useState(false);

  /* ------------------ PAGE TRANSITION SETUP ------------------ */
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  /* ---------- NAV LINK STYLE FUNCTION ---------- */
  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md text-sm transition ${
      isActive
        ? "bg-primary text-white"
        : "text-gray-700 dark:text-gray-300 hover:text-primary"
    }`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
            QN
          </div>
          <div>
            <h1 className="text-lg font-semibold">Qambar Naqvi</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              GIS • Machine Learning • Web GIS
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/gis" className={navLinkClass}>GIS</NavLink>
          <NavLink to="/machine-learning" className={navLinkClass}>ML</NavLink>
          <NavLink to="/computer-vision" className={navLinkClass}>CV</NavLink>
          <NavLink to="/iot" className={navLinkClass}>IoT</NavLink>
          <NavLink to="/databases" className={navLinkClass}>DB</NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            {dark ? "Light" : "Dark"}
          </button>

          <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md">
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-100 dark:bg-gray-800 px-6 py-4 space-y-2"
          >
            <NavLink onClick={() => setMenuOpen(false)} to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/gis" className={navLinkClass}>GIS</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/machine-learning" className={navLinkClass}>ML</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/computer-vision" className={navLinkClass}>CV</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/iot" className={navLinkClass}>IoT</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/databases" className={navLinkClass}>DB</NavLink>

            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 rounded-md border"
            >
              {dark ? "Light" : "Dark"}
            </button>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 bg-primary text-white rounded-md"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAGE ROUTES WITH ANIMATION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/gis" element={<CategoryGIS />} />
            <Route path="/machine-learning" element={<CategoryML />} />
            <Route path="/computer-vision" element={<CategoryCV />} />
            <Route path="/iot" element={<CategoryIoT />} />
            <Route path="/databases" element={<CategoryDB />} />

            {/* Projects */}
            <Route path="/projects/gis-automation" element={<GISAutomation />} />
            <Route path="/projects/flood-dashboard" element={<FloodDashboard />} />
            <Route path="/projects/advanced-web-gis" element={<AdvancedWebGIS />} />
            <Route path="/projects/spatial-ml" element={<SpatialML />} />
            <Route path="/projects/satellite-segmentation" element={<SatelliteSeg />} />
            <Route path="/projects/sensor-dashboard" element={<SensorDashboard />} />
            <Route path="/projects/postgis-explorer" element={<PostGISExplorer />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}