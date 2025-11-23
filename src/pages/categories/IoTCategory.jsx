import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IoTCategoryHero from "../../components/heroes/IoTCategoryHero";

export default function IoTCategory() {
  const items = [
    {
      title: "IoT Sensor Map",
      desc: "Real-time visualization of IoT devices on a map with ThingSpeak/ESP8266.",
      link: "/projects/iot-map",
    },
    {
      title: "Sensor Monitoring Dashboard",
      desc: "Interactive charts, alerts, and analysis for environmental sensors.",
      link: "/projects/sensor-dashboard",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <IoTCategoryHero title="IoT & Sensors" subtitle="Live data, maps & alerts" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((p) => (
          <Link
            key={p.title}
            to={p.link}
            className="block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-850 hover:shadow-lg"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{p.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
