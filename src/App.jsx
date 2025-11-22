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

  /* ------------------ PAGE TRANSITION SETUP ------------------ */
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
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

        {/* ========== NAVIGATION WITH ACTIVE HIGHLIGHT ========== */}
        <nav className="flex items-center gap-4">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/gis"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`
            }
          >
            GIS
          </NavLink>

          <NavLink
            to="/machine-learning"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`
            }
          >
            ML
          </NavLink>

          <NavLink
            to="/computer-vision"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`
            }
          >
            CV
          </NavLink>

          <NavLink
            to="/iot"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`
            }
          >
            IoT
          </NavLink>

          <NavLink
            to="/databases"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`
            }
          >
            DB
          </NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            {dark ? "Light" : "Dark"}
          </button>

          <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md">
            Get in touch
          </a>
        </nav>
      </header>

      {/* ------------------ PAGE ROUTES WITH ANIMATION ------------------ */}
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

            {/* Category list pages */}
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
