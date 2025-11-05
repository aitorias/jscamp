import { allJobs } from "./fetch-data.js"
import { renderJobs, updatePaginationButtons } from "./pagination.js"
import { RESULTS_PER_PAGE } from "./env.js"

const filters = {
  technology: document.querySelector('#filter-technology'),
  locationType: document.querySelector('#filter-location'),
  experience: document.querySelector('#filter-experience')
}

const technologies = document.querySelector('#technology-checkboxes')

export let filteredJobs = allJobs

function getTechnologiesArray(technology) {
  if (!technology) return []
  if (Array.isArray(technology)) return technology.map(t => t.toLowerCase())
  if (typeof technology === 'string') return technology.split(',').map(t => t.toLowerCase().trim())
  return []
}

function getCheckedTechnologies() {
  const technologiesCheckboxes = [...document.getElementsByName('technology')]
  const checkedTechnologies = technologiesCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)

  if (checkedTechnologies.length === 0) {
    filteredJobs = allJobs
  } else {
    filteredJobs = allJobs.filter(job => {
      const articleTechnologies = getTechnologiesArray(job.data?.technology)
      return checkedTechnologies.some((technology) => articleTechnologies.includes(technology))
    })
  }

	updatePaginationButtons(filteredJobs.length)
  renderJobs(filteredJobs.slice(0, RESULTS_PER_PAGE))
}

function filterJobs() {
  const technologyFilter = (filters.technology?.value || '').toLowerCase()
  const locationFilter = (filters.locationType?.value || '').toLowerCase()
  const experienceFilter = (filters.experience?.value || '').toLowerCase()

  filteredJobs = allJobs.filter(job => {
    const articleTechnologies = getTechnologiesArray(job.data?.technology)

    if (technologyFilter && !articleTechnologies.includes(technologyFilter)) return false
    if (locationFilter && job.data?.location_type.toLowerCase() !== locationFilter) return false
    if (experienceFilter && job.data?.experience.toLowerCase() !== experienceFilter) return false

    return true
  })

	updatePaginationButtons(filteredJobs.length)
  renderJobs(filteredJobs.slice(0, RESULTS_PER_PAGE))
}

Object.values(filters).forEach((filter) => {
  filter?.addEventListener('change', filterJobs)
})

technologies?.addEventListener('change', getCheckedTechnologies)
