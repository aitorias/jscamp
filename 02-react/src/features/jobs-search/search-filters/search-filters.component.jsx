import { useState } from 'react';
import { Button, Select } from '@features/ui'
import styles from '@features/jobs-search/search-filters/search-filters.module.css'
import { Dropdown } from '@features/ui/dropdown/dropdown.component.jsx'

export function SearchFilters({ technologyDropdownID, searchTechnologyID, searchLocationID, searchExperienceID, onOptionChanged = () => { } }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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

	const handleDropdown = () => {
		setIsDropdownOpen((open) => !open)
	}

	const handleCheckboxChange = (event) => {
		onOptionChanged(event)
	}

	return (
		<div className={styles.searchFilters}>
			<div className={styles.formGroup} id="technology-checkboxes">
				<Button type='button' id={technologyDropdownID} aria-label={`${technologyDropdownID}dropdown`} className={styles.dropdownButton} onClick={handleDropdown}>
					Tecnología
				</Button>
				<Dropdown ariaLabelledBy={`${technologyDropdownID}dropdown`} hidden={!isDropdownOpen} open={isDropdownOpen} onClose={() => setIsDropdownOpen(false)}>
					<div className={styles.checkboxGroup}>
						<input type="checkbox" id={`${searchTechnologyID}-javascript`} name={searchTechnologyID} value="javascript" onChange={handleCheckboxChange} />
						<label htmlFor={`${searchTechnologyID}-javascript`}>JavaScript</label>
					</div>
					<div className={styles.checkboxGroup}>
						<input type="checkbox" id={`${searchTechnologyID}-python`} name={searchTechnologyID} value="python" onChange={handleCheckboxChange} />
						<label htmlFor={`${searchTechnologyID}-python`}>Python</label>
					</div>
					<div className={styles.checkboxGroup}>
						<input type="checkbox" id={`${searchTechnologyID}-java`} name={searchTechnologyID} value="java" onChange={handleCheckboxChange} />
						<label htmlFor={`${searchTechnologyID}-java`}>Java</label>
					</div>
					<div className={styles.checkboxGroup}>
						<input type="checkbox" id={`${searchTechnologyID}-react`} name={searchTechnologyID} value="react" onChange={handleCheckboxChange} />
						<label htmlFor={`${searchTechnologyID}-react`}>React</label>
					</div>
					<div className={styles.checkboxGroup}>
						<input type="checkbox" id={`${searchTechnologyID}-node`} name={searchTechnologyID} value="node" onChange={handleCheckboxChange} />
						<label htmlFor={`${searchTechnologyID}-node`}>Node.js</label>
					</div>
				</Dropdown>
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
