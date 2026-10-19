import {
	settings,
	monitor,
	analytics
} from "@/utils/constants/ascii_icons.onstants"

export type ServiceType = {
	icon: string
	title: string
	description: string
	duration: number
}

export const services: Array<ServiceType> = [
	{
		icon: monitor,
		title: "FRONTEND.EXE",
		description:
			"Разработка современных веб-приложений на React и TypeScript с использованием Redux/RTK для управления состоянием. Работа с Figma, анимации на Framer Motion и GSAP, стилизация на SCSS или Tailwind. Создание форм на React Hook Form/Formik.",
		duration: 0.2
	},
	{
		icon: settings,
		title: "BACKEND.DLL",
		description:
			"Создание серверной логики на Nest.js с интеграцией баз данных (Firebase/Supabase) и Prisma ORM. Оптимизация производительности, разработка API, middleware и бизнес-логики под готовый фронтенд или техническое задание.",
		duration: 0.4
	},
	{
		icon: analytics,
		title: "SEO.BAT",
		description:
			"Техническая оптимизация сайтов для лучшей индексации поисковыми системами. Улучшение Core Web Vitals, семантическая вёрстка, оптимизация мета-тегов и структуры данных для роста позиций в выдаче и увеличения трафика.",
		duration: 0.6
	}
]
