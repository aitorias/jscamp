import { Hero, HomeCards } from "@features/ui/";
import styles from './home.module.css'

export function HomePage({ }) {
	return (
		<main>
			<Hero />
			<section className={styles.homeSection}>
				<header>
					<h2>¿Por qué DevJobs?</h2>
					<p>DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los mejores
						talentos con las empresas más innovadoras.</p>
				</header>
				<HomeCards />
			</section>
		</main>
	)
}
