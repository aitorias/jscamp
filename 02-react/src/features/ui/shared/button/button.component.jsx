import styles from './button.module.css'

export function Button({ type = 'button', id, title, variant = 'primary', className = '', onClick, disabled, children, ...props }) {
	const variantClass = variant ? styles[variant] : ''
	const buttonClassName = `${styles.button} ${variantClass} ${className}`.trim()

	return (
		<button
			type={type}
			id={id}
			title={title}
			className={buttonClassName}
			{...props}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	)
}
