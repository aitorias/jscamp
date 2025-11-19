import { Link } from '@features/ui/shared'
import { useRouter } from "@hooks/react-hooks"
import styles from './header-nav.module.css'

export function HeaderNav({ links }) {
	const { pathname, navigateTo } = useRouter()

	const handleNavigation = (href) => (event) => {
		event.preventDefault()

		navigateTo(href)
	};

	return (
		<nav className={styles.nav}>
			{links.map((link) => {
				const isActive = pathname === link.href
				const linkClassName = `${styles.link} ${isActive ? styles.active : ''}`

				return <Link key={link.href} href={link.href} className={linkClassName} onClick={handleNavigation}>{link.text}</Link>
			})}
		</nav>
	)
}
