import { useEffect, useRef } from 'react'
import Hero3D from './components/Hero3D'
import Projects from './components/Projects'
import AboutContact from './components/AboutContact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const projectsRef = useRef(null)

  useEffect(() => {
    // create anchor to scroll to projects
    projectsRef.current = document.getElementById('projects')
  }, [])

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold tracking-tight text-zinc-900 dark:text-white">AR.</a>
          <nav className="flex items-center gap-3">
            <a href="#projects" className="hidden sm:inline text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Projects</a>
            <a href="#contact" className="hidden sm:inline text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="">        
        <Hero3D onScrollCta={scrollToProjects} />
        <Projects />
        <AboutContact />
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Alex Rivera. All rights reserved.
      </footer>
    </div>
  )
}

export default App
