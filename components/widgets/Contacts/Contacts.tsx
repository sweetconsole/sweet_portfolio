import { type FC } from "react"
import { BlockTitle } from "../../shared"
import Contact from "./Contact/Contact"
import { contacts } from "./contacts.data"
import styles from "./Contacts.module.scss"

const Contacts: FC = () => {
	return (
		<section className={styles.block} id="contacts">
			<BlockTitle text="Контакты" />

			<ul className={styles.contacts}>
				{contacts.map((contact, index) => (
					<Contact key={index} {...contact} />
				))}
			</ul>
		</section>
	)
}

export default Contacts
