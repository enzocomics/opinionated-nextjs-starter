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
					content: 'rgb(var(--color-base-content) / <alpha-value>)', // foreground color
					invert: 'rgb(var(--color-base-invert) / <alpha-value>)', // background color 
				},
			// These primariy colours do not change between themes
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				error: 'rgb(var(--color-error) / <alpha-value>)',
				'colors-content': 'rgb(var(--color-content) / <alpha-value>)', // foreground colour if the primaries are used as backgrounds
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
		// Light mode theme
			addVariant('light', 'html[data-theme=light] &')
		})
	],
}

