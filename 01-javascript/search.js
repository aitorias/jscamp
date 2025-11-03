import { allJobs } from "./fetch-data.js"
import displayResultsFound from './resultsFound.js'
import { renderJobs } from './pagination.js'
import { updateActiveButton } from "./utils.js"
import { RESULTS_PER_PAGE } from "./env.js"

const searchInput = document.querySelector('#search-jobs')
const resultsFound = document.querySelector('#results-found')

let currentJobs = allJobs
let currentPage = 1

function filterJobs(searchTerm) {
	if (searchTerm === '') {
		currentJobs = allJobs
    const startIndex = 0
    const endIndex = RESULTS_PER_PAGE

		renderJobs(currentJobs.slice(startIndex, endIndex))
    resultsFound.classList.add('hidden')
		updateActiveButton(currentPage)

		return
	}

	currentJobs = allJobs.filter((job) => {
		const jobTitle = job.title.toLowerCase()
		const jobMatch = jobTitle.includes(searchTerm)

		return jobMatch
	})

  const startIndex = 0
  const endIndex = RESULTS_PER_PAGE

	renderJobs(currentJobs.slice(startIndex, endIndex))
	displayResultsFound(resultsFound, currentJobs, allJobs)
	updateActiveButton(currentPage)
}

searchInput.addEventListener('input', (event) => {
	const searchTerm = event.target.value.toLowerCase().trim()
	currentPage = 1
	filterJobs(searchTerm)
})
