import React from "react";
import { motion } from "framer-motion";
import MLHero from "../../components/heroes/MLHero";

export default function SpatialML() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <MLHero title="Spatial Machine Learning" subtitle="Raster + vector models for land cover & prediction" />

      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mt-8 mb-4"
      >
        Spatial Machine Learning
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        ML models combining raster and vector inputs to predict land cover, 
        flood susceptibility, road extraction, and environmental patterns.
      </p>

      <div className="w-full h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-10">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          [Placeholder: ML model diagram / prediction map]
        </span>
      </div>

      <h2 className="text-xl font-semibold">Tech Stack</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>PyTorch / TensorFlow</li>
        <li>Rasterio / GDAL</li>
        <li>GeoPandas / Shapely</li>
        <li>NumPy / SciPy</li>
        <li>FastAPI inference service</li>
      </ul>

      <h2 className="text-xl font-semibold">Use Cases</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Land cover classification</li>
        <li>Flood susceptibility modeling</li>
        <li>Urban expansion prediction</li>
        <li>Environmental risk mapping</li>
      </ul>
    </div>
  );
}
