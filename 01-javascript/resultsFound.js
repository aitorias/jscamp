/**
 * Displays a message indicating the number of results found and the total number of results.
 * @param {HTMLDivElement} container The container that displays the number of results found
 * @param {number} found The number of found results
 * @param {number} total The total number of results
 */
export default function displayResultsFound(container, found, total) {

	container.textContent = `Mostrando ${found.length} de ${total.length} ofertas`
	container.classList.toggle('hidden', found.length === total.length)
}
