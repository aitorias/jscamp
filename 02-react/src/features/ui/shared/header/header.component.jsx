import { HeaderLinks } from '@features/ui/shared/header/header-links/header-links.component.jsx'
import { HeaderNav } from '@features/ui/shared/header/header-nav/header-nav.component.jsx'
import { Link, SVG } from '@features/ui/shared'
import styles from './header.module.css'

export function Header() {
	const menuLinks = [
		{ href: '/', text: 'Inicio' },
		{ href: '/search', text: 'Empleos' }
	]

	const buttons = [
		{ href: '#', text: 'Subir CV' }
	]

	return (
		<header className={styles.header}>

			<Link href='/'>
				<h1>
					<SVG strokeWidth={2} viewBox={'0 0 24 24'}>
						<polyline points="16 18 22 12 16 6"></polyline>
						<polyline points="8 6 2 12 8 18"></polyline>
					</SVG>
					DevJobs
				</h1>
			</Link>

			<HeaderNav links={menuLinks} />
			<HeaderLinks buttons={buttons} />
		</header>
	)
}
