import { type FC, useState } from "react"
import { motion } from "framer-motion"
import type { ContactType } from "../contacts.types.ts"
import styles from "./Contact.module.scss"

const Contact: FC<ContactType> = ({
	title,
	link,
	icon,
	iconHover,
	duration
}) => {
	const [hover, setHover] = useState(false)

	const getImage = () => {
		return hover ? `url("${iconHover}")` : `url("${icon}")`
	}

	const handleMouseEnter = () => setHover(true)

	const handleMouseLeave = () => setHover(false)

	return (
		<motion.li
			className={styles.contact}
			style={{ backgroundImage: getImage() }}
			onMouseOver={handleMouseEnter}
			onMouseOut={handleMouseLeave}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.4, duration: duration }}
			viewport={{ once: true }}
		>
			<a
				className={styles.link}
				href={link}
				target="_blank"
				aria-label={`Посмотреть профиль в ${title}`}
				rel="noopener noreferrer"
			/>
		</motion.li>
	)
}

export default Contact
