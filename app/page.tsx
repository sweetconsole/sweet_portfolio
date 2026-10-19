import { Container } from "@/components/shared"
import {
	Intro,
	Services,
	Portfolio,
	Skills,
	AboutMe,
	Contacts
} from "@/components/widgets"

export default function Home() {
	return (
		<Container>
			<Intro />
			<Services />
			<Portfolio />
			<Skills />
			<AboutMe />
			<Contacts />
		</Container>
	)
}
