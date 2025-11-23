import React from "react";

/* CVHero - bounding box / camera motif */
export default function CVHero({ title = "Computer Vision", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="140" height="96" rx="10" fill="transparent" />
            
            {/* camera / lens */}
            <g transform="translate(12,10)">
              <rect x="0" y="0" width="60" height="40" rx="4" fill="#fff" opacity="0.9" />
              <circle cx="30" cy="20" r="12" fill="#2563eb" />
              <rect x="66" y="6" width="56" height="28" rx="4" fill="#eef2ff" opacity="0.9" />
            </g>

            {/* bounding boxes */}
            <g transform="translate(10,54)" stroke="#10b981" strokeWidth="1.6" fill="none">
              <rect x="0" y="0" width="36" height="18" rx="2" />
              <rect x="44" y="0" width="60" height="18" rx="2" />
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
