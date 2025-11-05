import createChevronIcon from "./createChevronIcon.js"
import { allJobs, fetchJobs } from "./fetch-data.js"
import { filteredJobs } from "./filters.js"
import { updateActiveButton } from "./utils.js"
import { RESULTS_PER_PAGE } from "./env.js"

const jobsListingSection = document.querySelector('.jobs-listings')
const paginationSection = document.querySelector('.pagination')
const paginationButtonsSection = document.querySelector('.pagination__buttons')

let jobs = []
let currentPage = 1
let startIndex = (currentPage - 1) * RESULTS_PER_PAGE
let endIndex = startIndex + RESULTS_PER_PAGE

export function updatePaginationButtons(totalJobs) {
    const totalPages = Math.ceil(totalJobs / RESULTS_PER_PAGE)
    paginationButtonsSection.innerHTML = ''

    if (RESULTS_PER_PAGE > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const buttonElement = document.createElement('button')
            buttonElement.textContent = i
            buttonElement.className = 'pagination__button'
            buttonElement.dataset.pageNumber = i

            if (i === currentPage) {
                buttonElement.disabled = true
                buttonElement.classList.add('active')
            }

            paginationButtonsSection.appendChild(buttonElement)
        }

        const prevButton = document.querySelector('.pagination__prev-button')
        const nextButton = document.querySelector('.pagination__next-button')

        if (prevButton && nextButton) {
            prevButton.disabled = currentPage <= 1
            nextButton.disabled = currentPage >= totalPages
        }
    }
}

export function renderJobs(jobs) {
  jobsListingSection.innerHTML = ''

  jobs.forEach((jobToShow) => {
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
    jobArticle.dataset.technology = jobToShow.data.technology
    jobArticle.dataset.locationType = jobToShow.data.location_type
    jobArticle.dataset.experience = jobToShow.data.experience
    titleArticle.textContent = jobToShow.title
    metaWrapperArticle.className = 'jobs-listings__job-details'
    metaCompanyArticle.textContent = jobToShow.company
    metaSeparator.textContent = ' | '
    metaLocationArticle.textContent = jobToShow.location
    descriptionArticle.textContent = jobToShow.description
    buttonApply.className = 'button-apply-job'
    buttonApply.textContent = 'Aplicar'

    metaWrapperArticle.append(metaCompanyArticle, metaSeparator, metaLocationArticle)
    headerWrapperArticle.append(titleArticle, metaWrapperArticle)
    headerArticle.append(headerWrapperArticle, buttonApply)
    descriptionArticleWrapper.appendChild(descriptionArticle)
    jobArticle.append(headerArticle, descriptionArticleWrapper)
    jobsListingSection.appendChild(jobArticle)
  })
}

function updateIndexes(currentPage, RESULTS_PER_PAGE) {
  startIndex = (currentPage - 1) * RESULTS_PER_PAGE
  endIndex = startIndex + RESULTS_PER_PAGE

	return { startIndex, endIndex }
}

if (jobsListingSection || paginationSection || paginationButtonsSection) {
	fetchJobs.then(() => {
		jobs = allJobs
		const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE)

		renderJobs(jobs.slice(startIndex, endIndex))

		if (RESULTS_PER_PAGE > 1) {
			const prevButton = document.createElement('button')

			prevButton.type = 'button'
			prevButton.title = 'Anterior'
			prevButton.className = 'pagination__prev-button'
			prevButton.dataset.pageNumber = currentPage - 1

			prevButton.prepend(createChevronIcon('left'))

			prevButton.appendChild(Object.assign(document.createElement('span'), {
				className: 'sr-only',
				textContent: 'Anterior'
			}))

			const nextButton = document.createElement('button')

			nextButton.type = 'button'
			nextButton.title = 'Siguiente'
			nextButton.className = 'pagination__next-button'
			nextButton.dataset.pageNumber = currentPage + 1

			nextButton.prepend(createChevronIcon('right'))

			nextButton.appendChild(Object.assign(document.createElement('span'), {
				className: 'sr-only',
				textContent: 'Siguiente'
			}))

			paginationSection.append(nextButton)
			paginationSection.prepend(prevButton)

			for (let i = 1; i <= totalPages; i++) {
				const buttonElement = document.createElement('button')

				buttonElement.textContent = i
				buttonElement.className = 'pagination__button'
				buttonElement.dataset.pageNumber = i

				if (i === currentPage) {
					buttonElement.disabled = true
					buttonElement.classList.add('active')
				}

				paginationButtonsSection.appendChild(buttonElement)
			}

			prevButton.disabled = currentPage <= 1
			nextButton.disabled = currentPage >= totalPages
		}

		paginationSection?.addEventListener('click', (event) => {
			const button = event.target.closest('button')
			const jobsToShow = filteredJobs.length ? filteredJobs : jobs

			if (!button || button.disabled) return;

			const prevButton = document.querySelector('.pagination__prev-button')
			const nextButton = document.querySelector('.pagination__next-button')

			if (button.classList.contains('pagination__prev-button')) {
				currentPage--
			} else if (button.classList.contains('pagination__next-button')) {
				currentPage++
			} else if (button.classList.contains('pagination__button')) {
				currentPage = Number(button.dataset.pageNumber)
			}

			if (currentPage < 1) currentPage = 1
			if (currentPage > totalPages) currentPage = totalPages

			prevButton.dataset.pageNumber = currentPage - 1
			nextButton.dataset.pageNumber = currentPage + 1
			prevButton.disabled = currentPage <= 1
			nextButton.disabled = currentPage >= totalPages

			updateActiveButton(currentPage)
			updateIndexes(currentPage, RESULTS_PER_PAGE)
			renderJobs(jobsToShow.slice(startIndex, endIndex))
		})
	}).catch((error) => {
		console.error('Error loading jobs for pagination:', error)
	})
}
