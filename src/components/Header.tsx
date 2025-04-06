import { useState } from 'react'
import siteConfig from '../config/siteConfig'
import type { Theme } from '../utils/theme'

interface HeaderProperties {
	activeSection: string
	onChange: (sectionId: string) => void
	theme: Theme
}

export default function Header({
	activeSection,
	onChange,
	theme
}: HeaderProperties): JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Constant for hash prefix length ('#')
	const HASH_PREFIX_LENGTH = 1

	const scrollToSection = (sectionId: string): void => {
		const element = document.querySelector(`#${sectionId}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		setIsMenuOpen(false)
		onChange(sectionId)
	}

	// Define colors based on theme
	const bgColor =
		theme === 'light' ? 'bg-white bg-opacity-90' : 'bg-gray-900 bg-opacity-90'
	const textColor = theme === 'light' ? 'text-gray-800' : 'text-gray-100'
	const shadowColor = theme === 'light' ? 'shadow-sm' : 'shadow-gray-800'

	const onClickToggleMenu = (): void => setIsMenuOpen(!isMenuOpen)

	const getSectionIdFromHref = (href: string): string =>
		href.slice(HASH_PREFIX_LENGTH)

	return (
		<header
			className={`fixed left-0 right-0 top-0 ${bgColor} ${shadowColor} z-50`}
		>
			<div className='container mx-auto flex items-center justify-between px-4 py-4'>
				<div className='text-2xl font-bold text-primary-600'>
					{siteConfig.name}
				</div>

				{/* Mobile menu button */}
				<button
					type='button'
					className={`focus:outline-none md:hidden ${textColor}`}
					onClick={onClickToggleMenu}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						{isMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>

				{/* Desktop navigation */}
				<nav className='hidden space-x-8 md:flex'>
					{siteConfig.navigation.map(item => {
						const sectionId = getSectionIdFromHref(item.href)
						const onClickNav = (): void => scrollToSection(sectionId)
						return (
							<button
								key={item.name}
								type='button'
								onClick={onClickNav}
								className={`text-sm font-medium transition hover:text-primary-600 ${
									activeSection === sectionId ? 'text-primary-600' : textColor
								}`}
							>
								{item.name}
							</button>
						)
					})}
				</nav>
			</div>

			{/* Mobile navigation dropdown */}
			{isMenuOpen ? (
				<div
					className={`md:hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} shadow-md`}
				>
					<div className='container mx-auto flex flex-col space-y-3 px-4 py-2'>
						{siteConfig.navigation.map(item => {
							const sectionId = getSectionIdFromHref(item.href)
							const onClickNav = (): void => scrollToSection(sectionId)
							return (
								<button
									key={item.name}
									type='button'
									onClick={onClickNav}
									className={`py-2 text-sm font-medium transition hover:text-primary-600 ${
										activeSection === sectionId ? 'text-primary-600' : textColor
									}`}
								>
									{item.name}
								</button>
							)
						})}
					</div>
				</div>
			) : undefined}
		</header>
	)
}
