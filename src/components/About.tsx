import siteConfig from '../config/siteConfig'
import type { Theme } from '../utils/theme'

interface AboutProperties {
	theme: Theme
}

interface Education {
	degree: string
	institution: string
	period: string
}

interface AboutSection {
	title: string
	paragraphs: string[]
	skillsTitle: string
	skills: string[]
	educationTitle: string
	education: Education[]
	buttonText: string
	buttonLink: string
}

// Constants
const KEY_PREFIX_LENGTH = 20

export default function About({ theme }: AboutProperties): JSX.Element {
	// Get theme-specific colors
	const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100'
	const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-300'
	const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900'
	const skillBg = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
	const skillHover =
		theme === 'light'
			? 'hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200'
			: 'hover:bg-primary-900/30 hover:text-primary-400 hover:border-primary-800'

	// Cast to the appropriate interface
	const aboutSection = siteConfig.about as AboutSection

	return (
		<section id='about' className={`px-4 py-16 md:py-24 ${bgColor}`}>
			<div className='container mx-auto max-w-4xl'>
				<div className='flex flex-col items-start gap-10 md:flex-row'>
					<div className='text-center md:w-1/2 md:text-left'>
						<h2 className={`mb-6 text-3xl font-bold md:text-4xl ${textColor}`}>
							{aboutSection.title}
						</h2>
						<div
							className={`${textSecondary} mx-auto mb-8 max-w-lg space-y-4 md:mx-0`}
						>
							{aboutSection.paragraphs.map(paragraph => (
								<p
									key={`about-p-${paragraph.slice(0, Math.max(0, KEY_PREFIX_LENGTH)).replaceAll(/\s+/g, '-')}`}
								>
									{paragraph}
								</p>
							))}
						</div>
						<div className='hidden md:block'>
							<a
								href={aboutSection.buttonLink}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-block rounded-md border border-primary-600 px-6 py-3 text-center font-medium text-primary-600 transition hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/30'
							>
								{aboutSection.buttonText}
							</a>
						</div>
					</div>
					<div className='md:w-1/2'>
						<h3
							className={`mb-4 text-xl font-bold md:text-2xl ${textColor} text-center md:text-left`}
						>
							{aboutSection.skillsTitle}
						</h3>
						<div className='mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3'>
							{aboutSection.skills.map(skill => (
								<div
									key={`skill-${skill}`}
									className={`${skillBg} ${skillHover} rounded-md border border-transparent p-3 text-center transition-colors duration-300`}
								>
									<span className={textColor}>{skill}</span>
								</div>
							))}
						</div>
						<div className='mb-6 text-center md:hidden'>
							<a
								href={aboutSection.buttonLink}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-block w-full rounded-md border border-primary-600 px-6 py-3 text-center font-medium text-primary-600 transition hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/30 sm:w-auto'
							>
								{aboutSection.buttonText}
							</a>
						</div>
						<div className={`${textSecondary} text-center md:text-left`}>
							<h3 className={`mb-4 text-xl font-bold md:text-2xl ${textColor}`}>
								{aboutSection.educationTitle}
							</h3>
							<ul className='space-y-4'>
								{aboutSection.education.map(edu => (
									<li
										key={`edu-${edu.degree.replaceAll(/\s+/g, '-')}`}
										className='flex flex-col justify-between gap-2 md:flex-row'
									>
										<div>
											<p className={`font-medium ${textColor}`}>{edu.degree}</p>
											<p>{edu.institution}</p>
										</div>
										<p className='text-sm'>{edu.period}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
