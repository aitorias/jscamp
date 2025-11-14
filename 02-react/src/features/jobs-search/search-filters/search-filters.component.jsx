import { Button } from '@features/ui'
import styles from '@features/jobs-search/search-filters/search-filters.module.css'

export function SearchFilters({ technologyDropdownID, searchTechnologyID, searchLocationID, searchExperienceID }) {

	return (
		<div className={styles.searchFilters}>
			<div className={styles.formGroup} id="technology-checkboxes">
				<Button type='button' id={technologyDropdownID} className={styles.dropdownButton}>
					Tecnología
				</Button>
				<div aria-labelledby={technologyDropdownID} className="dropdown form-group flex-col hidden">
					<div className="checkbox-group">
						<input type="checkbox" id={`${searchTechnologyID}-javascript`} name={searchTechnologyID} value="javascript" />
						<label htmlFor={`${searchTechnologyID}-javascript`}>JavaScript</label>
					</div>
					<div className="checkbox-group">
						<input type="checkbox" id={`${searchTechnologyID}-python`} name={searchTechnologyID} value="python" />
						<label htmlFor={`${searchTechnologyID}-python`}>Python</label>
					</div>
					<div className="checkbox-group">
						<input type="checkbox" id={`${searchTechnologyID}-java`} name={searchTechnologyID} value="java" />
						<label htmlFor={`${searchTechnologyID}-java`}>Java</label>
					</div>
					<div className="checkbox-group">
						<input type="checkbox" id={`${searchTechnologyID}-react`} name={searchTechnologyID} value="react" />
						<label htmlFor={`${searchTechnologyID}-react`}>React</label>
					</div>
					<div className="checkbox-group">
						<input type="checkbox" id={`${searchTechnologyID}-node`} name={searchTechnologyID} value="node" />
						<label htmlFor={`${searchTechnologyID}-node`}>Node.js</label>
					</div>
				</div>
			</div>
			<div className={styles.formGroup}>
				<select name={searchLocationID} id={searchLocationID}>
					<option value="" selected>Ubicación</option>
					<option value="remoto">Remoto</option>
					<optgroup label="Argentina">
						<option value="bsas">Buenos Aires</option>
					</optgroup>
					<optgroup label="Chile">
						<option value="santiago">Santiago de Chile</option>
					</optgroup>
					<optgroup label="Colombia">
						<option value="bogota">Bogotá</option>
					</optgroup>
					<optgroup label="España">
						<option value="barcelona">Barcelona</option>
						<option value="madrid">Madrid</option>
						<option value="valencia">Valencia</option>
					</optgroup>
					<optgroup label="México">
						<option value="cdmx">Ciudad de México</option>
						<option value="guadalajara">Guadalajara</option>
						<option value="monterrey">Monterrey</option>
					</optgroup>
					<optgroup label="Perú">
						<option value="lima">Lima</option>
					</optgroup>
				</select>
			</div>
			<div className={styles.formGroup}>
				<select name={searchExperienceID} id={searchExperienceID}>
					<option value="" selected>Nivel de experiencia</option>
					<option value="junior">Júnior</option>
					<option value="mid-level">Mid</option>
					<option value="senior">Senior</option>
					<option value="lead">Lead</option>
				</select>
			</div>
		</div>
	)
}
