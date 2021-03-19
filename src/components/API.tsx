import React, { useEffect, useState } from "react";

function API() {
  const [currTemp, setCurrTemp] = useState(null);
  const [city, setCity] = useState(null);

  const fetchWeather = () => {
    const apiKey = "7dcbb6c65f7ec1ed04f90091b4b62997";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.name);
        setCurrTemp(res.main.temp);
        setCity(res.name);
      });
  };

  useEffect(() => {
    fetchWeather();
  });

  return (
    <div>
      At this moment, it is {currTemp} degrees in {city}
    </div>
  );
}

export default API;
