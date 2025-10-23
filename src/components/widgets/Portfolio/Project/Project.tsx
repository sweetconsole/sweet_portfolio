import { type FC } from "react"
import styles from "./Project.module.scss"
import type { ProjectType } from "../portfolio.types.ts"

const Project: FC<ProjectType> = ({
	title,
	image,
	link,
	description,
	technologies
}) => {
	return (
		<li
			style={{ backgroundImage: `url("${image}")` }}
			className={styles.project}
		>
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				<p className={styles.technologies}>{technologies.join(", ")}</p>
			</div>

			<a
				className={styles.link}
				href={link}
				target="_blank"
				rel="noreferrer nofollow"
			/>
		</li>
	)
}

export default Project
