import React from "react";

/* IoTHero - sensor nodes + signal waves */
export default function IoTHero({ title = "IoT & Sensors", subtitle = "" }) {
  return (
    <div className="rounded-xl p-6 bg-white dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex items-center gap-6">
        <div className="w-36 h-24">
          <svg viewBox="0 0 140 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="140" height="96" rx="10" fill="transparent" />
            {/* hub */}
            <g>
              <circle cx="70" cy="34" r="8" fill="#2563eb" />
              <g stroke="#10b981" strokeWidth="1.2" fill="none" opacity="0.9">
                <circle cx="70" cy="34" r="18" />
                <circle cx="70" cy="34" r="30" />
              </g>

              {/* nodes */}
              <circle cx="28" cy="70" r="4.6" fill="#10b981" />
              <circle cx="112" cy="70" r="4.6" fill="#10b981" />
              <circle cx="16" cy="36" r="3.6" fill="#2563eb" />
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
