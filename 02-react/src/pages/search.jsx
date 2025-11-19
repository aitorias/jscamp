import { useState } from 'react'
import { JobsSearchForm } from '@features/jobs-search'
import { JobsSection } from '@features/ui'
import jobsData from '@data/data.json'

const RESULTS_PER_PAGE = 5

export function SearchPage({ }) {
	const [currentPage, setCurrentPage] = useState(1)
	const [searchText, setSearchText] = useState('')
	const [filters, setFilters] = useState({
		technology: [],
		location: '',
		experience: ''
	})

	const jobsFilteredByFilters = jobsData.filter((job) => {
		const jobTech = job.data?.technology
			? job.data.technology
				.toString()
				.split(',')
				.map(t => t.trim().toLowerCase())
			: [];

		const matchTechnology =
			filters.technology.length === 0 || filters.technology.some(tech =>
				jobTech.includes(tech.toLowerCase())
			);
		const matchLocation =
			!filters.location || job.data?.modalidad.toLowerCase() === filters.location.toLowerCase()
		const matchExperience =
			!filters.experience || job.data?.nivel.toLowerCase() === filters.experience.toLowerCase()

		return matchTechnology && matchLocation && matchExperience
	})

	const jobsFilteredByText = searchText === '' ? jobsFilteredByFilters : jobsFilteredByFilters.filter((job) => {
		return job.titulo?.toLowerCase().includes(searchText.toLowerCase()) || job.empresa?.toLowerCase().includes(searchText.toLowerCase()) || job.data?.technology?.toLowerCase().includes(searchText.toLowerCase())
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

	const handleFiltersChange = (newOption) => {
		setFilters(prev => ({ ...prev, ...newOption }));
		setCurrentPage(1);
	};

	const handleTextFilter = (inputText) => {
		setSearchText(inputText)
		setCurrentPage(1)
	}

	const handleReset = () => {
		setFilters({
			technology: '',
			location: '',
			experienceLevel: '',
		})
		setSearchText('')
		setCurrentPage(1)
	}

	return (
		<main>
			<JobsSearchForm totalResults={jobsFilteredByText.length} textToFilter={searchText} onFiltersChange={handleFiltersChange} onTextFilter={handleTextFilter} onReset={handleReset} />
			<JobsSection jobs={pageResults} currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
		</main>
	)
}
