import React, { useEffect, useContext, useState } from 'react';
import WeatherCard from './WeatherCard';
import { Context } from '../context/Context';
import { apiKey } from '../utils/utils';

function Home(): JSX.Element {
    const { homeCities, setHomeCities } = useContext(Context);

    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [temp, setTemp] = useState([]);

    const fetchWeatherForHome = (cities: number[]) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/group?id=${homeCities[0]},${homeCities[1]},${homeCities[2]},${homeCities[3]},${homeCities[4]},${homeCities[5]},${homeCities[6]},${homeCities[7]},${homeCities[8]},${homeCities[9]}&units=metric&appid=${apiKey}`
        )
            .then((res) => res.json())
            .then((res) => {
                let tmpCities = [];
                let tmpCountries = [];
                let tmpTemperatures = [];

                Object.values(res.list).forEach((value) => {
                    tmpCities.push(value.name);
                    tmpCountries.push(value.sys.country);
                    tmpTemperatures.push(value.main.temp);
                });
                setCities(tmpCities);
                setCountries(tmpCountries);
                setTemp(tmpTemperatures);
            });
    };

    useEffect(() => {
        fetchWeatherForHome(cities);
    }, []);

    const triggerDelete = (index) => {
        console.log(index);
        const cities = [...homeCities];
        cities.splice(index, 1);
        setHomeCities(cities);

        // const tmpCities = [...cities];
        // tmpCities.splice(index, 1);
        // setCities(tmpCities);

        // const tmpCountries = [...countries];
        // tmpCountries.splice(index, 1);
        // setCountries(tmpCountries);

        console.log(countries);
        console.log(cities);

        // const tmpTemperatures = [...temp];
        // tmpTemperatures.splice(index, 1);
        // setTemp(tmpTemperatures);
        console.log(cities, temp, countries);
    };

    return (
        <>
            <div className="cards-container">
                {homeCities.map((city, index) => {
                    return (
                        <WeatherCard
                            key={index}
                            country={countries[index]}
                            temp={temp[index]}
                            city={cities[index]}
                            triggerDelete={() => triggerDelete(index)}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Home;
