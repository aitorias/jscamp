import styles from './404.module.css'

export function Error404Page({ }) {
	return (
		<main className={styles.notFound}>
			<h1>404</h1>
			<h2>Página no encontrada</h2>
			<p>La página que buscas no existe.</p>
			<a href="/">Volver al inicio</a>
		</main>
	)
}
