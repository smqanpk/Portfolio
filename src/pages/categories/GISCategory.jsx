import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GISCategoryHero from "../../components/heroes/GISCategoryHero";

export default function GISCategory() {
  const items = [
    {
      title: "GIS Automation Tools",
      desc: "Batch processing, reprojections, automated map exports using ArcPy & GeoPandas.",
      link: "/projects/gis-automation",
    },
    {
      title: "Real-Time Flood Mapping Dashboard",
      desc: "A live data pipeline with map visualization, alerts, and hydro models.",
      link: "/projects/flood-dashboard",
    },
    {
      title: "Advanced Web GIS App",
      desc: "Leaflet/Mapbox front-end, PostGIS backend, and real-time interactivity.",
      link: "/projects/advanced-web-gis",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <GISCategoryHero title="GIS Projects" subtitle="Tools, dashboards and automation pipelines" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((p) => (
          <Link
            key={p.title}
            to={p.link}
            className="block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-850 hover:shadow-lg"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{p.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
