import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Futuristic Landing Experience',
    desc: 'A Spline-driven hero with WebGL post-processing and micro-interactions.',
    href: 'https://example.com/demo1',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive 3D viewer with custom materials and real-time lighting.',
    href: 'https://example.com/demo2',
    thumb: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Portfolio Motion System',
    desc: 'Framer Motion animation system with scroll-based transitions.',
    href: 'https://example.com/demo3',
    thumb: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
                <div className="absolute bottom-3 right-3 rounded-full bg-white/90 dark:bg-zinc-900/90 px-3 py-1 text-xs text-zinc-900 dark:text-zinc-100">
                  View →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
