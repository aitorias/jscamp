export function updateActiveButton(page) {
    document.querySelectorAll('.pagination__button').forEach(btn => {
        btn.classList.remove('active')
        btn.disabled = false
    })

    const activeButton = document.querySelector(`.pagination__button[data-page-number="${page}"]`)
    if (activeButton) {
        activeButton.classList.add('active')
        activeButton.disabled = true
    }
}
