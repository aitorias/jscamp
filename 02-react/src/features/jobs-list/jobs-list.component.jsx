import { JobCard } from '@features/jobs-list/job-card'

export function JobsList({ jobs, page }) {
	return (
		<>
			{jobs.length === 0 ? (
				<>
					<p>No hay trabajos disponibles.</p>
				</>
			) : (
				<div className='jobs-listings'>
					{jobs.map((job) => (
						<JobCard
							key={job.id}
							job={{
								title: job.title,
								business: job.company,
								description: job.description,
								salary: '€40,000 - €60,000',
								modality: 'Remoto',
								data: {
									technology: 'React',
									locationType: job.location,
									experience: 'Senior',
								},
							}}
						/>
					))}
				</div>
			)}
		</>
	)
}
