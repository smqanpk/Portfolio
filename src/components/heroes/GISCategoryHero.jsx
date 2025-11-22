import React from "react";

/* Category hero for GIS overview */
export default function GISCategoryHero({ title = "GIS", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-28 h-20">
          <svg viewBox="0 0 120 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" rx="8" fill="transparent" />
            <g stroke="#2563eb" strokeWidth="1.2" fill="none" opacity="0.95">
              <path d="M10 20 C40 0, 80 40, 110 20" />
              <path d="M10 40 C40 60, 80 20, 110 40" />
            </g>
            <circle cx="100" cy="24" r="4" fill="#10b981" />
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
