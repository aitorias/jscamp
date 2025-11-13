import { useState } from 'react'
import { JobsSearch, JobsSection } from '@features/ui'
import jobsData from '@data/data.json'

const RESULTS_PER_PAGE = 5

export function Main() {
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE)

	const pageResults = jobsData.slice(
		(currentPage - 1) * RESULTS_PER_PAGE,
		currentPage * RESULTS_PER_PAGE
	)

	const handlePageChange = (page) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<main>
			<JobsSearch />
			<JobsSection jobs={pageResults} currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
		</main>
	)
}
