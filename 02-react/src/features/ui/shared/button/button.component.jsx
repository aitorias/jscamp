import styles from '@ui/shared/button/button.module.css'

export function Button({ type = 'button', id, title, variant = 'primary', className = '', onClick, disabled, children, ...rest }) {
	const variantClass = variant ? styles[variant] : ''
	const buttonClassName = `${styles.button} ${variantClass} ${className}`.trim()

	return (
		<button
			type={type}
			id={id}
			title={title}
			className={buttonClassName}
			onClick={onClick}
			{...rest}
			disabled={disabled}>
			{children}
		</button>
	)
}
