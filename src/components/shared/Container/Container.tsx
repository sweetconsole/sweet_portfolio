import { type FC, type ReactNode } from "react"
import { clsx } from "clsx"
import styles from "./Container.module.scss"

interface ContainerProps {
	children?: ReactNode | ReactNode[]
	className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={clsx(styles.container, className)}>{children}</div>
}

export default Container
