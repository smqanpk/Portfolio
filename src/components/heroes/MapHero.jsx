import React from "react";

/*
 MapHero - GIS / map-oriented hero
 Resume path (local): /mnt/data/Syed+Muhammad+Qambar+Abbas+Naqvi_Resume-1-1.pdf
 Usage: <MapHero title="GIS Projects" subtitle="..." />
*/
export default function MapHero({ title = "GIS Projects", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24 flex-shrink-0">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="g-map-a" x1="0" x2="1">
                <stop offset="0" stopColor="#2563eb" stopOpacity="0.9" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="g-map-b" x1="0" x2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            <rect x="2" y="6" rx="8" width="136" height="84" fill="url(#g-map-b)"></rect>

            {/* abstract map layers */}
            <g transform="translate(8,10)" fill="none" stroke="url(#g-map-a)" strokeWidth="1.6" opacity="0.95">
              <path d="M0 10 C20 -5, 60 25, 120 6" />
              <path d="M0 30 C30 10, 60 50, 120 30" />
              <path d="M0 50 C35 65, 80 35, 120 50" />
            </g>

            {/* markers */}
            <circle cx="98" cy="26" r="4.8" fill="#2563eb" />
            <circle cx="34" cy="64" r="3.6" fill="#10b981" />
            <rect x="14" y="18" width="8" height="6" rx="1.2" fill="#2563eb" opacity="0.9" />
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
