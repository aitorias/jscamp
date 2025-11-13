import { Button } from '@features/ui'

export function JobApplyButton({ isApplied, onApply, defaultText, isAppliedText }) {
	const buttonClassAplied = isApplied ? 'is-applied' : ''
	const text = isApplied ? isAppliedText : defaultText

	return (
		<Button type='button' className={`jobs-listings__apply-button ${buttonClassAplied}`} onClick={onApply} disabled={isApplied}>
			{text}
		</Button>)

}
