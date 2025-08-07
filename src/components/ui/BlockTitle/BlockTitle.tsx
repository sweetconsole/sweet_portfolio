import { type FC } from "react"
import { type BlockTitleProps } from "./BlockTitle.types.ts";
import styles from "./BlockTitle.module.scss"

const BlockTitle: FC<BlockTitleProps> = ({text, style}) => {
	return (
		<h2 className={[styles.title, style].join(" ")}>{text}</h2>
	)
}

export default BlockTitle