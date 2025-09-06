import HTML from "../../assets/images/skills/html.svg"
import HTMLHover from "../../assets/images/skills/html-hover.svg"
import CSS from "../../assets/images/skills/css.svg"
import CSSHover from "../../assets/images/skills/css-hover.svg"
import TypeScript from "../../assets/images/skills/type_script.svg"
import TypeScriptHover from "../../assets/images/skills/type_script-hover.svg"
import React from "../../assets/images/skills/react.svg"
import ReactHover from "../../assets/images/skills/react-hover.svg"
import Vite from "../../assets/images/skills/vite.svg"
import ViteHover from "../../assets/images/skills/vite-hover.svg"
import SASS from "../../assets/images/skills/sass.svg"
import SASSHover from "../../assets/images/skills/sass-hover.svg"
import Gulp from "../../assets/images/skills/gulp.svg"
import GulpHover from "../../assets/images/skills/gulp-hover.svg"
import Redux from "../../assets/images/skills/redux.svg"
import ReduxHover from "../../assets/images/skills/redux-hover.svg"
import FramerMotion from "../../assets/images/skills/framer_motion.svg"
import FramerMotionHover from "../../assets/images/skills/framer_motion-hover.svg"
import Webpack from "../../assets/images/skills/webpack.svg"
import WebpackHover from "../../assets/images/skills/webpack-hover.svg"
import Firebase from "../../assets/images/skills/firebase.svg"
import FirebaseHover from "../../assets/images/skills/firebase-hover.svg"
import Git from "../../assets/images/skills/git.svg"
import GitHover from "../../assets/images/skills/git-hover.svg"
import type { SkillType } from "./skills.types.ts"

export const skills: Array<SkillType> = [
	{
		name: "HTML",
		icon: HTML,
		iconHover: HTMLHover,
		delay: 0.2,
		duration: 0.2
	},
	{
		name: "CSS",
		icon: CSS,
		iconHover: CSSHover,
		delay: 0.2,
		duration: 0.4
	},
	{
		name: "TypeScript",
		icon: TypeScript,
		iconHover: TypeScriptHover,
		link: "https://www.typescriptlang.org/",
		delay: 0.2,
		duration: 0.6
	},
	{
		name: "React",
		icon: React,
		iconHover: ReactHover,
		link: "https://react.dev/",
		delay: 0.2,
		duration: 0.8
	},
	{
		name: "Gulp",
		icon: Gulp,
		iconHover: GulpHover,
		link: "https://gulpjs.com/",
		delay: 0.2,
		duration: 1.0
	},
	{
		name: "Vite",
		icon: Vite,
		iconHover: ViteHover,
		link: "https://vite.dev/",
		delay: 0.2,
		duration: 1.2
	},
	{
		name: "Framer Motion",
		icon: FramerMotion,
		iconHover: FramerMotionHover,
		link: "https://motion.dev/",
		delay: 0.4,
		duration: 0.2
	},
	{
		name: "Firebase",
		icon: Firebase,
		iconHover: FirebaseHover,
		link: "https://firebase.google.com/",
		delay: 0.4,
		duration: 0.4
	},
	{
		name: "SASS",
		icon: SASS,
		iconHover: SASSHover,
		link: "https://sass-lang.com/",
		delay: 0.4,
		duration: 0.6
	},

	{
		name: "Redux",
		icon: Redux,
		iconHover: ReduxHover,
		link: "https://redux.js.org/",
		delay: 0.4,
		duration: 0.8
	},
	{
		name: "Git",
		icon: Git,
		iconHover: GitHover,
		delay: 0.4,
		duration: 1.0
	},
	{
		name: "Webpack",
		icon: Webpack,
		iconHover: WebpackHover,
		link: "https://webpack.js.org/",
		delay: 0.4,
		duration: 1.2
	}
]
