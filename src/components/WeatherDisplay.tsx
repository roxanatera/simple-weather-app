// src/components/WeatherDisplay.tsx
import React from 'react';

type WeatherDisplayProps = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  cityName: string;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  temperature,
  humidity,
  windSpeed,
  cityName,
}) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center text-gray-900 max-w-sm w-full mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">{cityName}</h2>
      <p className="text-lg mb-2">🌡️ Temperatura: {temperature}°C</p>
      <p className="text-lg mb-2">💧 Humedad: {humidity}%</p>
      <p className="text-lg">🌬️ Viento: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
