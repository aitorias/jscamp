import { useState } from 'react'
import { JobsSearch } from '@features/jobs-search'
import { JobsSection } from '@features/ui'
import jobsData from '@data/data.json'

const RESULTS_PER_PAGE = 5

export function Main() {
	const [currentPage, setCurrentPage] = useState(1)
	const [textToFilter, setTextToFilter] = useState('')
	const [filters, setFilters] = useState({
		technology: '',
		location: '',
		experience: ''
	})

	const jobsFilteredByFilters = jobsData.filter((job) => {
		return (
			(filters.location === '' || job.data?.modalidad.toLowerCase() === filters.location.toLowerCase()) &&
			(filters.experience === '' || job.data?.nivel.toLowerCase() === filters.experience.toLowerCase())
		)
	})

	const jobsFilteredByText = textToFilter === '' ? jobsFilteredByFilters : jobsFilteredByFilters.filter((job) => {
		return job.titulo?.toLowerCase().includes(textToFilter.toLowerCase())
	})

	const totalPages = Math.ceil(jobsFilteredByText.length / RESULTS_PER_PAGE)

	const pageResults = jobsFilteredByText.slice(
		(currentPage - 1) * RESULTS_PER_PAGE,
		currentPage * RESULTS_PER_PAGE
	)

	const handlePageChange = (page) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleSearch = (filters) => {
		console.log('Main:handleSearch:', filters)
		setFilters(filters)
		setCurrentPage(1)
	}

	const handleTextFilter = (textToFilter) => {
		setTextToFilter(textToFilter)
		setCurrentPage(1)
	}

	return (
		<main>
			<JobsSearch jobs={pageResults} onSearch={handleSearch} onTextFilter={handleTextFilter} />
			<JobsSection jobs={pageResults} currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
		</main>
	)
}
