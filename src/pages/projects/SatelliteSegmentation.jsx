import React from "react";
import { motion } from "framer-motion";
import CVHero from "../../components/heroes/CVHero";

export default function SatelliteSegmentation() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <CVHero
        title="Satellite Image Segmentation"
        subtitle="U-Net / DeepLab pipelines for remote sensing"
      />

      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            Satellite Image Segmentation
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Deep learning segmentation for remote sensing imagery: roads, water,
            buildings, vegetation and more. Robust tiling & mask export pipelines.
          </p>

          <section>
            <h3 className="font-semibold mb-2">Models & Pipeline</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>UNet, DeepLabv3+, SegFormer</li>
              <li>Tiling, augmentation, mosaicking</li>
              <li>Mask export & georeferencing</li>
            </ul>
          </section>
        </div>

        <aside className="w-full lg:w-80 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
          <div className="w-full h-40 rounded-md bg-gray-200 dark:bg-gray-700 mb-3 flex items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 px-4">
              [Segmentation overlay preview]
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