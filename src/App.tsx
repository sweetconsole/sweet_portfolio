import { type FC } from "react"
import { Header, Intro, Services, Skills, AboutMe, Contacts } from "./components/widgets"
import { Container } from "./components/ui"
import "./assets/styles/general.scss"

const App: FC = () => {
	return (
		<Container>
			<Header />
			<Intro />
			<Services />
			{/* <Portfolio /> */}
			<Skills />
			<AboutMe />
			<Contacts />
		</Container>
	)
}

export default App
