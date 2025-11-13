import { Image } from '@features/ui/shared'
import { Link } from '@features/ui/shared'
import { createUrl } from '@utils/create-url'

export function DevJobsAvatar({ service = 'github', username = 'aAitorias', size }) {
	const url = createUrl(service, username)

	return (
		<Link href={'#'} className='avatar-link'>
			<Image
				src={url}
				alt={`Avatar de ${username} en ${service}`}
				width={size}
				height={size}
				className='avatar-image'
				style={{ height: size, width: size }}
			/>
		</ Link>
	)
}
