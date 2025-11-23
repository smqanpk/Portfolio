import React from "react";

/* Category hero for Databases / PostGIS */
export default function DBCategoryHero({ title = "Databases", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-28 h-20">
          <svg viewBox="0 0 120 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" rx="8" fill="transparent" />
            <g transform="translate(18,18)">
              <ellipse cx="24" cy="10" rx="18" ry="7" fill="#eef2ff" />
              <rect x="2" y="10" width="44" height="18" rx="3" fill="#fff" />
            </g>
            <g transform="translate(64,36)" stroke="#10b981" strokeWidth="1">
              <path d="M0 0 L44 0" />
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
