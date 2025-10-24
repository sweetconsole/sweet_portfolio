import { type FC, useState } from "react"
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
	const [hover, setHover] = useState(false)

	const getImage = () => {
		return hover ? `url("${iconHover}")` : `url("${icon}")`
	}

	const getCursor = () => {
		if (link) return "pointer"
	}

	const handleMouseEnter = () => setHover(true)

	const handleMouseLeave = () => setHover(false)

	return (
		<motion.li
			className={styles.skill}
			style={{ backgroundImage: getImage(), cursor: getCursor() }}
			onMouseOver={handleMouseEnter}
			onMouseOut={handleMouseLeave}
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
				/>
			) : null}
		</motion.li>
	)
}

export default Skill
