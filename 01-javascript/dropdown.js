const searchFilters = document.querySelector('.search-filters')

searchFilters?.addEventListener('click', (event) => {
	const element = event.target

	if (element.classList.contains('dropdown-button')) {
		const dropdown = element.nextElementSibling

		if (dropdown && dropdown.classList.contains('dropdown')) {
			const rect = element.getBoundingClientRect();

			dropdown.classList.toggle('hidden')
			dropdown.style.minWidth = `${rect.width}px`;
			dropdown.style.top = `${rect.bottom + 10 + window.scrollY}px`
		}
	}
})

document.addEventListener('click', (event) => {
  const openDropdowns = document.querySelectorAll('.dropdown:not(.hidden)')

  openDropdowns.forEach((dropdown) => {
    const button = dropdown.previousElementSibling

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.classList.add('hidden')
    }
  })
})
