import { type FC } from "react"
import { motion } from "framer-motion"
import { BlockTitle } from "../../shared"
import { services } from "./services.data.ts"
import styles from "./Services.module.scss"

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<BlockTitle text="Чем я занимаюсь" />

			<ul className={styles.services}>
				{services.map((service, index) => (
					<motion.li
						className={styles.service}
						key={index}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: service.duration }}
						viewport={{ once: true }}
					>
						<div className={styles.service_icon}>{service.icon}</div>
						<h3 className={styles.service_title}>{service.title}</h3>
						<p className={styles.service_description}>{service.description}</p>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default Services
