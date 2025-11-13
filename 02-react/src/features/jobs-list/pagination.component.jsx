import { Link, SVG } from '@features/ui';

export function Pagination({ currentPage = 1, totalPages = 10, onPageChange = () => { } }) {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

	const stylePrevLink = {
		opacity: currentPage === 1 ? 0.5 : 1,
		cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
	}

	const styleNextLink = {
		opacity: currentPage === totalPages ? 0.5 : 1,
		cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
	}

	const handlePrevClick = (event) => {
		event.preventDefault()

		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}

	const handleNextClick = (event) => {
		event.preventDefault()

		if (currentPage < totalPages) {
			onPageChange(currentPage + 1)
		}
	}

	const handleChangePage = (event) => {
		const page = Number(event.target.dataset.pageNumber)

		event.preventDefault()

		if (page !== currentPage) {
			onPageChange(page)
		}
	}

	return (
		<nav className="pagination">
			<Link href={'#'} className={`pagination__prev-button`} data-page-number='0' onClick={handlePrevClick} style={stylePrevLink}>
				<SVG
					height={24}
					width={24}
					viewBox={'0 0 24 24'}
					strokeWidth={'2'}>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M15 6l-6 6l6 6"></path>
				</SVG>
				<span className="sr-only">Anterior</span>
			</Link>
			<div className="pagination__buttons">
				{pages.map((page) => (
					<Link key={page} href={'#'} className={`pagination__button ${currentPage === page ? 'active' : ''}`} data-page-number={page} onClick={handleChangePage}>
						{page}
					</Link>
				))}
			</div>
			<Link href={'#'} className={`pagination__next-button`} data-page-number='2' onClick={handleNextClick} style={styleNextLink}>
				<SVG
					height={24}
					width={24}
					viewBox={'0 0 24 24'}
					strokeWidth={'2'}>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M9 6l6 6l-6 6"></path>
				</SVG>
				<span className="sr-only">Siguiente</span>
			</Link>
		</nav>
	)
}
