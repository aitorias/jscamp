import { DevJobsAvatar } from '@features/ui/header/devjobs-avatar/devjobs-avatar.component'
import { Link } from '@features/ui/shared'
import styles from '@ui/header/header-links/header-links.module.css'

export function HeaderLinks({ buttons }) {
	return (
		<div className={styles.userLinks}>
			{buttons.map((button) => (
				<Link key={button.href} href={button.href}>{button.text}</Link>
			))}
			<DevJobsAvatar service='github' username='aitorias' size={40} />
		</div>
	)
}
