import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("q-dark");
    if (saved) return saved === "1";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("q-dark", dark ? "1" : "0");
  }, [dark]);

  const projects = [
    {
      id: "gis-automation",
      title: "GIS Automation Tools",
      desc: "ArcPy & GeoPandas automation — reprojections, batch processing & map exports",
      link: "/projects/gis-automation/",
    },
    {
      id: "flood-dashboard",
      title: "Real-Time Flood Mapping",
      desc: "Sensor-driven dashboard with live map and alerting",
      link: "/projects/flood-dashboard/",
    },
    {
      id: "ml-projects",
      title: "Machine Learning Projects",
      desc: "Predictive models, audio ML, and end-to-end pipelines",
      link: "/projects/ml/",
    },
    {
      id: "cv-demos",
      title: "Computer Vision Demos",
      desc: "Face recognition, object detection and real-time demos",
      link: "/projects/cv/",
    },
    {
      id: "iot-map",
      title: "IoT Sensor Map",
      desc: "ESP8266/ThingSpeak integration and real-time geovisualization",
      link: "/projects/iot-map/",
    },
    {
      id: "postgis-demos",
      title: "PostGIS Spatial DB Demos",
      desc: "Spatial queries, indexes, and geographic analytics",
      link: "/projects/postgis/",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
            QN
          </div>
          <div>
            <h1 className="text-lg font-semibold">Qambar Naqvi</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              GIS • Machine Learning • Web GIS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            {dark ? "Light" : "Dark"}
          </button>
          <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md">
            Get in touch
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-semibold mb-3">
              GIS Developer & ML Engineer building production-ready geospatial systems.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I build automated GIS tools, real-time dashboards, machine learning models,
              and full-stack web GIS applications that help teams make smarter decisions faster.
            </p>

            <div className="flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700">
                See Projects
              </a>
              <a href="#contact" className="px-4 py-2 bg-accent text-white rounded-md">
                Hire Me
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="w-full h-64 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                [Hero Illustration / Map Preview — replace with screenshot or SVG]
              </p>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-8">
          <h3 className="text-2xl font-semibold mb-6">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "GIS Automation",
              "Web GIS & Dashboards",
              "Machine Learning & CV",
              "IoT Integration",
              "PostGIS & Spatial DB",
              "Consulting & Prototyping",
            ].map((s) => (
              <motion.div
                key={s}
                whileHover={{ y: -6 }}
                className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800"
              >
                <h4 className="font-semibold mb-2">{s}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Professional-grade delivery, clear documentation, and production-ready code.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.link}
                className="group block p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <motion.div whileHover={{ scale: 1.02 }} className="flex gap-4">
                  <div className="w-20 h-20 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-semibold">
                    {p.title.split(" ")[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Tell me about your project — I respond quickly and I’m happy to scope work and
            provide a fixed-price estimate.
          </p>

          <div className="max-w-2xl">
            <form
              action="https://formsubmit.co/63c92262bbadc3e8a06cdf9cd48e9121"
              method="POST"
              className="grid grid-cols-1 gap-4"
            >
              <input type="hidden" name="_subject" value="New portfolio contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Project details"
                required
                className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              ></textarea>

              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">
                  Send message
                </button>
                <a href="mailto:smqanpk@gmail.com" className="px-4 py-2 border rounded-md">
                  Email me
                </a>
              </div>
            </form>
          </div>
        </section>

        <footer className="py-8 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
          <div>© {new Date().getFullYear()} Qambar Naqvi</div>
          <div>Built with React • Tailwind • Framer Motion</div>
        </footer>
      </main>
    </div>
  );
}

