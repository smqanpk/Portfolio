import React from "react";

/* WebHero - interactive web-gis app preview (tiles + controls) */
export default function WebHero({ title = "Advanced Web GIS", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g-web-a" x1="0" x2="1">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>

            <rect x="8" y="10" width="124" height="76" rx="6" fill="url(#g-web-a)" opacity="0.08" />
            {/* tile grid */}
            <g stroke="rgba(0,0,0,0.06)" strokeWidth="0.8" transform="translate(10,12)">
              {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 5 }).map((__, c) => (
                  <rect key={`${r}-${c}`} x={c * 22} y={r * 16} width="20" height="12" rx="2" fill="none" />
                ))
              )}
            </g>

            {/* map control */}
            <g transform="translate(100,18)">
              <rect x="0" y="0" width="28" height="44" rx="4" fill="#fff" opacity="0.92" />
              <rect x="6" y="8" width="16" height="6" rx="2" fill="#2563eb" />
              <rect x="6" y="20" width="16" height="6" rx="2" fill="#10b981" />
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
