const filterTechnology = document.querySelector('#filter-technology')
const filterLocation = document.querySelector('#filter-location')
const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection?.addEventListener('click', (event) => {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

function findLocation(location) {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

	jobsCards.forEach(jobCard => {
		const locationType = jobCard.dataset.locationType
		const isShown = location === '' || locationType === location

		jobCard.classList.toggle('hidden', !isShown)
	})
}

fetch('./data.json')
.then(response => {
	return response.json()
})
.then((jobs) => {
	jobs.forEach(job => {
		const jobArticle = document.createElement('article')

		jobArticle.classList.add('jobs-listings__job-listing-card')

		jobArticle.dataset.technology = job.data.technology
		jobArticle.dataset.locationType = job.data.location_type
		jobArticle.dataset.experience = job.data.experience

		jobArticle.innerHTML = `
		<header>
			<div>
				<h3>${job.title}</h3>
				<div class="jobs-listings__job-details">
					<small class="jobs-listings__job-business">${job.company}</small> <small>|</small> <small class="jobs-listings__job-location">${job.location}</small>
				</div>
			</div>
			<button class="button-apply-job">Apply</button>
		</header>
		<div>
			<p>${job.description}</p>
		</div>
		`

		jobsListingSection.appendChild(jobArticle)
	})
})
.catch(error => {
	console.error('Error fetching data:', error)
})

filterLocation?.addEventListener('change', () => {
	const selectedLocation = filterLocation.value

	findLocation(selectedLocation)
})
