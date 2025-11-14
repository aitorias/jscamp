import { useState } from 'react'
import { JobDescription } from '@features/jobs-list/job-card/job-description.component'
import { JobHeader } from '@features/jobs-list/job-card/job-header/job-header.component'
import styles from '@features/jobs-list/job-card/job-card.module.css'

export function JobCard({ job }) {
	const [isApplied, setIsApplied] = useState(false)

	const { data, title, business, description, location, salary, modality } = job

	const handleApply = (event) => {
		event.preventDefault()

		setIsApplied(true)
	}

	return (
		<article className={styles.jobCard} data-technology={data?.technology} data-location-type={data?.modality} data-experience={data?.experience}>
			<JobHeader title={title} business={business} location={location} isApplied={isApplied} onApply={handleApply} />
			<JobDescription description={description} />
		</article>
	)
}
