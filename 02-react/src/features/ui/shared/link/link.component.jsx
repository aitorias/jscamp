import styles from './link.module.css'

export function Link({ href = '', title, className, isActive, children, onClick, ...props }) {
	const linkClassName = [className, isActive ? styles.active : ''].filter(Boolean).join(' ');

	return (
		<a
			href={href}
			title={title}
			className={linkClassName}
			onClick={onClick}
			{...props}
		>
			{children}
		</a>
	)
}
