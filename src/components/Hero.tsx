import siteConfig from '../config/siteConfig'
import type { Theme } from '../utils/theme'

interface HeroProperties {
	onChange: (sectionId: string) => void
	theme: Theme
}

export default function Hero({ onChange, theme }: HeroProperties): JSX.Element {
	const handleNavigation = (sectionId: string): void => {
		const element = document.querySelector(`#${sectionId}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		onChange(sectionId)
	}

	// Get theme-specific colors
	const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100'
	const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-300'

	const onClickAbout = (): void => handleNavigation('about')
	const onClickLinkedin = (): void => handleNavigation('linkedin')

	const onKeyDownAbout = (event: React.KeyboardEvent): void => {
		if (event.key === 'Enter') handleNavigation('about')
	}

	const onKeyDownLinkedin = (event: React.KeyboardEvent): void => {
		if (event.key === 'Enter') handleNavigation('linkedin')
	}

	return (
		<section
			id='home'
			className='overflow-hidden px-4 pb-16 pt-24 md:pb-24 md:pt-32'
		>
			<div className='container mx-auto max-w-4xl'>
				<div className='flex flex-col items-center md:flex-row'>
					<div className='text-center md:w-1/2 md:pr-10 md:text-left'>
						<h1
							className={`mb-4 text-4xl font-bold md:text-5xl ${textColor} leading-tight`}
						>
							Hello, I&apos;m
							<span className='text-primary-600'> {siteConfig.name}</span>
						</h1>
						<p
							className={`text-lg md:text-xl ${textSecondary} mx-auto mb-8 max-w-lg md:mx-0`}
						>
							{siteConfig.title}
						</p>
						<div className='flex flex-col justify-center gap-4 sm:flex-row sm:gap-6 md:justify-start'>
							<button
								type='button'
								onClick={onClickAbout}
								className='w-full rounded-md bg-primary-600 px-6 py-3 text-white transition hover:bg-primary-700 dark:text-white sm:w-auto'
								onKeyDown={onKeyDownAbout}
							>
								About Me
							</button>
							<button
								type='button'
								onClick={onClickLinkedin}
								className='w-full rounded-md border border-secondary-600 px-6 py-3 text-secondary-600 transition hover:bg-secondary-50 dark:text-secondary-400 dark:hover:bg-secondary-900/30 sm:w-auto'
								onKeyDown={onKeyDownLinkedin}
							>
								Connect
							</button>
						</div>
					</div>
					<div className='mt-12 flex justify-center md:mt-0 md:w-1/2'>
						<div className='h-56 w-56 transform overflow-hidden rounded-full border-4 border-white bg-blue-100 shadow-lg transition-all duration-500 hover:scale-105 dark:border-gray-700 md:h-64 md:w-64'>
							{/* Placeholder for profile image - replace with your own */}
							<div className='flex h-full w-full items-center justify-center bg-gradient-to-tr from-primary-500 to-secondary-600 text-6xl font-bold text-white dark:text-white'>
								{siteConfig.name
									.split(' ')
									.map(name => name[0])
									.join('')}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
