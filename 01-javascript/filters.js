const filters = {
  technology: document.querySelector('#filter-technology'),
  locationType: document.querySelector('#filter-location'),
  experience: document.querySelector('#filter-experience')
}

function filterJobs() {
  const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

  jobsCards.forEach(jobCard => {
    let isShown = true

    const techFilter = (filters.technology?.value || '').toLowerCase()
    const articleTechnologies = jobCard.dataset.technology?.split(',').map(t => t.toLowerCase()) || []
    if (techFilter && !articleTechnologies.includes(techFilter)) isShown = false

    const locationFilter = (filters.locationType?.value || '').toLowerCase()
    if (locationFilter && jobCard.dataset.locationType.toLowerCase() !== locationFilter) isShown = false

    const experienceFilter = (filters.experience?.value || '').toLowerCase()
    if (experienceFilter && jobCard.dataset.experience.toLowerCase() !== experienceFilter) isShown = false

    jobCard.classList.toggle('hidden', !isShown)
  })
}

Object.values(filters).forEach(filter => {
  filter?.addEventListener('change', filterJobs)
})
