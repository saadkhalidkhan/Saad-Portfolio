import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/ThemeToggle'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ExperienceStats } from './components/ExperienceStats'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ExperienceStats />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
