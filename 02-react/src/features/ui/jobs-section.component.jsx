import { JobsList } from '@features/jobs-list'
import { Pagination } from '@features/jobs-list'
import styles from '@features/ui/jobs-section.module.css'

export function JobsSection({ jobs, currentPage, totalPages, handlePageChange }) {
	return (
		<section className={styles.jobs}>
			<header>
				<h2>Resultados de búsqueda</h2>
			</header>
			<JobsList jobs={jobs} page={currentPage} />
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</section>
	)
}
