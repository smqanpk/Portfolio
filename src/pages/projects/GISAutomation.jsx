import React from "react";
import { motion } from "framer-motion";
import MapHero from "../../components/heroes/MapHero";

export default function GISAutomation() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <MapHero
        title="GIS Automation Tools"
        subtitle="ArcPy, GeoPandas & automation workflows"
      />

      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            GIS Automation Tools (ArcPy & GeoPandas)
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Automated scripts and tools for spatial batch processing, map exports,
            reprojections, clipping, geoprocessing workflows and data QA.
          </p>

          <section className="mb-4">
            <h3 className="font-semibold mb-2">Why automation?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Save hours on repetitive tasks — run reproducible pipelines that
              produce clean geospatial outputs and export maps for stakeholders.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Tech stack</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>ArcPy, GeoPandas</li>
              <li>Rasterio, GDAL</li>
              <li>Shapely, Fiona, PyProj</li>
            </ul>
          </section>
        </div>

        <aside className="w-full lg:w-80 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
          <div className="w-full h-40 rounded-md bg-gray-200 dark:bg-gray-700 mb-3 flex items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 px-4">
              [Workflow diagram]
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
        </aside>
      </div>
    </main>
  );
}