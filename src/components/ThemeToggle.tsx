import type { Theme } from '../utils/theme'

interface ThemeToggleProperties {
	theme: Theme
	onChange: () => void
}

export default function ThemeToggle({
	theme,
	onChange
}: ThemeToggleProperties): JSX.Element {
	return (
		<button
			type='button'
			className={`rounded-full p-2 shadow-md ${
				theme === 'dark'
					? 'bg-gray-800 text-secondary-300 hover:bg-gray-700'
					: 'bg-white text-primary-500 hover:bg-gray-50'
			} transition-colors`}
			onClick={onChange}
			aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
		>
			{theme === 'dark' ? (
				// Sun icon for dark mode (switch to light)
				<svg
					className='h-6 w-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
					/>
				</svg>
			) : (
				// Moon icon for light mode (switch to dark)
				<svg
					className='h-6 w-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
					/>
				</svg>
			)}
		</button>
	)
}
