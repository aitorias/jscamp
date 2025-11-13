import { Button, SVG } from "@features/ui/shared";

export function JobsSearch() {
	return (
		<section className="jobs-search">
			<h1>Encuentra tu próximo trabajo</h1>
			<p>Explora miles de oportunidades en el sector tecnológico.</p>
			<form role="search">
				<div className="search-bar">
					<SVG>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M21 21l-6 -6" />
					</SVG>
					<input type="search" name="search" id="search-jobs" placeholder="Buscar trabajos, empresas o habilidades" />
				</div>
				<div className="search-filters">
					<div className="form-group" id="technology-checkboxes">
						<Button type={'button'} id={'technology-dropdown'} className={'dropdown-button'}>
							Tecnología
						</Button>
						<div aria-labelledby="technology-dropdown" className="dropdown form-group flex-col hidden">
							<div className="checkbox-group">
								<input type="checkbox" id="javascript" name="technology" value="javascript" />
								<label htmlFor="javascript">JavaScript</label>
							</div>
							<div className="checkbox-group">
								<input type="checkbox" id="python" name="technology" value="python" />
								<label htmlFor="python">Python</label>
							</div>
							<div className="checkbox-group">
								<input type="checkbox" id="java" name="technology" value="java" />
								<label htmlFor="java">Java</label>
							</div>
							<div className="checkbox-group">
								<input type="checkbox" id="react" name="technology" value="react" />
								<label htmlFor="react">React</label>
							</div>
							<div className="checkbox-group">
								<input type="checkbox" id="node" name="technology" value="node" />
								<label htmlFor="node">Node.js</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<select name="location" id="filter-location">
							<option value="" selected>Ubicación</option>
							<option value="remote">Remoto</option>
							<option value="cdmx">Ciudad de México</option>
							<option value="guadalajara">Guadalajara</option>
							<option value="monterrey">Monterrey</option>
							<option value="barcelona">Barcelona</option>
						</select>
					</div>
					<div className="form-group">
						<select name="contract" id="filter-contract">
							<option value="" selected>Tipo de contrato</option>
							<option value="fixed">Indefinido</option>
							<option value="part-term">A tiempo parcial</option>
						</select>
					</div>
					<div className="form-group">
						<select name="experience" id="filter-experience">
							<option value="" selected>Nivel de experiencia</option>
							<option value="junior">Júnior</option>
							<option value="mid">Mid</option>
							<option value="senior">Senior</option>
							<option value="lead">Lead</option>
						</select>
					</div>
				</div>
			</form>
		</section>
	)
}
