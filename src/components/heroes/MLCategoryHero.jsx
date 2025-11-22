import React from "react";

/* Category hero for ML */
export default function MLCategoryHero({ title = "Machine Learning", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-28 h-20">
          <svg viewBox="0 0 120 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" rx="8" fill="transparent" />
            <g fill="#2563eb" opacity="0.95">
              <circle cx="26" cy="26" r="5" />
              <circle cx="60" cy="44" r="5" />
              <circle cx="94" cy="26" r="5" />
            </g>
            <path d="M32 28 L56 42 L88 28" stroke="#10b981" strokeWidth="1.4" fill="none" />
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
