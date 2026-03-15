import { motion } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-md border border-border rounded-full p-1 shadow-lg">
        {themes.map(({ value, icon: Icon, label }) => (
          <motion.button
            key={value}
            onClick={() => setTheme(value)}
            className={cn(
              "relative p-2 rounded-full transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              theme === value && "bg-primary text-primary-foreground"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${label} theme`}
          >
            <Icon className="w-4 h-4" />
            {theme === value && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
