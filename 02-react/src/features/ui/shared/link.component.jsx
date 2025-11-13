export function Link({ href, title, className, children, isActive, onClick, ...rest }) {
	return (
		<a
			href={href}
			title={title}
			className={`${className} ${isActive ? 'active' : ''}`.trim()}
			onClick={onClick}
			{...rest}
		>
			{children}
		</a>
	)
}
