import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
    weather: WeatherData;
}

function WeatherCard({ weather }: WeatherCardProps) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
            <p>Влажность: {weather.main.humidity}%</p>
        </div>
    );
}

export default WeatherCard;