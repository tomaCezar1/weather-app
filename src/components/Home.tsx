import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import { Context } from "../context/Context";

function Home(): JSX.Element {
  const { cities } = useContext(Context);

  return (
    <>
      <div className="cards-container">
        {cities.map((city, index) => {
          return <WeatherCard key={index} city={city} />;
        })}
      </div>
    </>
  );
}

export default Home;
