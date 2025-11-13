import { DevJobsAvatar } from '@features/ui/header/dev-jobs-avatar.component'
import { Link } from '@features/ui/shared'

export function HeaderLinks({ buttons }) {
	return (
		<div className='user-links'>
			{buttons.map((button) => (
				<Link key={button.href} href={button.href}>{button.text}</Link>
			))}
			<DevJobsAvatar service='github' username='aitorias' size={40} />
		</div>
	)
}
