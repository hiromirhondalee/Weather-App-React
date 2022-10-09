import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import "./Search.css";

export default function SearchWeather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherInfo, setWeatherInfo] = useState({});

  function getWeatherInfo(response) {
    setWeatherInfo({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "b1710895b469eb434ca65896f4e0d1be";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(getWeatherInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <div className="search-engine-container">
        <form className="input-group mb-3 search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name..."
            autoComplete="off"
            autoFocus="off"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
      <div className="Weather">
        <div className="weather-city-summary">
          <h1 className="city-name">{weatherInfo.name}</h1>
          <ul className="summary">
            <li>Sun 9 Oct 2022, 11:29am</li>
            <li className="description">{weatherInfo.description}</li>
            <li classname="weathericon">
              <img src={weatherInfo.icon} alt={weatherInfo.description} />
            </li>
          </ul>

          <div className="temperature">
            <span>{Math.round(weatherInfo.temperature)}</span>
            <span className="units">°C</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="label">
                  {" "}
                  <span role="img" aria-label="water">
                    💦
                  </span>{" "}
                  Humidity:
                </li>
                <li className="measurement-data">{weatherInfo.humidity}%</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="label">
                  {" "}
                  <span role="img" aria-label="wind">
                    💨{" "}
                  </span>
                  Wind:
                </li>
                <li className="measurement-data">{weatherInfo.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
