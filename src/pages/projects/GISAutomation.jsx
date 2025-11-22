import React from "react";
import { motion } from "framer-motion";
import MapHero from "../../components/heroes/MapHero";

export default function GISAutomation() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <MapHero title="GIS Automation Tools" subtitle="ArcPy, GeoPandas & automation workflows" />

      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mt-8 mb-4"
      >
        GIS Automation Tools (ArcPy & GeoPandas)
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Automated scripts and tools for spatial batch processing, map exports, 
        reprojections, clipping, geoprocessing workflows and data QA — built using 
        ArcPy, GeoPandas, Rasterio and Shapely.
      </p>

      <div className="w-full h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-10">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          [Placeholder: automation workflow diagram or tool interface]
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Overview</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This suite of automation tools removes repetitive GIS work through 
        configurable scripts that run hundreds of operations in seconds.
      </p>

      <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>ArcPy</li>
        <li>GeoPandas</li>
        <li>Rasterio</li>
        <li>Shapely / Fiona</li>
        <li>PyProj</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>Batch reprojection & clipping</li>
        <li>Automated map exports</li>
        <li>Multi-processing for faster operations</li>
        <li>Raster & vector processing pipelines</li>
      </ul>
    </div>
  );
}