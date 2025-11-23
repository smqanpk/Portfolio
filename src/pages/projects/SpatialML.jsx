import React from "react";
import { motion } from "framer-motion";
import MLHero from "../../components/heroes/MLHero";
import { Link } from "react-router-dom";

export default function SpatialML() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <MLHero
        title="Spatial Machine Learning"
        subtitle="Raster + vector models for land cover & prediction"
      />

      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            Spatial Machine Learning
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            ML models combining raster and vector inputs to predict land cover,
            flood susceptibility, road extraction, and environmental patterns.
            Pipelines include feature engineering, tiling, model training,
            spatial inference and georeferenced export.
          </p>

          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>PyTorch / TensorFlow</li>
              <li>Rasterio / GDAL for raster handling</li>
              <li>GeoPandas / Shapely for vector data</li>
              <li>NumPy / SciPy for numerical ops</li>
              <li>FastAPI for inference service</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Use Cases</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Land cover classification</li>
              <li>Flood susceptibility modeling</li>
              <li>Urban expansion prediction</li>
              <li>Environmental risk mapping</li>
            </ul>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full lg:w-80 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
          <div className="w-full h-40 rounded-md bg-gray-200 dark:bg-gray-700 mb-3 flex items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 px-4">
              [ML diagram / prediction map preview]
            </span>
          </div>

          <a
            href="/mnt/data/Syed+Muhammad+Qambar+Abbas+Naqvi_Resume-1-1.pdf"
            className="block w-full text-center px-3 py-2 bg-primary text-white rounded-md mb-2 text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

          <Link
            to="/projects/satellite-segmentation"
            className="block w-full text-center px-3 py-2 border rounded-md text-sm"
          >
            See Satellite Segmentation
          </Link>
        </aside>
      </div>
    </main>
  );
}