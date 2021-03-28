import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { API_KEY } from '../utils/utils';

function NavBar() {
    const { homeCities, setHomeCities } = useContext(Context);

    const enterPressed = (e) => {
        const inputValue = e.target.value.toUpperCase();
        if (e.keyCode === 13 && e.key === 'Enter') {
            const cities = [...homeCities];
            const upperCaseCities = cities.map((city) => city.toUpperCase());

            if (upperCaseCities.indexOf(inputValue) < 0) {
                fetchWeather(inputValue);
            }
        }
    };

    const fetchWeather = (input: string) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`
        )
            .then((res) => res.json())
            .then((res) => {
                const name = res.name;
                const copy = homeCities.concat(name);
                setHomeCities(copy);
                console.log(homeCities);
            });
    };

    return (
        <>
            <div className="flex-center-column">
                {/* <h1 className="nav-title">Weather App</h1> */}
                <nav className="navbar">
                    <input
                        type="text"
                        onKeyUp={(e) => enterPressed(e)}
                        className="navbar-input"
                        placeholder="Enter your city"
                    />
                </nav>
            </div>
        </>
    );
}

export default NavBar;
