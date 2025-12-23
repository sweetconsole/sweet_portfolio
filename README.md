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
├── public - директория статичных файлов
│ 
├── src - рабочая директория
│   ├── styles
│   │   ├── fonts.scss - стили инициализация шрифтов
│   │   ├── general.scss - общие стили проекта
│   │   ├── reset.scss - файл сброса стилей браузеров
│   │   └── variables.scss - переменные стилей
│   │
│   ├── components
│   │	├── shared - общие компоненты
│   │	├── widgets - блоки сайта
│   │	│
│   │	└── index.ts - файл сокращения импортов
│   │
│   ├── components
│   │	├── constants - константные переменные
│   │	│
│   │	└── index.ts - файл сокращения импортов
│   │
│   ├── App.tsx - корневой компонент проекта
│   ├── main.tsx - главный испольняемый файл
│   └── vite-env.d.ts - файл определения типов переменных окружения 
│
├── .gitignore
├── eslint.config.js - конфигурация eslint
├── index.html - корневая страница веб-приложения
├── package.json - файл управления зависимостями, метаданными проекта
├── README.md
├── tsconfig.app.json - настройки специфичных параметров
├── tsconfig.json - настройки проекта
├── tsconfig.node.json - настройки компилятора TypeScript
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
npm run dev
```

