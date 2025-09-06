import { type FC } from "react"
import { motion } from "framer-motion"
import { computerArt } from "../../utils/constants/ascii_art.constants.ts"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<section className={styles.block}>
			<div>
				<motion.h1
					className={styles.title}
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.4 }}
					viewport={{ once: true }}
				>
					Я Артём
				</motion.h1>

				<motion.h2
					className={styles.sup_title}
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.4 }}
					viewport={{ once: true }}
				>
					Web-разработчик
				</motion.h2>

				<ul className={styles.skills}>
					<motion.li
						className={styles.skill}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.4 }}
						viewport={{ once: true }}
					>
						FrontEnd & BackEnd
					</motion.li>

					<motion.li
						className={styles.skill}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 1.0, duration: 0.4 }}
						viewport={{ once: true }}
					>
						SEO-оптимизация
					</motion.li>
				</ul>
			</div>

			<motion.div
				className={styles.art}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.4 }}
				viewport={{ once: true }}
			>
				{computerArt}
			</motion.div>
		</section>
	)
}

export default Intro
