import { type FC, useState } from "react"
import type { ContactType } from "../contacts.types.ts"
import styles from "./Contact.module.scss"

const Contact: FC<ContactType> = ({ link, icon, iconHover }) => {
	const [hover, setHover] = useState(false)

	const getImage = () => {
		return hover ? `url("${iconHover}")` : `url("${icon}")`
	}

	const handleMouseEnter = () => setHover(true)

	const handleMouseLeave = () => setHover(false)

	return (
		<li
			className={styles.contact}
			style={{ backgroundImage: getImage() }}
			onMouseOver={handleMouseEnter}
			onMouseOut={handleMouseLeave}
		>
			<a
				className={styles.link}
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
	)
}

export default Contact
