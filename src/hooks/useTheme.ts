import { useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system")
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light")

  useEffect(() => {
    const root = window.document.documentElement
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"

    const currentTheme = theme === "system" ? systemTheme : theme
    setResolvedTheme(currentTheme)

    root.classList.remove("light", "dark")
    root.classList.add(currentTheme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        setResolvedTheme(systemTheme)
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(systemTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return {
    theme,
    setTheme: setThemeValue,
    resolvedTheme,
  }
}
