import { motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/ThemeToggle'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ExperienceStats } from './components/ExperienceStats'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to main content
      </a>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceStats />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
