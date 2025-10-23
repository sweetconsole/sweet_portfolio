import { type FC } from "react"
import { Analytics } from "@vercel/analytics/react"
import {
	Header,
	Intro,
	Services,
	Skills,
	AboutMe,
	Contacts,
	Portfolio
} from "./components/widgets"
import { Container } from "./components/ui"
import "./assets/styles/general.scss"

const App: FC = () => {
	return (
		<>
			<Container>
				<Header />
				<Intro />
				<Services />
				<Portfolio />
				<Skills />
				<AboutMe />
				<Contacts />
			</Container>
			<Analytics />
		</>
	)
}

export default App
