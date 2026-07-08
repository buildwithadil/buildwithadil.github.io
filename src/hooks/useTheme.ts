import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

/**
 * Theme controller. Light is the default; dark is an explicit, persisted opt-in
 * (we deliberately do NOT follow the OS preference). The pre-paint script in
 * index.html has already applied the correct theme before React runs (no FOUC);
 * this hook reads that value, lets the user toggle it, and persists the choice.
 *
 * Returns `theme: null` until mounted so SSG markup and first client render
 * agree (no hydration mismatch).
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme | null>(null)

  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme | undefined) ?? 'light'
    setThemeState(current)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    apply(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore (private mode / disabled storage) */
    }
    setThemeState(next)
  }, [])

  const toggle = useCallback(() => {
    setTheme(
      (document.documentElement.dataset.theme as Theme) === 'dark'
        ? 'light'
        : 'dark',
    )
  }, [setTheme])

  return { theme, setTheme, toggle }
}
