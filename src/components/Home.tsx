import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import { Context } from "../context/Context";

function Home(): JSX.Element {
  const { cities, unmount } = useContext(Context);
  console.log(unmount);
  return (
    <>
      {unmount ? null : (
        <div className="cards-container">
          {cities.map((city, index) => {
            return <WeatherCard key={index} city={city} />;
          })}
        </div>
      )}
    </>
  );
}

export default Home;
