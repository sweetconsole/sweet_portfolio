import { type FC } from "react"
import { BlockTitle } from "../../shared"
import { contacts } from "./contacts.data.ts"
import Contact from "./Contact/Contact.tsx"
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
