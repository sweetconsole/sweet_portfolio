import { type FC } from "react"
import { BlockTitle } from "../ui";
import Skill from "./Skill/Skill.tsx"
import { skills } from "./skills.data.ts";
import styles from "./Skills.module.scss"

const Skills: FC = () => {
	return (
		<section className={styles.block} id="skills">
			<BlockTitle text="Мои навыки" />

			<ul className={styles.skills}>
				{skills.map((skill, index) => (
					<Skill key={index} {...skill} />
				))}
			</ul>
		</section>
	)
}

export default Skills