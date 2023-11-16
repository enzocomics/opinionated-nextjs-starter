/** ------------------------------------------------ **/
import '@styles/global.css'
import { FontNoto, FontInter } from '@styles/fonts'
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
		<html lang={locale} className={`${FontNoto.variable} ${FontInter.variable}`} >
			<body className="text-textColor bg-midColor antialiased">
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}