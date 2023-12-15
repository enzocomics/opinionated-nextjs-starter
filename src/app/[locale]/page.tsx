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
			<ul>
				<li>
					<button className="bg-primary text-colors-content">
						Primary
					</button>
				</li>
				<li>
					<button className="bg-secondary text-colors-content">
						Secondary
					</button>
				</li>
				<li>
					<button className="bg-error text-colors-content">
						Error
					</button>
				</li>
				<li>
					<button className="bg-base-100">
						Base-100
					</button>
				</li>
				<li>
					<button className="bg-base-200">
						Base-200
					</button>
				</li>
				<li>
					<button className="bg-base-300">
						Base-300
					</button>
				</li>
				<li>
					<button className="bg-base-content text-base-invert">
						Base inverted
					</button>
				</li>
			</ul>
		</>
	)
}