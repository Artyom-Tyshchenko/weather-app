import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import type { WeatherData } from './types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSearch() {
      if (!city.trim()) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );

        if (!response.ok) {
          throw new Error("Город не найден");
        }

        const data: WeatherData = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Произошла ошибка");
        setWeather(null);
      } finally {
        setIsLoading(false);
      }
    }

    return (
      <div className="app">
        <h1>Погода</h1>
        <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} />
        {error && !isLoading && <ErrorMessage message={error} />}
        {weather && !isLoading && !error && <WeatherCard weather={weather} />}
      </div>
    );
}

export default App
