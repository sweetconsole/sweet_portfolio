# SweetConsole Portfolio

Сайт-портфолио в стиле MS-DOS на <strong>React</strong> с использованием языка программирования <strong>TypeScript</strong>, препроцессора  стилей <strong>SASS</strong> и сборщика проектов <strong>Vite</strong>.

## Технологии

<div id="steck">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="30" height="30" alt="Vite" />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="30" height="30" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="30" height="30" alt="Type Script"/>
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="30" height="30" alt="SASS"/>
</div>

## Архитектура
```
├── public - директория для иконок и превью изображений
│ 
├── src - рабочая директория
│   ├── assets
│   │	├── fonts - директория шрифтов
│   │	├── images - директория изображений
│   │   └── styles
│   │       ├── fonts.scss - стили инициализация шрифтов
│   │       ├── general.scss - общие стили проекта
│   │       ├── reset.scss - файл сброса стилей браузеров
│   │       └── variables.scss - переменные стилей
│   │
│   ├── components
│   │	├── * - компоненты
│   │	├── ui
│   │	│   ├── * - компоненты ui элементов
│   │	│   └── index.ts - файл сокращения импортов
│   │	│
│   │	└── index.ts - файл сокращения импортов
│   │
│   ├──
│   ├── Ещё будет
│   ├──
│   │
│   ├── App.tsx - корневой компонент проекта
│   ├── main.tsx - главный испольняемый файл
│   └── vite-env.d.ts - файл определения типов переменных окружения 

│
├── .gitignore
├── eslint.config.js - конфигурация eslint
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts - конфигурация сборщика проектов
```

## Запуск проекта

Для запуска проекта необходимо выполнить следующие действия:

1. Клонировать проект на ваш компьютер с [Github](https://github.com/sweetconsole/sweet_portfolio) с помощью команды:
```
git clone https://github.com/sweetconsole/sweet_portfolio.git
```

2. Установить зависимости:
```
npm install
```

3. Запустить проект:
```
npm start
```

