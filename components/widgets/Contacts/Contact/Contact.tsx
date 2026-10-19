"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { type FC } from "react"
import type { ContactType } from "../contacts.types.ts"
import styles from "./Contact.module.scss"

const Contact: FC<ContactType> = ({
	title,
	link,
	icon,
	iconHover,
	duration
}) => {
	return (
		<motion.li
			className={styles.contact}
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
			>
				<Image className={styles.icon} fill src={icon} alt={title} />
				<Image className={styles.icon_hover} fill src={iconHover} alt={title} />
			</a>
		</motion.li>
	)
}

export default Contact
