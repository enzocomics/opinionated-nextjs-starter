/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				copy: ['var(--font-copy)'],
				display: ['var(--font-display)'],
			},
			backgroundImage: {
				// "imgBackground" : "url('')"
			},
			colors: {
			// Light/Dark mode colors
				base: {
					100: 'rgb(var(--color-base-1) / <alpha-value>)',
					200: 'rgb(var(--color-base-2) / <alpha-value>)',
					300: 'rgb(var(--color-base-3) / <alpha-value>)',
					content: 'rgb(var(--color-content) / <alpha-value>)', // foreground color
					invert: 'rgb(var(--color-invert) / <alpha-value>)', // background color 
				},
			// These primariy colours do not change between themes
				primary: '#0066fe',
				secondary: '#009900',
				error: '#ff0000',
				'colors-content': '#ffffff', // foreground colour if the primaries are used as backgrounds
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			// Light mode theme
			addVariant('light', 'html.light &')
		})
	],
}

