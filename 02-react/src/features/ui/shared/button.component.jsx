export function Button({ type, title, className, onClick, disabled, children, ...rest }) {
	return (
		<button type={type} title={title} className={className} onClick={onClick} {...rest} disabled={disabled}>
			{children}
		</button>
	)
}
