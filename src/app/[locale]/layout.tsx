/** ------------------------------------------------ **/
import '@styles/global.css'
import { ReactElement } from 'react'
import { getCurrentLocale } from '@locales/server'
import { copy, display } from '@styles/fonts'

/** ------------------------------------------------ **
 * Root Layout **REQUIRED**
 * - Applies to all routes
 * - Enables modification of the HTML returned from the server
 * - MUST define <html> and <body> tags
 * - MUST be a server component
 ** ------------------------------------------------ **/

export default function RootLayout({
	children,
}: {
	children: ReactElement
}) {
	const locale: string = getCurrentLocale()
	return (
		<html lang={locale} data-theme="dark" className={`${copy.variable} ${display.variable}`}>
			<body className="antialiased bg-base-100">
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}