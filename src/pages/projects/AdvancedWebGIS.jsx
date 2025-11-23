import React from "react";
import { motion } from "framer-motion";
import WebHero from "../../components/heroes/WebHero";
import { Link } from "react-router-dom";

export default function AdvancedWebGIS() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <WebHero
        title="Advanced Web GIS"
        subtitle="Leaflet/Mapbox apps with PostGIS backends"
      />

      <div className="mt-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            Advanced Web GIS Application
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            A full-stack GIS application offering dynamic layers, filtering,
            geocoding, clustering and PostGIS-backed spatial queries.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Built with Leaflet/Mapbox on the front end and a robust API on
                the backend, enabling fast visualization of large geospatial
                datasets. The app scales across devices and supports vector
                tiles, on-the-fly styling, and spatial SQL filtering.
              </p>
            </section>

            <section>
              <h3 className="text-md font-semibold mb-2">Tech Stack</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Leaflet / Mapbox GL</li>
                <li>Flask / FastAPI</li>
                <li>PostGIS / Spatial SQL</li>
                <li>Axios / REST API</li>
              </ul>
            </section>

            <section>
              <h3 className="text-md font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Layer switching & dynamic styling</li>
                <li>Clustering & heatmaps for dense datasets</li>
                <li>Geocoder & address search</li>
                <li>Server-side spatial SQL queries</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Right column: screenshot / CTA */}
        <aside className="w-full sm:w-80">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
            <div className="w-full h-40 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-3">
              <span className="text-xs text-gray-500 dark:text-gray-400 px-4">
                [Map preview / screenshot]
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
              to="/projects/postgis-explorer"
              className="block text-center px-3 py-2 border rounded-md text-sm"
            >
              See PostGIS Explorer
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}