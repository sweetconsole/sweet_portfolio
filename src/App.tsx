import { type FC } from "react"
import { Header, Intro, Services, Skills } from "./components"
import { Container } from "./components/ui";
import "./assets/styles/general.scss"

const App: FC = () => {
  return (
    <Container>
			<Header />
			<Intro />
			<Services />
			{/* <Portfolio /> */}
			<Skills />
			{/* <AboutMe /> */}
			{/* <Contacts /> */}
		</Container>
  )
}

export default App
