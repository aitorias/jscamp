import { Link } from '@features/ui/shared'
import styles from '@features/ui/header/header-nav/header-nav.module.css'

export function HeaderNav({ links }) {
	return (
		<nav className={styles.nav}>
			{links.map((link) => (
				<Link key={link.href} href={link.href}>{link.text}</Link>
			))}
		</nav>
	)
}
