/** ------------------------------------------------ **/
import '@styles/global.css'
import { copy, display } from '@styles/fonts'
import { getCurrentLocale } from '@locales/server'
import { ReactElement } from 'react'

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
		<html lang={locale} className={`${copy.variable} ${display.variable}`} >
			<body className="bg-base-100 antialiased">
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}