import { useId, useRef } from 'react'
import { SearchBar } from '@features/jobs-search/search-bar/search-bar.component';
import { SearchFilters } from '@features/jobs-search/search-filters/search-filters.component';
import styles from '@features/jobs-search/jobs-search.module.css'

export function JobsSearchForm({ onFiltersChange = () => { }, onTextFilter = () => { } }) {
	const searchName = useId()
	const searchTechnologyID = useId()
	const technologyDropdownID = useId()
	const searchLocationID = useId()
	const searchExperienceID = useId()

	const debounceRef = useRef(null)

	const handleTextChange = (text) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current)
		}

		debounceRef.current = setTimeout(() => {
			onTextFilter(text)
		}, 500)
	}

	const handleFiltersChange = (event) => {
		const formData = new FormData(event.target.form)

		const filters = {
			technology: formData.getAll(searchTechnologyID),
			location: formData.get(searchLocationID),
			experience: formData.get(searchExperienceID)
		}

		onFiltersChange(filters)
	}

	return (
		<section className={styles.jobsSearch}>
			<h1>Encuentra tu próximo trabajo</h1>
			<p>Explora miles de oportunidades en el sector tecnológico.</p>
			<form role="search">
				<SearchBar searchName={searchName} onTextChange={handleTextChange} />
				<SearchFilters searchTechnologyID={searchTechnologyID} technologyDropdownID={technologyDropdownID} searchLocationID={searchLocationID} searchExperienceID={searchExperienceID} onOptionChanged={handleFiltersChange} />
			</form>
		</section>
	)
}
