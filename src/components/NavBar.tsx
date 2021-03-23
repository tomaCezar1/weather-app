import React, { useContext } from "react";
import { Context } from "../context/Context";

function NavBar() {
  const {
    input,
    setInput,
    cities,
    setCities,
    setHasSearched,
    unmount,
    setUnmount,
  } = useContext(Context);

  console.log(input);

  const inputHandler = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const unmountTimer = () => {
    setTimeout(() => {
      setUnmount(true);
    }, 760);
  };

  const enterPressed = e => {
    if (e.keyCode === 13 && e.key === "Enter") {
      fetchWeather(input);
      setHasSearched(true);
      unmountTimer();
    }
  };

  const fetchWeather = input => {
    const apiKey = "7dcbb6c65f7ec1ed04f90091b4b62997";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(res => {
        const searchedCity = res.name;
        if (cities.indexOf(searchedCity) < 0 && res.cod !== "404") {
          const citiesCopy = [...cities, searchedCity];
          setCities(citiesCopy);
        }
      });
  };

  return (
    <>
      <div className="flex-center-column">
        <h1 className="nav-title">Weather App</h1>
        <nav className="navbar">
          <input
            type="text"
            onChange={e => inputHandler(e)}
            onKeyUp={e => enterPressed(e)}
            className="navbar-input"
            placeholder="Enter your city"
          />
        </nav>
      </div>
    </>
  );
}

export default NavBar;
