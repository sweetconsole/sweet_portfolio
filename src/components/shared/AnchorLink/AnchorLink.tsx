import { type FC } from "react"
import { Link } from "react-scroll"
import { type AnchorLinkProps } from "./AnchorLink.types.ts"

const AnchorLink: FC<AnchorLinkProps> = ({ name, href, style, onClick }) => {
	return (
		<Link
			className={style}
			to={href}
			smooth={true}
			offset={-100}
			duration={500}
			onClick={onClick}
		>
			{name}
		</Link>
	)
}

export default AnchorLink
