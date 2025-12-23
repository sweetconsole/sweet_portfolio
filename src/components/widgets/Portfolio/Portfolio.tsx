import { type FC } from "react"
import styles from "./Portfolio.module.scss"
import { BlockTitle } from "../../shared"
import { portfolio } from "./portfolio.data.ts"
import Project from "./Project/Project.tsx"

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
