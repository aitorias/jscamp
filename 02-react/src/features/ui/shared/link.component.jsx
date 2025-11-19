import { useRouter } from "@hooks/react-hooks";

export function Link({ href = '', title, className, isActive, children, onClick, ...props }) {
	const { navigateTo } = useRouter()

	const linkClassName = [className, isActive ? "active" : ""].filter(Boolean).join(" ");

	const handleNavigation = (event) => {
		event.preventDefault();

		if (!href) {
			onClick?.(event);
			return;
		}

		navigateTo(href)
	};

	return (
		<a
			href={href}
			title={title}
			className={linkClassName}
			onClick={handleNavigation}
			{...props}
		>
			{children}
		</a>
	)
}
