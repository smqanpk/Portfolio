<div className="w-full h-64 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-800">
<p className="text-center text-sm text-gray-500 dark:text-gray-400">[Hero Illustration / Map Preview — replace with screenshot or SVG]</p>
</div>
</motion.div>
</section>


<section id="services" className="py-8">
<h3 className="text-2xl font-semibold mb-6">Services I Offer</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{['GIS Automation', 'Web GIS & Dashboards', 'Machine Learning & CV', 'IoT Integration', 'PostGIS & Spatial DB', 'Consulting & Prototyping'].map((s, i) => (
<motion.div key={s} whileHover={{ y: -6 }} className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850">
<h4 className="font-semibold mb-2">{s}</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Professional-grade delivery, clear documentation, and production-ready code.</p>
</motion.div>
))}
</div>
</section>


<section id="projects" className="py-12">
<h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{projects.map((p, idx) => (
<a key={p.id} href={p.link} className="group block p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 hover:shadow-lg transition-shadow">
<motion.div whileHover={{ scale: 1.02 }} className="flex gap-4">
<div className="w-20 h-20 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-semibold">{p.title.split(' ')[0]}</div>
<div>
<h4 className="font-semibold">{p.title}</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
</div>
</motion.div>
</a>
))}
</div>
</section>


<section id="contact" className="py-12">
<h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tell me about your project — I respond quickly and I’m happy to scope work and provide a fixed-price estimate.</p>


<div className="max-w-2xl">
<form action="https://formsubmit.co/your-email@example.com" method="POST" className="grid grid-cols-1 gap-4">
<input type="hidden" name="_subject" value="New portfolio contact" />
<input type="hidden" name="_captcha" value="false" />
<input type="text" name="name" placeholder="Your name" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700" />
<input type="email" name="email" placeholder="Your email" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700" />
<input type="text" name="subject" placeholder="Subject" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700" />
<textarea name="message" rows="6" placeholder="Project details" required className="p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"></textarea>
<div className="flex gap-3">
<button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Send message</button>
<a href="mailto:smqanpk@gmail.com" className="px-4 py-2 border rounded-md">Email me</a>
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
)
}
