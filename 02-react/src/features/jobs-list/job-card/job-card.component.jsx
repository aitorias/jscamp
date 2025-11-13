import { useState } from 'react'
import { JobDescription } from '@features/jobs-list/job-card/job-description.component'
import { JobHeader } from '@features/jobs-list/job-card/job-header.component'
import { JobMoreDetails } from '@features/jobs-list/job-card/job-more-details.component'

export function JobCard({ job }) {
	const [isApplied, setIsApplied] = useState(false)

	const { data, title, business, description, salary, modality } = job

	const handleApply = (event) => {
		event.preventDefault()

		setIsApplied(true)
	}

	return (
		<article className='jobs-listings__job-listing-card' data-technology={data?.technology} data-location-type={data?.locationType} data-experience={data?.experience}>
			<JobHeader title={title} business={business} location={data?.locationType} isApplied={isApplied} onApply={handleApply} />
			<JobDescription description={description} />
			<JobMoreDetails salary={salary} modality={modality} experience={data.experience} />
		</article>
	)
}
