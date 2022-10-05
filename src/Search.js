import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("Tokyo");

  function getWeatherInfo(response) {
    console.log(response.data.main.temp);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "b1710895b469eb434ca65896f4e0d1be";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=${units}`;

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
    </div>
  );
}
