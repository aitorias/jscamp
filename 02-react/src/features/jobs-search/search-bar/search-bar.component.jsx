import { SVG } from '@features/ui'
import styles from '@features/jobs-search/search-bar/search-bar.module.css'

export function SearchBar({ jobs, searchName, onTextChange = () => { } }) {
	const handleInputChange = (event) => {
		const inputText = event.target.value

		onTextChange(inputText)
	}

	return (
		<div className={styles.searchBar}>
			<SVG>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M21 21l-6 -6" />
			</SVG>
			<input type="search" name={searchName} id={searchName} placeholder="Buscar trabajos, empresas o habilidades" onChange={handleInputChange} />
		</div>
	)
}
