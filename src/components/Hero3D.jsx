import { useRef, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D({ onScrollCta }) {
  const containerRef = useRef(null)

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current
      if (!el) return
      const y = window.scrollY
      el.style.setProperty('--parallax', Math.min(y / 600, 1))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black"
    >
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-black/70 dark:via-black/30 dark:to-black/80" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
          style={{ transform: 'translateY(calc(var(--parallax, 0) * -20px))' }}
        >
          <p className="mb-3 inline-flex rounded-full border border-zinc-200/60 dark:border-zinc-700/60 bg-white/50 dark:bg-zinc-900/50 backdrop-blur px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
            Interactive • Tech • Futuristic • Minimal
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Hey, I'm Alex — I craft immersive 3D experiences and modern web apps.
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
            Creative developer blending real-time 3D, motion, and clean UI to build performant, delightful products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); onScrollCta?.() }}
              className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 text-sm font-medium shadow-lg shadow-zinc-900/10 dark:shadow-white/10 hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-zinc-500 dark:text-zinc-400 text-xs">
        Scroll to explore
      </div>
    </section>
  )
}
