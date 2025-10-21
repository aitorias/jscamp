const searchInput = document.querySelector('#search-jobs')
const jobsListingSection = document.querySelector('.jobs-listings')
const jobsSection = document.querySelector('.jobs')

function displayResultsCount(found, total) {
	let resultsFound = document.querySelector('#results-found')

	if (!resultsFound) {
		resultsFound = document.createElement('p')
		resultsFound.id = 'results-found'
		jobsListingSection.parentElement.insertBefore(resultsFound, jobsListingSection)
	}

	resultsFound.textContent = `Mostrando ${found.length} de ${total.length} ofertas`
}

function getResults(searchTerm) {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')
	const jobsCardsArray = Array.from(jobsCards)
	const foundJobs = jobsCardsArray.filter((jobCard) => {
		const jobTitle = jobCard.getElementsByTagName('h3')[0].textContent.toLowerCase()
		const jobMatch = jobTitle.includes(searchTerm)
		jobCard.style.display = jobMatch ? '' : 'none'
		return jobMatch
	})

	displayResultsCount(foundJobs, jobsCardsArray)
}

searchInput.addEventListener('input', (event) => {
	const searchTerm = event.target.value.toLowerCase()
	getResults(searchTerm)
})
