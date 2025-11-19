import { Header, Footer } from '@features/ui'
import { Error404Page, HomePage, SearchPage } from '@pages'

export default function App() {
	const currentPath = window.location.pathname

	let pageComponent = <Error404Page />

	if (currentPath === '/') {
		pageComponent = <HomePage />
	} else if (currentPath === '/search') {
		pageComponent = <SearchPage />
	} else {
		pageComponent = <Error404Page />
	}

	return (
		<>
			<Header />
			{pageComponent}
			<Footer />
		</>
	)
}
