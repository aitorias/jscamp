const jobsListingSection = document.querySelector('.jobs-listings')

fetch('./data.json')
.then(response => {
	return response.json()
})
.then((jobs) => {
	jobs.forEach((job) => {
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
		metaSeparator.textContent = ' | '
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
