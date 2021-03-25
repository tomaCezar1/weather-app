import React, { useContext } from 'react';
import WeatherCard from './WeatherCard';
import { Context } from '../context/Context';

function Home(): JSX.Element {
    const { homeCities } = useContext(Context);

    return (
        <>
            <div className="cards-container">
                {homeCities.map((city, index) => {
                    return <WeatherCard key={index} cityID={city} />;
                })}
            </div>
        </>
    );
}
export default Home;
