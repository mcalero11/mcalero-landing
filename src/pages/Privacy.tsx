import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig'
import { useTheme } from '../utils/theme'

export default function Privacy(): JSX.Element {
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
					Privacy Policy
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
							Welcome to {siteConfig.name}&apos;s Privacy Policy. This Privacy
							Policy describes how your personal information is collected, used,
							and shared when you visit {window.location.hostname} (the
							&ldquo;Site&rdquo;).
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							2. Personal Information We Collect
						</h2>
						<p>
							When you visit the Site, we automatically collect certain
							information about your device, including information about your
							web browser, IP address, time zone, and some of the cookies that
							are installed on your device.
						</p>
						<p>
							Additionally, as you browse the Site, we collect information about
							the individual web pages that you view, what websites or search
							terms referred you to the Site, and information about how you
							interact with the Site.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							3. How We Use Your Personal Information
						</h2>
						<p>
							We use the information that we collect to help us screen for
							potential risk and fraud, and more generally to improve and
							optimize our Site.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							4. Sharing Your Personal Information
						</h2>
						<p>
							We do not share your Personal Information with third parties
							except to comply with applicable laws and regulations, to respond
							to a subpoena, search warrant or other lawful request for
							information we receive, or to otherwise protect our rights.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							5. Your Rights
						</h2>
						<p>
							If you are a European resident, you have the right to access
							personal information we hold about you and to ask that your
							personal information be corrected, updated, or deleted. If you
							would like to exercise this right, please contact us through the
							contact information below.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							6. Data Retention
						</h2>
						<p>
							When you visit the Site, we will maintain your information for our
							records unless and until you ask us to delete this information.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							7. Changes
						</h2>
						<p>
							We may update this privacy policy from time to time in order to
							reflect, for example, changes to our practices or for other
							operational, legal or regulatory reasons.
						</p>
					</section>

					<section className='space-y-4'>
						<h2 className={`text-xl font-semibold md:text-2xl ${textColor}`}>
							8. Contact Information
						</h2>
						<p>
							For more information about our privacy practices, if you have
							questions, or if you would like to make a complaint, please
							contact us by e-mail at {siteConfig.email}.
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
