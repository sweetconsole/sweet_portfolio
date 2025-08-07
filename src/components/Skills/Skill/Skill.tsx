import { type FC, useState } from "react"
import type { SkillType } from "../skills.types.ts";
import styles from "./Skill.module.scss"

const Skill: FC<SkillType> = ({name, icon, iconHover, link}) => {
	const [hover, setHover] = useState(false)

	const getImage = () => {
		if (hover) {
			return `url("${iconHover}")`
		} else {
			return `url("${icon}")`
		}
	}

	const getCursor = () => {
		if (link) {
			return "pointer"
		}
	}

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	return (
		<li className={styles.skill} style={{backgroundImage: getImage(), cursor: getCursor()}} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
			<div className={styles.help}>{name}</div>
			{link ? <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer" /> : null}
		</li>
	)
}

export default Skill