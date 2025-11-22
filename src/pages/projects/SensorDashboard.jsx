import React from "react";
import { motion } from "framer-motion";
import IoTHero from "../../components/heroes/IoTHero";

export default function SensorDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <IoTHero title="IoT Sensor Dashboard" subtitle="Live sensor map, time-series charts and alerts" />

      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mt-8 mb-4"
      >
        IoT Sensor Monitoring Dashboard
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        A real-time dashboard that monitors temperature, humidity, water level, and 
        environmental sensors with charts and map visualization.
      </p>

      <div className="w-full h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-10">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          [Placeholder: IoT sensor chart + map preview]
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>ESP8266 / ESP32 sensors</li>
        <li>ThingSpeak / MQTT</li>
        <li>Flask / FastAPI</li>
        <li>Leaflet for map visualization</li>
        <li>Chart.js / Recharts</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Features</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Live sensor chart updates</li>
        <li>Real-time map visualization</li>
        <li>Alert thresholds & notifications</li>
        <li>Historical data analysis</li>
      </ul>
    </div>
  );
}
