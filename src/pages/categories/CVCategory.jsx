import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CVCategoryHero from "../../components/heroes/CVCategoryHero";

export default function CVCategory() {
  const items = [
    {
      title: "Object Detection",
      desc: "YOLO / DETR real-time demos for images & videos.",
      link: "/projects/cv",
    },
    {
      title: "Face Recognition",
      desc: "Embedding-based authentication and feature extraction pipelines.",
      link: "/projects/cv",
    },
    {
      title: "Satellite Image Segmentation",
      desc: "Deep learning segmentation tailored to high-resolution imagery.",
      link: "/projects/satellite-segmentation",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <CVCategoryHero title="Computer Vision" subtitle="Realtime detection, segmentation & mapping" />

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
