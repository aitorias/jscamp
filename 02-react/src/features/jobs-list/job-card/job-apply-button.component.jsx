import { useState } from 'react'
import { Button } from '@features/ui'

export function JobApplyButton({ defaultText, isAppliedText }) {
	const [isApplied, setIsApplied] = useState(false)

	const buttonClassAplied = isApplied ? 'is-applied' : ''
	const text = isApplied ? isAppliedText : defaultText

	const handleClick = () => {
		setIsApplied(true)
	}

	return <Button type='button' className={`jobs-listings__apply-button ${buttonClassAplied}`} onClick={handleClick} disabled={isApplied}>
		{text}
	</Button>
}
