// import React, { useState, useContext } from 'react';
// import { Context } from '../context/Context';
// import Sun from '../images/sunnyDay.jpg';

// function WeatherCard({ city, country, temp, triggerDelete }): JSX.Element {
//     const [description, setDescription] = useState(null);
//     const { hasSearched, homeCities } = useContext(Context);

//     return (
//         <div className={hasSearched ? 'card-container card-container-deleted' : 'card-container'}>
//             <div className="card-location-container">
//                 <h2 className="card-location">
//                     {city}, {country}
//                 </h2>
//             </div>
//             <div className="card-img-container">
//                 {/* <img className="card-img" src={Sun} alt="img" /> */}
//                 <button className="card-delete-btn" onClick={triggerDelete}>
//                     -
//                 </button>
//                 <h1 className="card-temp">{temp}&deg;C</h1>
//             </div>
//         </div>
//     );
// }

// export default WeatherCard;

import React, { useEffect, useState } from 'react';
import { API_KEY } from '../utils/utils';

function WeatherCard({ cityID, triggerDelete }): JSX.Element {
    const [city, setCity] = useState(null);
    const [currTemp, setCurrTemp] = useState(null);
    const [country, setCountry] = useState(null);
    const [deleted, setDeleted] = useState(false);

    const fetchWeather = () => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${API_KEY}`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log('request sent');
                setCity(res?.name);
                setCurrTemp(res?.main.temp);
                setCountry(res?.sys.country);
            });
    };

    useEffect(() => {
        // fetchWeather();
    });

    return (
        // <div className={deleted ? 'card-container card-container-deleted' : 'card-container'}>
        <div className="card-container">
            <div className="card-location-container">
                <h2 className="card-location">
                    {city}, {country}
                </h2>
            </div>
            <div className="card-img-container">
                <button className="card-delete-btn" onClick={triggerDelete}>
                    -
                </button>
                <h1 className="card-temp">{currTemp}&deg;C</h1>
            </div>
        </div>
        // </div>
    );
}

export default WeatherCard;
