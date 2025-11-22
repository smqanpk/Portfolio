import React from "react";
import { motion } from "framer-motion";
import WebHero from "../../components/heroes/WebHero";

export default function AdvancedWebGIS() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <WebHero title="Advanced Web GIS" subtitle="Leaflet/Mapbox apps with PostGIS backends" />

      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mt-8 mb-4"
      >
        Advanced Web GIS Application
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        A full-stack GIS application offering dynamic layers, filtering, geocoding, 
        clustering and PostGIS-backed spatial queries.
      </p>

      <div className="w-full h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-10">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          [Placeholder: map interface preview]
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Overview</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Built with Leaflet/Mapbox on the front end and a robust API on the backend, 
        enabling fast visualization of large geospatial datasets.
      </p>

      <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>Leaflet / Mapbox GL</li>
        <li>Flask / FastAPI</li>
        <li>PostGIS / Spatial SQL</li>
        <li>Axios / REST API</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>Layer switching / filtering</li>
        <li>Clustering & heatmaps</li>
        <li>Address search (geocoder)</li>
        <li>Spatial SQL queries</li>
      </ul>
    </div>
  );
}
