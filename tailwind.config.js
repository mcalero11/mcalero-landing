const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans]
		},
		extend: {
			colors: {
				primary: {
					50: '#e6f2ff', // Lightest blue
					100: '#cce4ff',
					200: '#99caff',
					300: '#66a9ff',
					400: '#3388ff',
					500: '#0a66c2', // LinkedIn blue
					600: '#0956a3', // Slightly darker
					700: '#074787',
					800: '#05366b',
					900: '#042550',
					950: '#021739' // Darkest blue
				},
				secondary: {
					50: '#eef2ff', // indigo-50
					100: '#e0e7ff', // indigo-100
					200: '#c7d2fe', // indigo-200
					300: '#a5b4fc', // indigo-300
					400: '#818cf8', // indigo-400
					500: '#6366f1', // indigo-500
					600: '#4f46e5', // indigo-600
					700: '#4338ca', // indigo-700
					800: '#3730a3', // indigo-800
					900: '#312e81', // indigo-900
					950: '#1e1b4b' // indigo-950
				}
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin],
	darkMode: 'class'
}
module.exports = config
