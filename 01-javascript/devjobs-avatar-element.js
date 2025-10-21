class DevJobsAvatarElement extends HTMLElement {
	constructor() {
		super()
	}

	createUrl(service, username) {
		return `https://unavatar.io/${service}/${username}`
	}

	render() {
		const shadow = this.attachShadow({ mode: "open" })

		const service = this.getAttribute('service') ?? 'github'
		const username = this.getAttribute('username') ?? 'aitorias'
		const size = this.getAttribute('size') ?? '40'

		const url = this.createUrl(service, username)

		const link = document.createElement('a')
		link.href = '#'
		link.setAttribute('class', 'avatar-link')

		const img = document.createElement('img')
		img.src = url
		img.alt = `Avatar de ${this.username}`
		img.setAttribute('class', 'avatar-image')

		link.appendChild(img)

		const style = document.createElement('style')

		style.textContent = `
			.avatar-link {
				align-items: center;
				display: flex;
			}

			.avatar-image {
				border-radius: 9999px;
				height: ${size}px;
				object-fit: cover;
				width: ${size}px;
			}
		`

		shadow.appendChild(style)
		shadow.appendChild(link)
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define('devjobs-avatar', DevJobsAvatarElement)
