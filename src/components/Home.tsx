import React, { useContext } from 'react';
import WeatherCard from './WeatherCard';
import { Context } from '../context/Context';

function Home(): JSX.Element {
    const { homeCities, setHomeCities } = useContext(Context);

    const triggerDelete = (index) => {
        const cities = [...homeCities];
        cities.splice(index, 1);
        setHomeCities(cities);
    };

    return (
        <>
            <div className="cards-container">
                {homeCities.map((city, index) => {
                    return (
                        <WeatherCard
                            key={index}
                            cityID={city}
                            triggerDelete={() => triggerDelete(index)}
                        />
                    );
                })}
            </div>
        </>
    );
}
export default Home;
