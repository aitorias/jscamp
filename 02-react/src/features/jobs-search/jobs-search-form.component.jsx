import { useId, useRef, useState } from 'react'
import { SearchBar } from '@features/jobs-search/search-bar/search-bar.component';
import { SearchFilters } from '@features/jobs-search/search-filters/search-filters.component';
import { ResultsSummary } from '@features/jobs-search/results-summary/results-summary.component';
import { Button } from '@features/ui';
import styles from '@features/jobs-search/jobs-search-form.module.css'

export function JobsSearchForm({ totalResults, textToFilter, onFiltersChange = () => { }, onTextFilter = () => { }, onReset = () => { } }) {
	const searchName = useId()
	const searchTechnologyID = useId()
	const technologyDropdownID = useId()
	const searchLocationID = useId()
	const searchExperienceID = useId()

	const [focusedField, setFocusedField] = useState(null)

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

	const handleInputBlur = () => {
		setFocusedField(null)
	}

	const handleInputFocus = () => {
		setFocusedField('search')
	}

	const handleFormChange = (event) => {
		const formData = new FormData(event.currentTarget)

		const filters = {
			technology: formData.getAll(searchTechnologyID),
			location: formData.get(searchLocationID),
			experience: formData.get(searchExperienceID)
		}

		onFiltersChange(filters)
	}

	const handleReset = () => {
		document.querySelector('.search-form').reset()
		onReset()
	}

	return (
		<section className={styles.jobsSearch}>
			<h1>Encuentra tu próximo trabajo</h1>
			<p>Explora miles de oportunidades en el sector tecnológico.</p>
			<form role="search" className='search-form' onChange={handleFormChange}>
				<SearchBar searchName={searchName} onInputBlur={handleInputBlur} onInputFocus={handleInputFocus} onTextChange={handleTextChange} className={focusedField === 'search' ? 'input-focused' : ''} />
				{focusedField === 'search' && (
					<small className={styles.inputHint}>Busca por título de trabajo, empresa o tecnología</small>
				)}
				<SearchFilters searchTechnologyID={searchTechnologyID} technologyDropdownID={technologyDropdownID} searchLocationID={searchLocationID} searchExperienceID={searchExperienceID} />
				<Button type='reset' variant='secondary' onClick={handleReset}>Borrar filtros</Button>
			</form>
			<ResultsSummary totalResults={totalResults} text={textToFilter} />
		</section>
	)
}
