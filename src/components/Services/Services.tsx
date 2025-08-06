import { type FC } from "react"
import { settings, monitor, analytics, computer } from "../../utils/constants/ascii_icons.onstants.ts";
import styles from "./Services.module.scss"

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<h2 className={styles.title}>Чем я занимаюсь</h2>

			<ul className={styles.services}>
				<li className={styles.service}>
					<div className={styles.service_icon}>{monitor}</div>
					<h3 className={styles.service_title}>FrontEnd</h3>
					<p className={styles.service_description}>Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью по Figma-макету</p>
				</li>

				<li className={styles.service}>
					<div className={styles.service_icon}>{settings}</div>
					<h3 className={styles.service_title}>Backend</h3>
					<p className={styles.service_description}>Разработка backend логики для готового frontend'а, либо по техническому заданию с обеспечением наилучшей эффективности и производительности.</p>
				</li>

				<li className={styles.service}>
					<div className={styles.service_icon}>{analytics}</div>
					<h3 className={styles.service_title}>SEO</h3>
					<p className={styles.service_description}>Оптимизация структуры сайта для лучшей его обработки поисковыми системами, что улучшает его позиции в поисковой выдаче, увеличивая посещаемость.</p>
				</li>

				<li className={styles.service}>
					<div className={styles.service_icon}>{computer}</div>
					<h3 className={styles.service_title}>Chat Bot</h3>
					<p className={styles.service_description}>Разработка ботов под различные социальные сети по подробному техническому заданию с обеспечением максимальной оптимизации и надёжности.</p>
				</li>
			</ul>
		</section>
	)
}

export default Services