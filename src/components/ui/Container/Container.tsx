import { type FC } from "react"
import styles from "./Container.module.scss"
import type { ContainerProps } from "./Container.types.ts";

const Container: FC<ContainerProps> = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
}

export default Container