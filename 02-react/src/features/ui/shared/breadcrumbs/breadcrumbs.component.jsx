import { Link } from '@features/ui/shared'
import { useRouter } from '@hooks/react-hooks'
import styles from './breadcrumbs.module.css'

export function Breadcrumbs() {
	const { pathname } = useRouter()

	let path = pathname.replace(/\/+$/, '');

	path = path.startsWith('/') ? path.slice(1) : path

	if (path === '') return null

	const [firstLetter, ...rest] = path
	const displayPath = firstLetter.toUpperCase() + rest.join('')

	return (
		<div className={styles.breadcrumbs}>
			<Link href="/">Inicio</Link> / <span>{displayPath}</span>
		</div>
	)
}
