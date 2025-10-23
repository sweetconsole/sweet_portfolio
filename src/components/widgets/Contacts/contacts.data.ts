import Email from "../../../assets/images/contacts/email.png"
import EmailHover from "../../../assets/images/contacts/email-hover.png"
import GitHub from "../../../assets/images/contacts/github.png"
import GitHubHover from "../../../assets/images/contacts/github-hover.png"
import Telegram from "../../../assets/images/contacts/telegram.png"
import TelegramHover from "../../../assets/images/contacts/telegram-hover.png"
import Steam from "../../../assets/images/contacts/steam.png"
import SteamHover from "../../../assets/images/contacts/steam-hover.png"
import VK from "../../../assets/images/contacts/vk.png"
import VKHover from "../../../assets/images/contacts/vk-hover.png"
import GitLab from "../../../assets/images/contacts/gitlab.png"
import GitLabHover from "../../../assets/images/contacts/gitlab-hover.png"
import type { ContactType } from "./contacts.types.ts"

export const contacts: Array<ContactType> = [
	{
		title: "Электронная почта",
		link: "mailto:sweetconsole@gmail.com",
		icon: Email,
		iconHover: EmailHover,
		duration: 1.0
	},
	{
		title: "GitHub",
		link: "https://github.com/sweetconsole",
		icon: GitHub,
		iconHover: GitHubHover,
		duration: 0.5
	},
	{
		title: "Telegram",
		link: "https://t.me/sweet_console",
		icon: Telegram,
		iconHover: TelegramHover,
		duration: 0.2
	},
	{
		title: "GitLab",
		link: "https://gitlab.com/sweetconsole",
		icon: GitLab,
		iconHover: GitLabHover,
		duration: 0.2
	},
	{
		title: "Steam Workshop",
		link: "https://steamcommunity.com/id/sweetconsole/myworkshopfiles/",
		icon: Steam,
		iconHover: SteamHover,
		duration: 0.6
	},
	{
		title: "Вконтакте",
		link: "https://vk.com/sweetconsole",
		icon: VK,
		iconHover: VKHover,
		duration: 0.8
	}
]
