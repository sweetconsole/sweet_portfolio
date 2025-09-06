import { type FC, useState } from "react"
import { AnchorLink } from "../ui"
import { type AnchorLinkProps } from "../ui/AnchorLink/AnchorLink.types.ts"
import Logo from "../../assets/images/logo.png"
import styles from "./Header.module.scss"

const links: AnchorLinkProps[] = [
	{ name: "Услуги", href: "services" },
	{ name: "Портфолио", href: "portfolio" },
	{ name: "Навыки", href: "skills" },
	{ name: "Обо мне", href: "about_me" }
]

const Header: FC = () => {
	const [viewMenu, setViewMenu] = useState(false)

	const viewMenuChange = () => {
		document.body.style.overflow = viewMenu ? "visible" : "hidden"

		setViewMenu(!viewMenu)
	}

	const closeMenu = () => {
		document.body.style.overflow = "visible"
		setViewMenu(false)
	}

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.icon} src={Logo} alt="" />
				<a className={styles.nick} href="#">
					SweetConsole
				</a>
			</div>

			<nav
				className={
					viewMenu
						? [styles.navigation, styles.navigation_active].join(" ")
						: styles.navigation
				}
			>
				{links.map((link, index) => (
					<AnchorLink
						key={index}
						style={styles.link}
						onClick={closeMenu}
						{...link}
					/>
				))}
			</nav>

			<button
				onClick={viewMenuChange}
				className={
					viewMenu
						? [styles.menu_button, styles.menu_button_active].join(" ")
						: styles.menu_button
				}
			>
				<div></div>
				<div></div>
				<div></div>
			</button>

			<AnchorLink style={styles.button} name="Контакты" href="contacts" />
		</header>
	)
}

export default Header
