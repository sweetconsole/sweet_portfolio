"use client"
import { motion } from "framer-motion"
import { type FC } from "react"
import { aboutMeArt } from "@/utils/constants/ascii_art.constants"
import { BlockTitle } from "../../shared"
import { features } from "./aboutMe.data"
import styles from "./AboutMe.module.scss"

const AboutMe: FC = () => {
	return (
		<section className={styles.block} id="about_me">
			<BlockTitle text="Обо мне" />

			<div className={styles.inner}>
				<motion.div
					className={styles.art}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 0.4 }}
					viewport={{ once: true }}
				>
					{aboutMeArt}
				</motion.div>

				<ul className={styles.features}>
					{features.map((feature, index) => (
						<motion.li
							className={styles.feature}
							key={index}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: feature.duration }}
							viewport={{ once: true }}
						>
							{feature.text}
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default AboutMe
