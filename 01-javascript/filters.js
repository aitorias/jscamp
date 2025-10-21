const filterTechnology = document.querySelector('#filter-technology')
const filterLocation = document.querySelector('#filter-location')
const filterExperience = document.querySelector('#filter-experience')

function findTechnology(technology) {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

	jobsCards.forEach(jobCard => {
		const technologyLowerCased = (technology || '').toLowerCase()
		const articleTechnologies = jobCard.dataset.technology?.split(',').map(articleTechnology => articleTechnology.toLowerCase()) || []

		const isShown = technology === '' || articleTechnologies.includes(technologyLowerCased)

		jobCard.classList.toggle('hidden', !isShown)
	})
}

function findLocation(location) {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

	jobsCards.forEach(jobCard => {
		const locationType = jobCard.dataset.locationType
		const isShown = location === '' || locationType === location

		jobCard.classList.toggle('hidden', !isShown)
	})
}

function findExperience(experience) {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

	jobsCards.forEach(jobCard => {
		const jobExperience = jobCard.dataset.experience
		const isShown = experience === '' || jobExperience === experience

		jobCard.classList.toggle('hidden', !isShown)
	})
}

filterTechnology?.addEventListener('change', () => {
	const selectedTechnology = filterTechnology.value

	findTechnology(selectedTechnology)
})

filterLocation?.addEventListener('change', () => {
	const selectedLocation = filterLocation.value

	findLocation(selectedLocation)
})

filterExperience?.addEventListener('change', () => {
	const selectedExperience = filterExperience.value

	findExperience(selectedExperience)
})
