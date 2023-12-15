/** ------------------------------------------------ **/
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Noto_Sans, Inter } from 'next/font/google'

/** ------------------------------------------------ **
 * Webfont Variables
 ** ------------------------------------------------ **/

const copy: NextFontWithVariable = Noto_Sans({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	variable: '--font-copy',
})

const display: NextFontWithVariable = Inter({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	variable: '--font-display',
})

/** ------------------------------------------------ **/

export { copy, display }