import { type FC } from "react"
import { Header, Intro, Services } from "./components"
import { Container } from "./components/ui";
import "./assets/styles/general.scss"

const App: FC = () => {
  return (
    <Container>
			<Header />
			<Intro />
			<Services />
		</Container>
  )
}

export default App
