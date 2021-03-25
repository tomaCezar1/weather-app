import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { API_KEY } from '../utils/utils';

function NavBar() {
    const {
        // input,
        // setInput,
        homeCities,
        setHomeCities,
        setHasSearched,
        unmount,
        setUnmount
    } = useContext(Context);

    const unmountTimer = () => {
        setTimeout(() => {
            setUnmount(true);
        }, 760);
    };

    const [input, setInput] = useState('');

    const enterPressed = (e) => {
        const inputValue = e.target.value;
        if (e.keyCode === 13 && e.key === 'Enter') {
            setInput(inputValue);
            console.log(input);
            fetchWeather(input);
        }
    };

    useEffect(() => {
        // fetchWeather(input);
    }, [input]);

    const fetchWeather = (input: string) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`
        )
            .then((res) => res.json())
            .then((res) => {
                const searchedCity = res.name;
                console.log('request sent on navbar');
                console.log(homeCities.indexOf(searchedCity));
                // if (homeCities.indexOf(searchedCity) < 0 && res.cod !== '404') {
                if (homeCities.indexOf(searchedCity) < 0) {
                    const citiesCopy = [...homeCities, searchedCity];
                    setHomeCities(citiesCopy);
                }
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
