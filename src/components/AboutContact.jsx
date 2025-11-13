import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function AboutContact() {
  return (
    <section id="contact" className="relative w-full py-24 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          About & Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300"
        >
          I'm Alex Rivera, a creative developer with a focus on real‑time 3D, motion design, and performant web experiences. I partner with startups and brands to craft interfaces that feel alive.
        </motion.p>

        <div className="mt-8 flex justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-12 mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
          <div className="h-full w-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm">
            Optional 3D avatar placeholder
          </div>
        </div>
      </div>
    </section>
  )
}
