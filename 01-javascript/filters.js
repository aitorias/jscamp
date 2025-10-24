const filters = {
  technology: document.querySelector('#filter-technology'),
  locationType: document.querySelector('#filter-location'),
  experience: document.querySelector('#filter-experience')
}

const technologies = document.querySelector('#technology-checkboxes')

function getCheckedTechnologies() {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')
	const technologiesCheckboxes = [...document.getElementsByName('technology')]

	const checkedTechnologies = technologiesCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value)

	jobsCards.forEach(jobCard => {
		const articleTechnologies = jobCard.dataset.technology?.split(',').map(t => t.toLowerCase()) || []

		let isShown = true

		if (checkedTechnologies.length > 0 && !checkedTechnologies.some((technology) => articleTechnologies.includes(technology))) {
			isShown = false
		}

		jobCard.classList.toggle('hidden', !isShown)
	})
}

function filterJobs() {
  const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

  jobsCards.forEach(jobCard => {
    const technologyFilter = (filters.technology?.value || '').toLowerCase()
		const locationFilter = (filters.locationType?.value || '').toLowerCase()
		const experienceFilter = (filters.experience?.value || '').toLowerCase()
    const articleTechnologies = jobCard.dataset.technology?.split(',').map(t => t.toLowerCase()) || []

    let isShown = true

    if (technologyFilter && !articleTechnologies.includes(techFilter)) isShown = false

    if (locationFilter && jobCard.dataset.locationType.toLowerCase() !== locationFilter) isShown = false

    if (experienceFilter && jobCard.dataset.experience.toLowerCase() !== experienceFilter) isShown = false

    jobCard.classList.toggle('hidden', !isShown)
  })
}

Object.values(filters).forEach((filter) => {
  filter?.addEventListener('change', filterJobs)
})

technologies.addEventListener('change', getCheckedTechnologies)
