import { useEffect, useState } from "react"

export function useRouter() {
	const [pathname, setPathname] = useState(window.location.pathname)

	useEffect(() => {
		const handleLocationChange = () => {
			setPathname(window.location.pathname)
		}

		window.addEventListener('popstate', handleLocationChange)

		return () => window.removeEventListener('popstate', handleLocationChange)
	}, [])

	function navigateTo(path) {
		window.history.pushState({}, '', path)
		window.dispatchEvent(new PopStateEvent('popstate'))
	}

	return {
		pathname,
		navigateTo
	}
}
