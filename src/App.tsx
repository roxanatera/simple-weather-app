import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import { fetchWeather, fetchForecast } from './api/weatherService';
import { WeatherData, ForecastData } from './types';
import './App.css';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<{ date: string; temperature: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const weather = await fetchWeather(city);
      const forecast = await fetchForecast(city);

      setWeatherData({
        name: weather.name,
        main: {
          temp: Math.round(weather.main.temp), 
          humidity: weather.main.humidity,
        },
        wind: {
          speed: weather.wind.speed,
        },
      });

      
      const uniqueDays = new Map();
      const filteredForecast = forecast.list.filter((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!uniqueDays.has(date)) {
          uniqueDays.set(date, true);
          return true;
        }
        return false;
      });

      const limitedForecast = filteredForecast.slice(0, 3).map((item) => ({
        date: item.dt_txt.split(' ')[0],
        temperature: Math.round(item.main.temp), 
      }));

      setForecastData(limitedForecast);
    } catch (error) {
      setError('No se pudo obtener los datos del clima.');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl font-bold  mb-8 text-center">Aplicación de Clima</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-300 mt-4">{error}</p>}
      {weatherData && (
        <WeatherDisplay
          temperature={weatherData.main.temp}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          cityName={weatherData.name}
        />
      )}
      {forecastData.length > 0 && <ForecastDisplay forecast={forecastData} />}
    </div>
  );
};

export default App;
