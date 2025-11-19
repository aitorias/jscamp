import { JobApplyButton } from '@features/jobs-list/job-card/job-header/job-apply-button/job-apply-button.component'
import { JobDetails } from '@features/jobs-list/job-card/job-header/job-details/job-details.component'
import { JobTitle } from '@features/jobs-list/job-card/job-header/job-title.component'
import styles from './job-header.module.css'

export function JobHeader({ title, business, location, isApplied, onApply }) {
	return (
		<header className={styles.header}>
			<div>
				<JobTitle title={title} />
				<JobDetails business={business} location={location} />
			</div>
			<JobApplyButton isApplied={isApplied} onApply={onApply} defaultText='Aplicar' isAppliedText='Aplicado' />
		</header>
	)
}
