import ProjectOne from "../../../assets/images/portfolio/1.jpg"
import ProjectTwo from "../../../assets/images/portfolio/2.jpg"
import ProjectThree from "../../../assets/images/portfolio/3.jpg"
import ProjectFour from "../../../assets/images/portfolio/4.jpg"
import ProjectFive from "../../../assets/images/portfolio/5.webp"
import ProjectSix from "../../../assets/images/portfolio/6.jpg"
import ProjectSeven from "../../../assets/images/portfolio/7.jpg"
import ProjectEight from "../../../assets/images/portfolio/8.jpg"
import ProjectNine from "../../../assets/images/portfolio/9.webp"
import ProjectTen from "../../../assets/images/portfolio/10.jpg"
import ProjectEleven from "../../../assets/images/portfolio/11.png"
import ProjectTwelve from "../../../assets/images/portfolio/12.png"
import type { ProjectType } from "./portfolio.types.ts"

export const portfolio: Array<ProjectType> = [
	{
		title: "Ice",
		description: "лендинг магазина мороженого",
		technologies: ["Gulp", "SCSS", "JavaScript"],
		image: ProjectOne,
		link: "https://sweetconsole.github.io/ice_cream/dist/"
	},
	{
		title: "СтальГрад",
		description: "магазин металлических изделий",
		technologies: ["Gulp", "JavaScript", "SCSS"],
		image: ProjectTwo,
		link: "https://metallmarket-24.ru/"
	},
	{
		title: "Cootels",
		description: "аренда загородных домов",
		technologies: ["CSS", "JavaScript", "HTML"],
		image: ProjectThree,
		link: "https://sweetconsole.github.io/cootels/ "
	},
	{
		title: "honey",
		description: "лендинг магазина мёда",
		technologies: ["JavaScript", "CSS", "HTML"],
		image: ProjectFour,
		link: "https://sweetconsole.github.io/honey/"
	},
	{
		title: "Denis Novik",
		description: "сайт-визитка дизайнера",
		technologies: [""],
		image: ProjectFive,
		link: "https://sweetconsole.github.io/denis_novik/"
	},
	{
		title: "Cyberpunk",
		description: "леднинг игры",
		technologies: ["CSS", "HTML", "JavaScript"],
		image: ProjectSix,
		link: "https://sweetconsole.github.io/cyberpunk/dist/ "
	},
	{
		title: "Plant",
		description: "лендинг комнатных растений",
		technologies: ["React", "TypeScript", "Framer Motion", "SCSS"],
		image: ProjectSeven,
		link: "https://plant-snowy.vercel.app/"
	},
	{
		title: "RBS gpt",
		description: "сайт нейронных сетей",
		technologies: ["Wordpress", "SCSS", "PHP", "Gulp", "JavaScript"],
		image: ProjectEight,
		link: "https://rbs-gpt.ru/"
	},
	{
		title: "Britlex",
		description: "лендинг школы по изучению иностранных языков",
		technologies: ["HTML", "JavaScript", "CSS"],
		image: ProjectNine,
		link: "https://sweetconsole.github.io/britlex/"
	},
	{
		title: "Simple",
		description: "леднинг бумажных изделий",
		technologies: ["Framer Motion", "React", "SCSS", "TypeScript"],
		image: ProjectTen,
		link: "https://simple-paper-products.vercel.app/"
	},
	{
		title: "Архивариусъ",
		description: "сайт компании по работе с документами",
		technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
		image: ProjectEleven,
		link: "https://www.archivarius.ru/hranenie-dokumentov/"
	},
	{
		title: "babushka",
		description: "сайт веб студии",
		technologies: ["TypeScript", "React", "Framer Motion", "SCSS"],
		image: ProjectTwelve,
		link: "https://sweetconsole.github.io/babushka/dist/"
	}
]
