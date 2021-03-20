import React from "react";
import WeatherCard from "./WeatherCard";

function Home(): JSX.Element {
  const cities = {
    uk: "London",
    ro: "Bucharest",
    md: "Chișinău",
    us: "Atlanta",
  };

  console.log(Object.entries(cities).map(entry => entry));

  return (
    <>
      <div className="cards-container">
        {Object.entries(cities).map((entry, index) => {
        return <WeatherCard key={index} location={entry.[0]} city={entry[1]} />;
        })}
      </div>
    </>
  );
}

export default Home;
