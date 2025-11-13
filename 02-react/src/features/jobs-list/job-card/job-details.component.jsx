import { JobBusiness } from '@features/jobs-list/job-card/job-business.component'
import { JobLocation } from '@features/jobs-list/job-card/job-location.component'

export function JobDetails({ business, location }) {
	return (
		<div className='jobs-listings__job-details'>
			<JobBusiness business={business} /> <small>|</small> <JobLocation location={location} />
		</div>
	)
}
