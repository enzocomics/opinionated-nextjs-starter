/** ------------------------------------------------ **/
import { getScopedI18n } from '@locales/server'

/** ------------------------------------------------ **
 * Homepage **REQUIRED**
 ** ------------------------------------------------ **/

export default async function Homepage() {
	// Retrieve Messages
	const t = await getScopedI18n('homepage')

	return (
		<>
			<h1 className="font-display text-8xl font-bold">
				{t('welcome')}
			</h1>
			<div className="font-copy">
				{t('message')}
			</div>
		</>
	)
}