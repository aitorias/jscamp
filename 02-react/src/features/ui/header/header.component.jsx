import { HeaderLinks } from '@features/ui/header/header-links.component'
import { HeaderNav } from '@features/ui/header/header-nav.component'
import { SVG } from '@features/ui/shared'

export function Header() {
	const menuLinks = [
		{ href: 'index.html', text: 'Índice' },
		{ href: 'empleos', text: 'Empleos' }
	]

	const buttons = [
		{ href: '#', text: 'Subir CV' }
	]

	return (
		<header className='site-header'>
			<h1>
				<SVG strokeWidth={2} viewBox={'0 0 24 24'}>
					<polyline points='16 18 22 12 16 6'></polyline>
					<polyline points='8 6 2 12 8 18'></polyline>
				</SVG>
				DevJobs
			</h1>
			<HeaderNav links={menuLinks} />
			<HeaderLinks buttons={buttons} />
		</header>
	)
}
