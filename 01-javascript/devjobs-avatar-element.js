class DevJobsAvatarElement extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		const shadow = this.attachShadow({ mode: "open" });

		const link = document.createElement('a');
		link.href = '#';
		link.setAttribute('class', 'avatar-link');

		const img = document.createElement('img');
		img.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeG7G_fClYlNDdKTzEHA670Uh9TsfTwHCNng2nJOHZCsw_jzXKbuYg-ldPUGFyi06-RD8U4HtIew9rpl5T8KZpJLMfjHDm4EzNUz8rmjZK31QJTHhMqTY3_Kb8A2X_2zq_sDsq_v05AiSRHLlDPcyX1NmEoPCfW01ygMJcjz3gb0lUUZO_9qQq67stmy6-p1WbZReGs7T6RvlsxS_vN6KZi9UyUHJ80dTs-NADdsMxt3pXS8dF07JN11dXZAZp-UdqyFt7glf9jmA';
		img.setAttribute('class', 'avatar-image');

		link.appendChild(img);

		const style = document.createElement('style');

		style.textContent = `
			.avatar-link {
				align-items: center;
				display: flex;
			}

			.avatar-image {
				border-radius: 9999px;
				height: 40px;
				object-fit: cover;
				width: 40px;
			}
		`;

		shadow.appendChild(style);
		shadow.appendChild(link);
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define('devjobs-avatar', DevJobsAvatarElement);
