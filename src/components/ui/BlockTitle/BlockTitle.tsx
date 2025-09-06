import { type FC } from "react"
import { motion } from "framer-motion"
import { type BlockTitleProps } from "./BlockTitle.types.ts"
import styles from "./BlockTitle.module.scss"

const BlockTitle: FC<BlockTitleProps> = ({ text, style, children }) => {
	return (
		<motion.h2
			className={[styles.title, style].join(" ")}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
			viewport={{ once: true }}
		>
			{text}
			{children}
		</motion.h2>
	)
}

export default BlockTitle
