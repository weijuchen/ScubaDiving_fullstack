import React, { useEffect, useState } from "react";
import "./DestinationWeather.css";

function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API request here using fetch
    const myKey = "b4f99028cc18f93fbad5b8c348e455c7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setWeatherData(null);
      });
  }, [city]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Check if 'sys' is defined before destructuring
  const { weather, main, sys } = weatherData;
  const weatherMain = weather && weather[0]?.main;
  const description = weather && weather[0]?.description;
  const newTemp = Math.round(main.temp - 273.15);
  const country = sys && sys.country; // Check if 'sys' is defined before accessing 'country'

  return (
    <div className="weather section">
      <h2>Weather in {city}</h2>
      <table className="table section">
        <tr>
          <td>Main Weather</td>
          <td>{weatherMain}</td>
        </tr>
        <tr>
          <td>Weather Description</td>
          <td>{description}</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>{newTemp} °C</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{country}</td>
        </tr>
      </table>
    </div>
  );
}

export default WeatherDisplay;
