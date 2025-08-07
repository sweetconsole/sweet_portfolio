import { settings, monitor, analytics, computer } from "../../utils/constants/ascii_icons.onstants.ts";
import type { ServiceType } from "./services.types.ts";

export const services: Array<ServiceType> = [
	{
		icon: monitor,
		title: "FrontEnd",
		description: "Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью по Figma-макету",
	},
	{
		icon: settings,
		title: "Backend",
		description: "Разработка backend логики для готового frontend'а, либо по техническому заданию с обеспечением наилучшей эффективности и производительности.",
	},
	{
		icon: analytics,
		title: "SEO",
		description: "Оптимизация структуры сайта для лучшей его обработки поисковыми системами, что улучшает его позиции в поисковой выдаче, увеличивая посещаемость.",
	},
	{
		icon: computer,
		title: "Ничего",
		description: "Ничего",
	},
]