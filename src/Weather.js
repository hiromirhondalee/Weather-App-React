import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    date: "Wed, 14 Sep 2022, 10:05pm",
    weatherDescription: "Scattered slouds",
    temperature: 30,
    humidity: 20,
    wind: 5,
  };
  return (
    <div className="Weather">
      <div className="weather-city-summary">
        <h1 className="city-name">{weatherData.city}</h1>
        <ul className="summary">
          <li>{weatherData.date}</li>
          <li className="description">{weatherData.weatherDescription}</li>
        </ul>

        <div className="temperature">
          <span>{weatherData.temperature}</span>
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
              <li className="measurement-data">{weatherData.humidity}%</li>
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
              <li className="measurement-data">{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
