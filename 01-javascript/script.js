const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection?.addEventListener('click', (event) => {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const filterTechnology = document.querySelector('#filter-technology')
const filterLocation = document.querySelector('#filter-location')
const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

function findLocation(location) {
	jobsCards.forEach(jobCard => {
		const locationType = jobCard.dataset.locationType

		if (location === '' || locationType === location) {
			jobCard.classList.remove('hidden')
		} else {
			jobCard.classList.add('hidden')
		}
	})
}

filterLocation?.addEventListener('change', () => {
	const selectedLocation = filterLocation.value

	findLocation(selectedLocation)
})
