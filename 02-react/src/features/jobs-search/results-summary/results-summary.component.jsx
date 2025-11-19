import styles from './results-summary.module.css'

export function ResultsSummary({ totalResults, textToFilter }) {
	if (totalResults === 0) return null

	const isPlural = totalResults > 1
	const verb = isPlural ? 'Se encontraron' : 'Se encontró'
	const noun = isPlural ? 'trabajos' : 'trabajo'

	return (
		<div className={styles.resultsSummary}>
			<p>
				{verb} <strong>{totalResults}</strong> {noun}
				{textToFilter && ` para "${textToFilter}"`}
			</p>
		</div>
	)
}
