import React from "react";

/* Category hero for CV */
export default function CVCategoryHero({ title = "Computer Vision", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-28 h-20">
          <svg viewBox="0 0 120 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" rx="8" fill="transparent" />
            <g transform="translate(10,12)">
              <rect x="0" y="0" width="44" height="28" rx="4" fill="#fff" opacity="0.9" />
              <circle cx="22" cy="14" r="8" fill="#2563eb" />
            </g>
            <g transform="translate(64,48)" stroke="#10b981" strokeWidth="1.2" fill="none">
              <rect x="0" y="0" width="44" height="18" rx="2" />
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
