import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { JetBrains_Mono, Fira_Code } from "next/font/google"
import { Header } from "@/components/widgets"
import "../styles/reset.scss"
import "../styles/fonts.scss"
import "../styles/general.scss"

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-family-primary",
	subsets: ["cyrillic", "latin"]
})

const firaCode = Fira_Code({
	variable: "--font-family-secondary",
	subsets: ["cyrillic", "latin"]
})

export const metadata: Metadata = {
	metadataBase: new URL("https://sweetconsole-portfolio.vercel.app"),

	title: "SweetConsole — Fullstack-разработчик | React, Next.js, Nest, SEO",
	description:
		"Разработчик Артём (SweetConsole). Создаю сайты и приложения на React/Next.js с бэкендом на Nest/Prisma/Firebase. Настраиваю техническое SEO, скорость и индексацию. Портфолио и контакты.",
	keywords: [
		"seo",
		"разработка",
		"frontend",
		"backend",
		"sweetconsole",
		"сайт",
		"web-разработка"
	],
	authors: [{ name: "SweetConsole" }],

	openGraph: {
		siteName: "SweetConsole",
		type: "website",
		url: "/",
		title: "SweetConsole — Fullstack-разработчик | React, Next.js, Nest, SEO",
		description:
			"Разработчик Артём (SweetConsole). Создаю сайты и приложения на React/Next.js с бэкендом на Nest/Prisma/Firebase. Настраиваю техническое SEO, скорость и индексацию. Портфолио и контакты.",
		images: [{ url: "/cover.png" }],
		locale: "ru_RU"
	}
}

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${firaCode.variable} ${jetBrainsMono.variable}`}
		>
			<body>
				<Header />

				<main>
					{children}

					<SpeedInsights />
					<Analytics mode="production" />
				</main>
			</body>
		</html>
	)
}
