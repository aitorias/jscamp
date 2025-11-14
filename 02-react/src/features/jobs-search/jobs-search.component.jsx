import { useId } from 'react'
import { SearchBar } from '@features/jobs-search/search-bar/search-bar.component';
import { SearchFilters } from '@features/jobs-search/search-filters/search-filters.component';
import styles from '@features/jobs-search/jobs-search.module.css'

export function JobsSearchForm({ jobs, onSearch, onTextFilter }) {
	const searchName = useId()
	const searchTechnologyID = useId()
	const technologyDropdownID = useId()
	const searchLocationID = useId()
	const searchExperienceID = useId()

	const handleTextChange = (text) => {
		onTextFilter(text)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const formData = new FormData(event.target)

		const filters = {
			search: formData.get(searchName),
			technology: formData.get(searchTechnologyID),
			location: formData.get(searchLocationID),
			experience: formData.get(searchExperienceID)
		}

		onSearch(filters)
	}

	return (
		<section className={styles.jobsSearch}>
			<h1>Encuentra tu próximo trabajo</h1>
			<p>Explora miles de oportunidades en el sector tecnológico.</p>
			<form role="search" onSubmit={handleSubmit}>
				<SearchBar jobs={jobs} searchName={searchName} onSearch={onSearch} onTextChange={handleTextChange} />
				<SearchFilters searchTechnologyID={searchTechnologyID} technologyDropdownID={technologyDropdownID} searchLocationID={searchLocationID} searchExperienceID={searchExperienceID} />
			</form>
		</section>
	)
}
