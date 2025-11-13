import { JobsList } from '@features/jobs-list'
import { Pagination } from '@features/jobs-list'

export function JobsSection({ jobs, currentPage, totalPages, handlePageChange }) {
	return (
		<section className='jobs'>
			<header>
				<h2>Resultados de búsqueda</h2>
			</header>
			<JobsList jobs={jobs} page={currentPage} />
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</section>
	)
}
