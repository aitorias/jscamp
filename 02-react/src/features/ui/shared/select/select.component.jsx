import styles from './select.module.css'

export function Select({ name, id, options, defaultValue, onChange }) {
	return (
		<select name={name} id={id} className={styles.select} onChange={onChange}>
			<option value=''>{defaultValue}</option>
			{options?.map((option) => (
				option.options ? (
					<optgroup key={option.label} label={option.label}>
						{option.options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</optgroup>
				) : (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				)
			))}
		</select>
	)
}
