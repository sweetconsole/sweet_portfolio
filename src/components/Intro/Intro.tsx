import { type FC } from "react"
import { computerArt } from "../../utils/constants/ascii_art.constants.ts";
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<section className={styles.block}>
			<div>
				<h1 className={styles.title}>Я Артём</h1>
				<h2 className={styles.sup_title}>Web-разработчик</h2>

				<ul className={styles.skills}>
					<li className={styles.skill}>FrontEnd & BackEnd</li>
					<li className={styles.skill}>SEO-оптимизация</li>
				</ul>
			</div>

			<div className={styles.art}>{ computerArt }</div>
		</section>
	)
}

export default Intro