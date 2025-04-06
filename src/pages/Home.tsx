import { useEffect, useState } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LinkedIn from '../components/LinkedIn'
import ThemeToggle from '../components/ThemeToggle'
import { useTheme } from '../utils/theme'

export default function Home(): JSX.Element {
	const [activeSection, setActiveSection] = useState('home')
	const { theme, toggleTheme } = useTheme()

	// Define scroll threshold as a constant
	const SCROLL_THRESHOLD = 150

	// Listen to scroll events to update active section
	useEffect(() => {
		const handleScroll = (): void => {
			const sections = ['home', 'about', 'linkedin']
			let currentSection = activeSection

			for (const sectionId of sections) {
				const element = document.querySelector(`#${sectionId}`)
				if (element) {
					const rect = element.getBoundingClientRect()
					// When section is in viewport (with threshold offset)
					if (rect.top <= SCROLL_THRESHOLD && rect.bottom >= SCROLL_THRESHOLD) {
						currentSection = sectionId
						break
					}
				}
			}

			if (currentSection !== activeSection) {
				setActiveSection(currentSection)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Check initial position

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [activeSection, SCROLL_THRESHOLD])

	const onChangeTheme = (): void => {
		toggleTheme()
	}

	const onChangeSection = (sectionId: string): void => {
		setActiveSection(sectionId)
	}

	return (
		<div className='min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100'>
			<div className='fixed bottom-8 right-8 z-50'>
				<ThemeToggle theme={theme} onChange={onChangeTheme} />
			</div>

			<Header
				activeSection={activeSection}
				onChange={onChangeSection}
				theme={theme}
			/>
			<main>
				<Hero onChange={onChangeSection} theme={theme} />
				<About theme={theme} />
				<LinkedIn theme={theme} />
			</main>
			<Footer theme={theme} />
		</div>
	)
}
