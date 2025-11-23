import React from "react";
import { motion } from "framer-motion";
import FloodHero from "../../components/heroes/FloodHero";
import { Link } from "react-router-dom";

export default function FloodDashboard() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <FloodHero
        title="Real-Time Flood Mapping"
        subtitle="Sensor networks, streaming ingestion & live map alerts"
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            Real-Time Flood Mapping Dashboard
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            A full pipeline integrating live water-level sensors, a geospatial
            dashboard, and automated alerts for flood risk monitoring.
          </p>

          <section className="mb-4">
            <h3 className="font-semibold mb-1">Overview</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Data is pulled from IoT sensors and hydrological APIs, processed
              in real-time, and displayed on an interactive map with alerting
              and historical charts. Works well on mobile — maps collapse below
              details for small screens.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Tech & Features</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Leaflet / Mapbox</li>
              <li>Flask API, WebSockets</li>
              <li>ThingSpeak / Sensor APIs</li>
              <li>PostGIS, raster overlays (DEM)</li>
            </ul>
          </section>
        </div>

        <aside className="rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
          <div className="w-full h-44 rounded-md bg-gray-200 dark:bg-gray-700 mb-3 flex items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 px-4">
              [Dashboard preview]
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
            to="/projects/sensor-dashboard"
            className="block w-full text-center px-3 py-2 border rounded-md text-sm"
          >
            See Sensor Dashboard
          </Link>
        </aside>
      </div>
    </main>
  );
}