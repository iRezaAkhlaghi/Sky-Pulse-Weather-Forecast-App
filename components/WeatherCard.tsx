import { useState } from "react";
import { toCelsius, toFahrenheit, formatTime, getDate } from "../utils/helper";
import type { WeatherData } from "../api/weatherApi";

type WeatherCardProps = {
  data: WeatherData;
};

function WeatherCard({ data }: WeatherCardProps) {
  const { name, sys, main, weather, wind, timezone, dt } = data;

  // URLs for weather icon and country flag images
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
  const flagUrl = `https://flagcdn.com/48x36/${sys.country.toLowerCase()}.png`;

  // State to toggle temperature unit (Celsius or Fahrenheit)
  const [showCelsius, setShowCelsius] = useState(true);
  const symbol = showCelsius ? "°C" : "°F";

  // Convert temperature based on selected unit
  const temp = showCelsius
    ? toCelsius(data.main.temp)
    : toFahrenheit(data.main.temp);

  return (
    <>
      <>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center  gap-5">
            <img
              src={flagUrl}
              alt={sys.country}
              className="w-7 h-7 rounded-sm shadow-md"
            />
            <h2 className="text-3xl font-bold text-white">{name}</h2>
            <img className="text-6xl" src={iconUrl} />
          </div>
        </div>

        <p className="text-xl capitalize mb-6 text-center text-gray-300 tracking-wide">
          {weather[0].main} — {weather[0].description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-base text-gray-200">
          <div>
            <p className="text-sm text-gray-400 mb-1">Current Temp</p>
            <p className="text-xl font-medium text-white">
              {temp.toFixed(1)}
              {symbol}
            </p>
            <button
              onClick={() => setShowCelsius((prev) => !prev)}
              className="mt-2 text-sm text-yellow-400 hover:underline transition cursor-pointer"
            >
              Change Unit
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Humidity</p>
            <p className="text-xl font-medium">{main.humidity}%</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Pressure</p>
            <p className="text-xl font-medium">{main.pressure} hPa</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Wind Speed</p>
            <p className="text-xl font-medium">{wind.speed} m/s</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Wind Direction</p>
            <p className="text-xl font-medium">{wind.deg}°</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Local Time</p>
            <p className="text-xl font-medium">{getDate(dt, timezone)}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Sunrise</p>
            <p className="text-xl font-medium">{formatTime(sys.sunrise)}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Sunset</p>
            <p className="text-xl font-medium">{formatTime(sys.sunset)}</p>
          </div>
        </div>
      </>
    </>
  );
}

export default WeatherCard;
