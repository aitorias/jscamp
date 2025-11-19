import { Header, Footer } from '@shared'
import { Error404Page, HomePage, SearchPage } from '@pages'
import { useRouter } from '@hooks/react-hooks'

export default function App() {
	const { pathname } = useRouter()

	return (
		<>
			<Header />
			{pathname === '/' && <HomePage />}
			{pathname === '/search' && <SearchPage />}
			{pathname !== '/' && pathname !== '/search' && <Error404Page />}
			<Footer />
		</>
	)
}
