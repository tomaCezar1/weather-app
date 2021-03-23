import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';
import Sun from '../images/sunnyDay.jpg';

function WeatherCard({ city, country, temp, triggerDelete }): JSX.Element {
    const [description, setDescription] = useState(null);
    const { hasSearched, homeCities } = useContext(Context);

    return (
        <div className={hasSearched ? 'card-container card-container-deleted' : 'card-container'}>
            <div className="card-location-container">
                <h2 className="card-location">
                    {city}, {country}
                </h2>
            </div>
            <div className="card-img-container">
                {/* <img className="card-img" src={Sun} alt="img" /> */}
                <button className="card-delete-btn" onClick={triggerDelete}>
                    -
                </button>
                <h1 className="card-temp">{temp}&deg;C</h1>
            </div>
        </div>
    );
}

export default WeatherCard;
