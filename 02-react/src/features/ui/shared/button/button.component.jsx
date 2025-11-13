import styles from '@ui/shared/button/button.module.css'

export function Button({ type, id, title, variant, className = '', onClick, disabled, children, ...rest }) {
	const variantClass = variant ? styles[variant] : ''

	return (
		<button type={type} id={id} title={title} className={`${styles.button} ${variantClass} ${className}`} onClick={onClick} {...rest} disabled={disabled}>
			{children}
		</button>
	)
}
