import { Button, Select } from '@features/ui'
import styles from '@features/jobs-search/search-filters/search-filters.module.css'

export function SearchFilters({ technologyDropdownID, searchTechnologyID, searchLocationID, searchExperienceID, onOptionChanged = () => { } }) {
	const locationOptions = [
		{
			label: 'Remoto',
			value: 'remoto'
		},
		{
			label: 'Argentina',
			options: [
				{
					label: 'Buenos Aires',
					value: 'bsas'
				}
			]
		},
		{
			label: 'Chile',
			options: [
				{
					label: 'Santiago de Chile',
					value: 'santiago'
				}
			]
		},
		{
			label: 'Colombia',
			options: [
				{
					label: 'Bogotá',
					value: 'bogota'
				}
			]
		},
		{
			label: 'España',
			options: [
				{
					label: 'Barcelona',
					value: 'barcelona'
				},
				{
					label: 'Madrid',
					value: 'madrid'
				},
				{
					label: 'Valencia',
					value: 'valencia'
				}
			]
		},
		{
			label: 'México',
			options: [
				{
					label: 'Ciudad de México',
					value: 'cdmx'
				},
				{
					label: 'Guadalajara',
					value: 'guadalajara'
				},
				{
					label: 'Monterrey',
					value: 'monterrey'
				}
			]
		},
		{
			label: 'Perú',
			options: [
				{
					label: 'Lima',
					value: 'lima'
				}
			]
		},
	]

	const experienceOptions = [
		{
			label: 'Junior',
			value: 'junior'
		},
		{
			label: 'Mid',
			value: 'mid-level'
		},
		{
			label: 'Senior',
			value: 'senior'
		},
		{
			label: 'Lead',
			value: 'lead'
		}
	]

	const handleSelectChange = (event) => {
		onOptionChanged(event)
	};

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
				<Select
					name={searchLocationID}
					id={searchLocationID}
					options={locationOptions}
					defaultValue='Ubicación'
					onChange={handleSelectChange}
				/>
			</div>
			<div className={styles.formGroup}>
				<Select
					name={searchExperienceID}
					id={searchExperienceID}
					options={experienceOptions}
					defaultValue='Experiencia'
					onChange={handleSelectChange}
				/>
			</div>
		</div>
	)
}
