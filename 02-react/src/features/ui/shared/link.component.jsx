export function Link({ href, title, className, isActive, onClick, children, ...rest }) {
	const linkClassName = `${className} ${isActive ? 'active' : ''}`.trim()

	return (
		<a
			href={href}
			title={title}
			className={linkClassName}
			onClick={onClick}
			{...rest}
		>
			{children}
		</a>
	)
}
