import { useId } from 'react'
import { Button, SVG } from '@features/ui/shared'
import styles from './hero.module.css'

export function Hero({ }) {
	const inputSearchID = useId()

	return (
		<section className={styles.hero}>
			<img src="./background.webp" width="200" />
			<h1>Encuentra el trabajo de tus sueños</h1>
			<p>Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad.</p>
			<form role="search" className={styles.search}>
				<div className={styles.searchBar}>
					<SVG>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M21 21l-6 -6" />
					</SVG>
					<input type="text" id={inputSearchID} name={inputSearchID} placeholder="Buscar empleos por título, habilidad o empresa" required />
					<Button type='submit' variant='primary' disabled={true} title='Buscar'>
						Buscar
					</Button>
				</div>
			</form>
		</section>
	)
}
