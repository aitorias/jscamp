export function createUrl(service, username) {
	return `https://unavatar.io/${service ? service : 'gitihub'}/${username ? username : 'aitorias'}`
}
