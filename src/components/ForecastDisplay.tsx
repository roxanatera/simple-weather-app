// src/components/ForecastDisplay.tsx
import React from 'react';

type ForecastData = {
  date: string; // La fecha puede estar en formato ISO o un string adecuado
  temperature: number;
};

type ForecastDisplayProps = {
  forecast: ForecastData[];
};

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ forecast }) => {
  // Solo mostrar los tres primeros elementos (hoy, mañana y pasado mañana)
  const limitedForecast = forecast.slice(0, 3);

  return (
    <div className="bg-white bg-opacity-90 rounded-lg text-center p-5 shadow-lg p-6 mt-4 max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">Pronóstico</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {limitedForecast.map((day, index) => {
          // Convertir la fecha a formato español
          const formattedDate = new Date(day.date).toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });

          return (
            <div key={index} className="text-center text-gray-900">
              <p className="text-lg font-medium">{formattedDate}</p>
              <p className="text-lg">{day.temperature}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastDisplay;
