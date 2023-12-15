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
				"baseColor": "rgb(var(--color-base) / <alpha-value>)",
				"midColor": "rgb(var(--color-mid) / <alpha-value>)",
				"textColor": "rgb(var(--color-text) / <alpha-value>)",
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

