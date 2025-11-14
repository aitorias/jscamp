import { JobCard } from '@features/jobs-list/job-card'
import styles from '@features/jobs-list/jobs-list.module.css'

export function JobsList({ jobs, page }) {
	return (
		<>
			{jobs.length === 0 ? (
				<>
					<p>No hay trabajos disponibles.</p>
				</>
			) : (
				<div className={styles.jobsList}>
					{jobs.map((job) => (
						<JobCard
							key={job.id}
							job={{
								title: job.titulo,
								business: job.empresa,
								description: job.descripcion,
								location: job.ubicacion,
								data: {
									technology: job.data.technology,
									modality: job.data.modalidad,
									experience: job.data.nivel,
								},
							}}
						/>
					))}
				</div>
			)}
		</>
	)
}
