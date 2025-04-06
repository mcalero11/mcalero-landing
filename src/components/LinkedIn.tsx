import siteConfig from '../config/siteConfig'
import type { Theme } from '../utils/theme'

interface LinkedInProperties {
	theme: Theme
}

// Create unique keys for points
const createPointKey = (point: string): string =>
	`linkedin-point-${point.toLowerCase().replaceAll(/\s+/g, '-')}`

export default function LinkedIn({ theme }: LinkedInProperties): JSX.Element {
	// Get theme-specific colors
	const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100'
	const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-300'
	const bgColor = theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'

	return (
		<section id='linkedin' className={`px-4 py-16 ${bgColor} overflow-hidden`}>
			<div className='container mx-auto max-w-4xl'>
				<div className='flex flex-col items-center gap-10 md:flex-row'>
					<div className='text-center md:w-1/2 md:text-left'>
						<h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textColor}`}>
							{siteConfig.linkedin.title}
						</h2>
						<p className={`${textSecondary} mx-auto mb-6 max-w-lg md:mx-0`}>
							{siteConfig.linkedin.subtitle}
						</p>
						<ul className='mx-auto mb-8 max-w-lg space-y-3 text-left md:mx-0'>
							{siteConfig.linkedin.points.map(point => (
								<li
									key={createPointKey(point)}
									className='flex items-start gap-3'
								>
									<svg
										className='mt-1 h-5 w-5 flex-shrink-0 text-primary-600'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
									<span className={textSecondary}>{point}</span>
								</li>
							))}
						</ul>
						<div className='flex flex-col justify-center gap-4 sm:flex-row md:justify-start'>
							<a
								href={siteConfig.linkedinUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-block w-full rounded-md bg-primary-600 px-6 py-3 text-center font-medium text-white transition hover:bg-primary-700 dark:text-white sm:w-auto'
							>
								{siteConfig.linkedin.buttonText}
							</a>
							<a
								href={`${siteConfig.linkedinUrl}/messaging`}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-block w-full rounded-md border border-secondary-600 px-6 py-3 text-center font-medium text-secondary-600 transition hover:bg-secondary-50 dark:text-secondary-400 dark:hover:bg-secondary-900/30 sm:w-auto'
							>
								{siteConfig.linkedin.messageText}
							</a>
						</div>
					</div>
					<div className='md:w-1/2'>
						<div className='transform rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-700 p-6 text-white shadow-xl transition-all duration-500 hover:translate-y-[-5px] dark:text-white sm:p-8'>
							<svg
								className='mx-auto mb-6 h-12 w-12 md:mx-0 md:h-16 md:w-16'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
							</svg>
							<h3 className='mb-4 text-center text-xl font-bold md:text-left'>
								Professional Growth
							</h3>
							<p className='mb-6 text-center md:text-left'>
								Join my professional network to explore collaboration
								opportunities and stay updated on the latest technology trends.
							</p>
							<div className='flex items-center justify-center gap-3 md:justify-start'>
								<div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold text-white dark:text-white'>
									MC
								</div>
								<div>
									<p className='font-semibold'>{siteConfig.name}</p>
									<p className='text-sm opacity-80'>{siteConfig.title}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
