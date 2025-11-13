import { useState } from 'react'
import { JobsList } from '@features/jobs-list'
import { Pagination } from '@features/jobs-list'

export function JobsSection() {
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 5

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	return (
		<section className='jobs'>
			<header>
				<h2>Resultados de búsqueda</h2>
			</header>
			<JobsList page={currentPage} />
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</section>
	)
}
