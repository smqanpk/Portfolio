import React from "react";

/* FloodHero - real-time / sensor + water wave motif */
export default function FloodHero({ title = "Real-Time Flood Mapping", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g-flood" x1="0" x2="1">
                <stop offset="0" stopColor="#10b981" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>

            <rect x="6" y="8" rx="8" width="128" height="80" fill="transparent" />

            {/* sensor nodes */}
            <g fill="#2563eb" opacity="0.95">
              <circle cx="26" cy="28" r="4.2" />
              <circle cx="72" cy="42" r="4.2" />
              <circle cx="110" cy="30" r="4.2" />
            </g>

            {/* wave layers */}
            <g transform="translate(0,56)" fill="url(#g-flood)" opacity="0.16">
              <path d="M0 18 C20 4, 40 28, 70 18 C95 10, 120 32, 140 18 L140 36 L0 36 Z" />
              <path d="M0 28 C25 18, 50 36, 80 28 C110 18, 125 36, 140 28 L140 44 L0 44 Z" />
            </g>

            {/* ping rings */}
            <g stroke="#10b981" strokeWidth="1.2" fill="none" opacity="0.7">
              <circle cx="72" cy="42" r="8" />
              <circle cx="72" cy="42" r="14" />
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
