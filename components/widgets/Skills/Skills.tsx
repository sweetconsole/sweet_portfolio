import { type FC } from "react"
import { BlockTitle } from "../../shared"
import Skill from "./Skill/Skill"
import { skills } from "./skills.data"
import styles from "./Skills.module.scss"

const Skills: FC = () => {
	return (
		<section className={styles.block} id="skills">
			<BlockTitle text="Технологии" />

			<ul className={styles.skills}>
				{skills.map((skill, index) => (
					<Skill key={index} {...skill} />
				))}
			</ul>
		</section>
	)
}

export default Skills
