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
		const headerArticle = document.createElement('header')
		const headerWrapperArticle = document.createElement('div')
		const titleArticle = document.createElement('h3')
		const metaWrapperArticle = document.createElement('div')
		const metaCompanyArticle = document.createElement('small')
		const metaSeparator = document.createElement('small')
		const metaLocationArticle = document.createElement('small')
		const buttonApply = document.createElement('button')
		const descriptionArticleWrapper = document.createElement('div')
		const descriptionArticle = document.createElement('p')


		jobArticle.className = 'jobs-listings__job-listing-card'
		jobArticle.dataset.technology = job.data.technology
		jobArticle.dataset.locationType = job.data.location_type
		jobArticle.dataset.experience = job.data.experience
		titleArticle.textContent = job.title
		metaWrapperArticle.className = 'jobs-listings__job-details'
		metaCompanyArticle.textContent = job.company
		metaSeparator.textContent = '|'
		metaLocationArticle.textContent = job.location
		descriptionArticle.textContent = job.description
		buttonApply.className = 'button-apply-job'
		buttonApply.textContent = 'Aplicar'

		metaWrapperArticle.append(metaCompanyArticle, metaSeparator, metaLocationArticle)
		headerWrapperArticle.append(titleArticle, metaWrapperArticle)
		headerArticle.append(headerWrapperArticle, buttonApply)
		descriptionArticleWrapper.appendChild(descriptionArticle)
		jobArticle.append(headerArticle, descriptionArticleWrapper)
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
