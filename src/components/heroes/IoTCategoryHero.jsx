import React from "react";

/* Category hero for IoT */
export default function IoTCategoryHero({ title = "IoT", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-28 h-20">
          <svg viewBox="0 0 120 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" rx="8" fill="transparent" />
            <g transform="translate(18,18)">
              <circle cx="22" cy="12" r="6" fill="#2563eb" />
              <circle cx="78" cy="44" r="4" fill="#10b981" />
            </g>
            <g transform="translate(6,54)" stroke="#2563eb" strokeOpacity="0.12" strokeWidth="1">
              <path d="M0 0 L108 0" />
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
