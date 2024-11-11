// src/api/weatherService.ts
import { WeatherData, ForecastData } from '../types';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) throw new Error('Error al obtener el clima');
  return await response.json();
};

export const fetchForecast = async (city: string): Promise<ForecastData> => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) throw new Error('Error al obtener el pronóstico');
  return await response.json();
};
