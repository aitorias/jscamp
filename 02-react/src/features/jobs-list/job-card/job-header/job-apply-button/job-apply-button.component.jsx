import { Button } from '@features/ui'
import styles from './job-apply-button.module.css'

export function JobApplyButton({ isApplied, onApply, defaultText, isAppliedText }) {
	const buttonClassAplied = isApplied ? styles.isApplied : ''
	const text = isApplied ? isAppliedText : defaultText

	return (
		<Button type='button' variant='primary' className={buttonClassAplied} onClick={onApply} disabled={isApplied}>
			{text}
		</Button>)

}
