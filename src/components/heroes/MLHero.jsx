import React from "react";

/* MLHero - abstract neural nodes + flow */
export default function MLHero({ title = "Machine Learning", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g-ml" x1="0" x2="1">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>

            <rect width="140" height="96" rx="10" fill="transparent" />

            {/* nodes */}
            <g fill="#2563eb" opacity="0.95">
              <circle cx="28" cy="26" r="5.4" />
              <circle cx="70" cy="48" r="5.4" />
              <circle cx="110" cy="26" r="5.4" />
            </g>

            {/* connecting lines */}
            <g stroke="url(#g-ml)" strokeWidth="1.6" fill="none" opacity="0.9">
              <path d="M34 28 L64 44" />
              <path d="M76 44 L106 28" />
            </g>

            {/* matrix block (data) */}
            <g transform="translate(8,60)">
              <rect x="0" y="0" width="44" height="22" rx="3" fill="#f8fafc" opacity="0.9" />
              <rect x="46" y="0" width="86" height="22" rx="3" fill="#eef2ff" opacity="0.75" />
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
