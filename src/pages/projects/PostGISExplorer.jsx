import React from "react";
import { motion } from "framer-motion";
import DBHero from "../../components/heroes/DBHero";

export default function PostGISExplorer() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <DBHero title="PostGIS Spatial Data Explorer" subtitle="Interactive spatial SQL & geometry visualization" />

      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mt-8 mb-4"
      >
        PostGIS Spatial Data Explorer
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        A web-based interface for running spatial SQL queries, visualizing geometries, 
        and exploring geographic datasets directly from PostGIS.
      </p>

      <div className="w-full h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-10">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          [Placeholder: SQL editor + map preview]
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>PostGIS / PostgreSQL</li>
        <li>Flask / FastAPI backend</li>
        <li>Leaflet map</li>
        <li>Axios / REST API</li>
        <li>Spatial indexing (R-Tree, GIST)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Capabilities</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Run & visualize spatial SQL queries</li>
        <li>Geometry inspection</li>
        <li>Bounding box queries</li>
        <li>Proximity & intersection analysis</li>
      </ul>
    </div>
  );
}
