import { JobApplyButton } from '@features/jobs-list/job-card/job-apply-button.component'
import { JobDetails } from '@features/jobs-list/job-card/job-details.component'
import { JobTitle } from '@features/jobs-list/job-card/job-title.component'

export function JobHeader({ title, business, location }) {
	return (
		<header>
			<div>
				<JobTitle title={title} />
				<JobDetails business={business} location={location} />
			</div>
			<JobApplyButton defaultText={'Aplicar'} isAppliedText={'Aplicado'} />
		</header>
	)
}
