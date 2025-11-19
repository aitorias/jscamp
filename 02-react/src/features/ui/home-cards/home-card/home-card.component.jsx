import { SVG } from '@features/ui/shared'
import styles from './home-card.module.css'

export function HomeCard({ title, text, svgChildren }) {
	return (
		<article className={styles.card}>
			<SVG fill='currentColor' height='32' width='32' viewBox='0 0 256 256'>
				{svgChildren}
			</SVG>
			<h3>{title}</h3>
			<p>{text}</p>
		</article>
	)
}
