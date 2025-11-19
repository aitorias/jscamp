import { SVG } from '@features/ui'
import styles from './search-bar.module.css'

export function SearchBar({ searchName, className, onInputBlur = () => { }, onInputFocus = () => { }, onTextChange = () => { } }) {
	const handleInpuBlur = (event) => {
		onInputBlur(event)
	}

	const handleInputChange = (event) => {
		const inputText = event.target.value

		onTextChange(inputText)
	}

	const handleInputFocus = (event) => {
		onInputFocus(event)
	}

	return (
		<div className={`${styles.searchBar} ${className}`}>
			<SVG>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M21 21l-6 -6" />
			</SVG>
			<input type="search" name={searchName} id={searchName} placeholder="Buscar trabajos, empresas o habilidades" onBlur={handleInpuBlur} onChange={handleInputChange} onFocus={handleInputFocus} />
		</div>
	)
}
