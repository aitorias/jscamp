import { Link } from '@features/ui/shared'

export function HeaderNav({ links }) {
	return (
		<nav>
			{links.map((link) => (
				<Link key={link.href} href={link.href}>{link.text}</Link>
			))}
		</nav>
	)
}
