import React from "react";

/* DBHero - PostGIS / database cylinders + grid */
export default function DBHero({ title = "Databases & PostGIS", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="140" height="96" rx="10" fill="transparent" />
            {/* cylinders */}
            <g transform="translate(18,18)">
              <ellipse cx="24" cy="12" rx="20" ry="8" fill="#eef2ff" />
              <rect x="4" y="12" width="40" height="24" rx="3" fill="#f8fafc" />
              <ellipse cx="96" cy="12" rx="20" ry="8" fill="#fff" />
              <rect x="76" y="12" width="40" height="24" rx="3" fill="#f8fafc" />
            </g>

            {/* grid */}
            <g transform="translate(8,56)" stroke="#2563eb" strokeOpacity="0.12" strokeWidth="0.9">
              <path d="M0 0 L124 0" />
              <path d="M0 8 L124 8" />
              <path d="M0 16 L124 16" />
            </g>
          </svg>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
