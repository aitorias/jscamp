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
const jobsLocations = document.querySelectorAll('.jobs-listings__job-location')

function findLocation(location) {
	jobsLocations.forEach(jobLocation => {
		const closestCard = jobLocation.closest('.jobs-listings__job-listing-card')

		if (location === '' || jobLocation.dataset.locationType === location) {
			closestCard.classList.remove('hidden')
		} else {
			closestCard.classList.add('hidden')
		}
	})
}

filterLocation?.addEventListener('change', () => {
	const selectedLocation = filterLocation.value

	findLocation(selectedLocation)
})
