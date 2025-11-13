export function Button({ type, id, title, className, onClick, disabled, children, ...rest }) {
	return (
		<button type={type} id={id} title={title} className={className} onClick={onClick} {...rest} disabled={disabled}>
			{children}
		</button>
	)
}
