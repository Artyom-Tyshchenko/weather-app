# 🌤️ Weather App

Приложение для просмотра текущей погоды в любом городе мира. Написано в процессе изучения React + TypeScript.

## Демо

🔗 [Открыть приложение](https://weather-app-two-delta-72.vercel.app)

## Функциональность

- Поиск погоды по названию города
- Отображение температуры, влажности и описания погоды
- Обработка ошибок (город не найден, проблемы с сетью)
- Индикатор загрузки при запросе к API

## Технологии

- React 18
- TypeScript
- Vite
- OpenWeatherMap API

## Установка и запуск локально

git clone https://github.com/Artyom-Tyshchenko/weather-app.git
cd weather-app
npm install

Создай файл `.env` в корне проекта и добавь свой API-ключ с [openweathermap.org](https://openweathermap.org/):

VITE_WEATHER_API_KEY=твой_ключ

Запусти проект:

npm run dev

## Структура проекта

src/
├── components/
│ ├── SearchBar.tsx
│ ├── WeatherCard.tsx
│ └── ErrorMessage.tsx
├── types/
│ └── weather.ts
├── App.tsx
└── main.tsx
