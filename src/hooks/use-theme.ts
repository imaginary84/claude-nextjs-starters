'use client'

import { useTheme as useNextTheme } from 'next-themes'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme()

  return {
    theme: (theme ?? 'system') as Theme,
    setTheme: (t: Theme) => setTheme(t),
    resolvedTheme: (resolvedTheme ?? 'light') as 'light' | 'dark',
    isDark: resolvedTheme === 'dark',
    systemTheme: systemTheme as 'light' | 'dark' | undefined,
  }
}
