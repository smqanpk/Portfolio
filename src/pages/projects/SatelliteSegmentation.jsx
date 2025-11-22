import React from "react";
import { motion } from "framer-motion";
import CVHero from "../../components/heroes/CVHero";

export default function SatelliteSegmentation() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <CVHero title="Satellite Image Segmentation" subtitle="U-Net / DeepLab pipelines for remote sensing" />

      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mt-8 mb-4"
      >
        Satellite Image Segmentation
      </motion.h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Deep learning segmentation for remote sensing imagery: roads, water, 
        buildings, vegetation and more.
      </p>

      <div className="w-full h-64 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-10">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          [Placeholder: segmentation mask overlay example]
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Models Used</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
        <li>UNet</li>
        <li>DeepLabv3+</li>
        <li>SegFormer</li>
        <li>Swin Transformer</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Processing Pipeline</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Image tiling & normalization</li>
        <li>Multi-band processing</li>
        <li>Augmentation for satellite imagery</li>
        <li>Raster merging & export of masks</li>
      </ul>
    </div>
  );
}
