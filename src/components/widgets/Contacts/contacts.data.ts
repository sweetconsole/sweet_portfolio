import type { ContactType } from "./contacts.types.ts"

export const contacts: Array<ContactType> = [
	{
		title: "Электронная почта",
		link: "mailto:sweetconsole@gmail.com",
		icon: "/images/contacts/email.svg",
		iconHover: "/images/contacts/email-hover.svg",
		duration: 1.0
	},
	{
		title: "GitHub",
		link: "https://github.com/sweetconsole",
		icon: "/images/contacts/github.svg",
		iconHover: "/images/contacts/github-hover.svg",
		duration: 0.5
	},
	{
		title: "Telegram",
		link: "https://t.me/sweet_console",
		icon: "/images/contacts/telegram.svg",
		iconHover: "/images/contacts/telegram-hover.svg",
		duration: 0.2
	},
	{
		title: "GitLab",
		link: "https://gitlab.com/sweetconsole",
		icon: "/images/contacts/gitlab.svg",
		iconHover: "/images/contacts/gitlab-hover.svg",
		duration: 0.2
	},
	{
		title: "Steam Workshop",
		link: "https://steamcommunity.com/id/sweetconsole/myworkshopfiles/",
		icon: "/images/contacts/steam.svg",
		iconHover: "/images/contacts/steam-hover.svg",
		duration: 0.6
	},
	{
		title: "Вконтакте",
		link: "https://vk.com/sweetconsole",
		icon: "/images/contacts/vk.svg",
		iconHover: "/images/contacts/vk-hover.svg",
		duration: 0.8
	}
]
