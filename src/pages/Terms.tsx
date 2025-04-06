import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig'
import { useTheme } from '../utils/theme'

export default function Terms(): JSX.Element {
	const { theme } = useTheme()

	const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900'
	const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100'
	const textSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-300'

	return (
		<div className={`min-h-screen ${bgColor}`}>
			<header className='container mx-auto px-4 py-8'>
				<Link
					to='/'
					className='flex items-center gap-2 text-primary-600 transition hover:text-primary-700'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-5 w-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
						/>
					</svg>
					Back to Home
				</Link>
			</header>

			<main className='container mx-auto max-w-4xl px-4 py-8'>
				<h1 className={`mb-8 text-3xl font-bold md:text-4xl ${textColor}`}>
					Terms of Service
				</h1>

				<div className={`space-y-6 ${textSecondary}`}>
					<p>
						Last updated:{' '}
						{new Date().toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							1. Introduction
						</h2>
						<p>
							Welcome to the website of {siteConfig.name} (&ldquo;we&rdquo;,
							&ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using our
							website located at {window.location.hostname} (the
							&ldquo;Site&rdquo;), you agree to be bound by these Terms of
							Service.
						</p>
						<p>
							Please read these Terms carefully before using the Site. If you do
							not agree to all the terms and conditions of this agreement, you
							should not use the Site.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							2. Intellectual Property Rights
						</h2>
						<p>
							Unless otherwise stated, we own the intellectual property rights
							for all material on the Site. All intellectual property rights are
							reserved. You may access this from the Site for your own personal
							use subjected to restrictions set in these terms and conditions.
						</p>
						<p>You must not:</p>
						<ul className='list-disc space-y-2 pl-6'>
							<li>Republish material from the Site</li>
							<li>Sell, rent or sub-license material from the Site</li>
							<li>Reproduce, duplicate or copy material from the Site</li>
							<li>Redistribute content from the Site</li>
						</ul>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							3. Use License
						</h2>
						<p>
							Permission is granted to temporarily download one copy of the
							materials on the Site for personal, non-commercial transitory
							viewing only. This is the grant of a license, not a transfer of
							title, and under this license you may not:
						</p>
						<ul className='list-disc space-y-2 pl-6'>
							<li>Modify or copy the materials</li>
							<li>
								Use the materials for any commercial purpose, or for any public
								display
							</li>
							<li>
								Attempt to decompile or reverse engineer any software contained
								on the Site
							</li>
							<li>
								Remove any copyright or other proprietary notations from the
								materials
							</li>
							<li>
								Transfer the materials to another person or &ldquo;mirror&rdquo;
								the materials on any other server
							</li>
						</ul>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							4. User Comments
						</h2>
						<p>
							Parts of this website may offer an opportunity for users to post
							and exchange opinions and information. We do not filter, edit,
							publish or review comments prior to their presence on the website.
							Comments do not reflect our views or opinions.
						</p>
						<p>
							We reserve the right to monitor all comments and to remove any
							comments which can be considered inappropriate, offensive, or
							causes breach of these Terms of Service.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							5. Disclaimer
						</h2>
						<p>
							The materials on the Site are provided on an &lsquo;as is&rsquo;
							basis. We make no warranties, expressed or implied, and hereby
							disclaims and negates all other warranties including, without
							limitation, implied warranties or conditions of merchantability,
							fitness for a particular purpose, or non-infringement of
							intellectual property or other violation of rights.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							6. Limitations
						</h2>
						<p>
							In no event shall we or our suppliers be liable for any damages
							(including, without limitation, damages for loss of data or
							profit, or due to business interruption) arising out of the use or
							inability to use the materials on the Site, even if we or a
							authorized representative has been notified orally or in writing
							of the possibility of such damage.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							7. Governing Law
						</h2>
						<p>
							These terms and conditions are governed by and construed in
							accordance with the laws and you irrevocably submit to the
							exclusive jurisdiction of the courts in that location.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							8. Changes to Terms
						</h2>
						<p>
							We reserve the right, at our sole discretion, to modify or replace
							these Terms at any time. If a revision is material we will try to
							provide at least 30 days&rsquo; notice prior to any new terms
							taking effect.
						</p>
						<p>Contact us if you have any questions about these Terms.</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							9. Contact Information
						</h2>
						<p>
							If you have any questions about these Terms, please contact us at{' '}
							{siteConfig.email}.
						</p>
					</section>
				</div>
			</main>

			<footer
				className={`container mx-auto mt-12 border-t px-4 py-8 ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}
			>
				<p className={`text-center ${textSecondary}`}>
					© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
				</p>
			</footer>
		</div>
	)
}
