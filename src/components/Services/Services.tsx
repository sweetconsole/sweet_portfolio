import { type FC } from "react"
import { BlockTitle } from "../../components/ui"
import { services } from "./services.data.ts";
import styles from "./Services.module.scss"

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<BlockTitle text="Чем я занимаюсь" />

			<ul className={styles.services}>
				{services.map((service, index) => (
					<li className={styles.service} key={index}>
						<div className={styles.service_icon}>{service.icon}</div>
						<h3 className={styles.service_title}>{service.title}</h3>
						<p className={styles.service_description}>{service.description}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Services