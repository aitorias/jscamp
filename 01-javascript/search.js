const searchInput = document.querySelector('#search-jobs')
const jobsListingSection = document.querySelector('.jobs-listings')
const jobsSection = document.querySelector('.jobs')
const resultsFound = document.querySelector('#results-found')

function displayResultsFound(found, total) {
	resultsFound.textContent = `Mostrando ${found.length} de ${total.length} ofertas`
	resultsFound.classList.toggle('hidden', found.length === total.length)
}

function filterJobs(searchTerm) {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')
	const jobsCardsArray = Array.from(jobsCards)

	if (searchTerm === '') {
		jobsCardsArray.forEach((jobCard) => jobCard.classList.toggle('hidden', false))

		resultsFound.classList.add('hidden')

		return
	}

	const foundJobs = jobsCardsArray.filter((jobCard) => {
		const jobTitle = jobCard.getElementsByTagName('h3')[0].textContent.toLowerCase()
		const jobMatch = jobTitle.includes(searchTerm)

		jobCard.classList.toggle('hidden', !jobMatch)

		return jobMatch
	})
	displayResultsFound(foundJobs, jobsCardsArray)
}

searchInput.addEventListener('input', (event) => {
	const searchTerm = event.target.value.toLowerCase().trim()

	filterJobs(searchTerm)
})
