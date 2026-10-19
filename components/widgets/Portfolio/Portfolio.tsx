import { type FC } from "react"
import { BlockTitle } from "../../shared"
import { portfolio } from "./portfolio.data"
import styles from "./Portfolio.module.scss"
import Project from "./Project/Project"

const Portfolio: FC = () => {
	return (
		<section className={styles.block} id="portfolio">
			<BlockTitle text="Портфолио" />

			<ul className={styles.portfolio}>
				{portfolio.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</ul>
		</section>
	)
}

export default Portfolio
