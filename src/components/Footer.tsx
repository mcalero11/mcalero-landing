import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig'
import type { Theme } from '../utils/theme'

interface FooterProperties {
	theme: Theme
}

interface SocialLink {
	name: string
	url: string
	icon: string
}

export default function Footer({ theme }: FooterProperties): JSX.Element {
	// Get theme-specific colors
	const bgColor = theme === 'light' ? 'bg-gray-900' : 'bg-black'
	const textColor = 'text-white'
	const socialLinkColor = 'text-gray-300 hover:text-white'

	return (
		<footer className={`py-8 ${bgColor} ${textColor}`}>
			<div className='container mx-auto max-w-4xl px-4'>
				<div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
					<div className='text-center md:text-left'>
						<p className='text-lg font-semibold'>{siteConfig.name}</p>
						<p className='mt-1 text-sm text-gray-400'>{siteConfig.title}</p>
					</div>

					<div className='flex flex-wrap justify-center gap-6'>
						{(siteConfig.socialLinks as SocialLink[]).map(
							(link: SocialLink) => (
								<a
									key={link.name}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									className={`${socialLinkColor} transition-colors duration-300`}
									aria-label={link.name}
								>
									<span className='sr-only'>{link.name}</span>
									<svg
										className='h-6 w-6'
										aria-hidden='true'
										fill='currentColor'
										dangerouslySetInnerHTML={{ __html: link.icon }}
									/>
								</a>
							)
						)}
					</div>
				</div>

				<div className='mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400 md:text-left'>
					<div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
						<p>
							© {new Date().getFullYear()} {siteConfig.name}. All rights
							reserved.
						</p>
						<div className='flex flex-wrap justify-center gap-6'>
							<Link
								to='/privacy-policy'
								className='transition-colors duration-300 hover:text-white'
							>
								Privacy Policy
							</Link>
							<Link
								to='/terms-of-service'
								className='transition-colors duration-300 hover:text-white'
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
