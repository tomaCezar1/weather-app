import React, { useEffect, useState } from "react";
import Sun from "../images/sunnyDay.jpg";

function WeatherCard({ city, location }): JSX.Element {
  const [currTemp, setCurrTemp] = useState(null);
  const [country, setCountry] = useState(null);
  const [description, setDescription] = useState(null);

  const fetchWeather = () => {
    const apiKey = "7dcbb6c65f7ec1ed04f90091b4b62997";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${location}&units=metric&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setCurrTemp(res.main?.temp);
        setCountry(res?.sys.country);
        setDescription(res?.weather[0].description);
      });
  };

  useEffect(() => {
    fetchWeather();
  });

  return (
    <div className="card-container">
      <div className="img-temp-container">
        <img className="card-img" src={Sun} alt="img" />
        <h1 className="card-temp">{currTemp}&deg;C</h1>
      </div>
      <div className="card-details">
        <h2 className="card-details-title">
          {city}, {country}
        </h2>
        <p className="card-details-desc"> {description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
