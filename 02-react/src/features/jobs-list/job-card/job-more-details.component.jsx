export function JobMoreDetails({ salary, modality, experience }) {
	return (
		<div className='jobs-listings__more-job-details'>
			<span>💰 {salary}</span>
			<span>📍 {modality}</span>
			<span>📊 {experience}</span>
		</div>
	)
}
