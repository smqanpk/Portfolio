import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MLCategoryHero from "../../components/heroes/MLCategoryHero";

export default function MLCategory() {
  const items = [
    {
      title: "Spatial ML",
      desc: "Raster-vector fusion models for land cover & environmental prediction.",
      link: "/projects/spatial-ml",
    },
    {
      title: "Satellite Image Segmentation",
      desc: "Deep learning segmentation for roads, water, buildings, crops and more.",
      link: "/projects/satellite-segmentation",
    },
    {
      title: "ML Pipelines",
      desc: "End-to-end data engineering & ML training workflows.",
      link: "/projects/ml",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <MLCategoryHero title="Machine Learning" subtitle="Spatial ML, segmentation, and pipelines" />

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
