import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DBCategoryHero from "../../components/heroes/DBCategoryHero";

export default function DBCategory() {
  const items = [
    {
      title: "PostGIS Spatial Explorer",
      desc: "Spatial query demos, geometry processing, and map rendering.",
      link: "/projects/postgis-explorer",
    },
    {
      title: "Advanced Web GIS (with PostGIS)",
      desc: "Full-stack geospatial apps with SQL-based filtering and indexing.",
      link: "/projects/advanced-web-gis",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <DBCategoryHero title="Spatial Databases" subtitle="PostGIS demos & SQL examples" />

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
