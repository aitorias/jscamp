const searchInput = document.querySelector('#search-jobs')

searchInput.addEventListener('input', (event) => {
	const jobsCards = document.querySelectorAll('.jobs-listings__job-listing-card')

	jobsCards.forEach(jobCard => {
		const searchTerm = event.target.value.toLowerCase()
		const jobTitle = jobCard.getElementsByTagName('h3')[0].textContent.toLowerCase()
		let isShown = jobTitle.includes(searchTerm) || searchTerm === '';

		console.log(jobTitle.includes(searchTerm))

		jobCard.classList.toggle('hidden', !isShown)
	})
})
