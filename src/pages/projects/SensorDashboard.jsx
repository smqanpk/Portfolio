import React from "react";
import { motion } from "framer-motion";
import IoTHero from "../../components/heroes/IoTHero";

export default function SensorDashboard() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <IoTHero
        title="IoT Sensor Dashboard"
        subtitle="Live sensor map, time-series charts and alerts"
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            IoT Sensor Monitoring Dashboard
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            A real-time dashboard that monitors temperature, humidity, water
            level, and environmental sensors with charts and map visualization.
          </p>

          <section>
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>ESP8266 / ESP32 sensors</li>
              <li>ThingSpeak / MQTT</li>
              <li>Flask / FastAPI</li>
              <li>Leaflet for map visualization</li>
              <li>Chart.js / Recharts</li>
            </ul>
          </section>
        </div>

        <aside className="rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
          <div className="w-full h-44 rounded-md bg-gray-200 dark:bg-gray-700 mb-3 flex items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 px-4">
              [Sensor map + charts preview]
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