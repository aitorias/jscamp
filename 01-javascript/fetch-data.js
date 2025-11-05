export let allJobs = []

export const fetchJobs = fetch('./data.json')
.then(response => {
	return response.json()
})
.then((jobs) => {
	allJobs = jobs

	return jobs
})
.catch(error => {
	console.error('Error fetching data:', error)
})
