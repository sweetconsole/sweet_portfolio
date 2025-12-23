import { type FC } from "react"
import { motion } from "framer-motion"
import type { SkillType } from "../skills.types.ts"
import styles from "./Skill.module.scss"

const Skill: FC<SkillType> = ({
	name,
	icon,
	iconHover,
	link,
	delay,
	duration
}) => {
	return (
		<motion.li
			className={styles.skill}
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ delay: delay, duration: duration }}
			viewport={{ once: true }}
		>
			<div className={styles.help}>{name}</div>

			{link ? (
				<a
					className={styles.link}
					href={link}
					target="_blank"
					aria-label={`Перейти на сайт ${name}`}
					rel="noopener noreferrer"
				>
					<img className={styles.icon} src={icon} alt={name} />
					<img className={styles.icon_hover} src={iconHover} alt={name} />
				</a>
			) : (
				<>
					<img className={styles.icon} src={icon} alt={name} />
					<img className={styles.icon_hover} src={iconHover} alt={name} />
				</>
			)}
		</motion.li>
	)
}

export default Skill
