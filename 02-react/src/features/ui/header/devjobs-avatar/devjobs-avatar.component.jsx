import { Image, Link } from '@features/ui/shared'
import { createUrl } from '@utils/create-url'
import styles from './devjobs-avatar.module.css'

export function DevJobsAvatar({ service = 'github', username = 'aAitorias', size }) {
	const url = createUrl(service, username)

	return (
		<Link href='#' className={styles.avatarLink}>
			<Image
				src={url}
				alt={`Avatar de ${username} en ${service}`}
				width={size}
				height={size}
				className={styles.avatarImage}
				style={{ height: size, width: size }}
			/>
		</ Link>
	)
}
