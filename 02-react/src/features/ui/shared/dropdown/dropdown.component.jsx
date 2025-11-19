import { useEffect, useRef } from 'react';
import styles from './dropdown.module.css'

export function Dropdown({ ariaLabelledBy, className = '', hidden = false, open, onClose = () => { }, children }) {
	const ref = useRef(null);

	useEffect(() => {
		if (!open) return;

		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				onClose?.();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [open]);

	return (
		<div ref={ref} aria-labelledby={`${ariaLabelledBy}`} className={`${styles.dropdown} ${hidden ? 'hidden' : ''} ${className}`}>
			{children}
		</div >
	)
}
