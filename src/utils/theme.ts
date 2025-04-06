import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

// Get the initial theme from localStorage or system preference
function getInitialTheme(): Theme {
	// Check if window is defined (for SSR)
	if (typeof window === 'undefined') {
		return 'light'
	}

	const storedTheme = window.localStorage.getItem('theme') as Theme | null
	if (storedTheme) {
		return storedTheme
	}

	// Check for system preference
	const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
	if (userMedia.matches) {
		return 'dark'
	}

	// Default to light theme
	return 'light'
}

export function useTheme(): {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => Theme
} {
	const [theme, setTheme] = useState<Theme>(getInitialTheme())

	const updateTheme = (currentTheme: Theme): void => {
		setTheme(currentTheme)
		// Store in localStorage
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('theme', currentTheme)
		}
	}

	const toggleTheme = (): Theme => {
		const updatedTheme = theme === 'light' ? 'dark' : 'light'
		updateTheme(updatedTheme)
		return updatedTheme
	}

	// Apply theme to document when it changes
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove('light', 'dark')
		root.classList.add(theme)
	}, [theme])

	return { theme, setTheme: updateTheme, toggleTheme }
}

// Function to toggle between themes
export const toggleTheme = (currentTheme: Theme): Theme =>
	currentTheme === 'light' ? 'dark' : 'light'
