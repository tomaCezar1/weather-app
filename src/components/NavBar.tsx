import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';
import { API_KEY } from '../utils/utils';

function NavBar() {
    const {
        homeCities,
        setHomeCities,
        baseCities,
        numberOfHomeCards,
        setShowToast,
        setUnmountToast
    } = useContext(Context);

    useEffect(() => {
        console.log(suggestions);
    });

    const [suggestions, setSuggestions] = useState([]);
    // const [showSuggestions, setShowSuggestions] = useState(false);
    // const [showAutoComplete, setShowAutoComplete] = useState(false);

    const autoComplete = (e) => {
        // setShowAutoComplete(true);
        const input = e.target.value.toLowerCase();

        // if (input.length < 1) {
        // setShowAutoComplete(false);
        // }

        const arr = baseCities.map((city) => city.toLowerCase());

        const suggestion = arr.filter((city) => city.startsWith(input));
        if (suggestion) {
            setSuggestions(suggestion);
            // setShowSuggestions(true);
        }
    };

    // const blurHandler = () => {
    //     setShowAutoComplete(false);
    // };

    const enterPressed = (e) => {
        const inputValue = e.target.value.toUpperCase();

        if (e.keyCode === 13 && e.key === 'Enter') {
            if (numberOfHomeCards >= 9) {
                setShowToast(true);
                setTimeout(() => {
                    setUnmountToast(true);
                }, 4300);
                setTimeout(() => {
                    setShowToast(false);
                    setUnmountToast(false);
                }, 5000);
            } else {
                const cities = [...homeCities];
                const upperCaseCities = cities.map((city) => city.toUpperCase());

                if (upperCaseCities.indexOf(inputValue) < 0) {
                    fetchWeather(inputValue);
                }
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
                console.log('fetched');
            });
    };

    return (
        <>
            <div className="flex-center-column">
                <nav className="navbar">
                    <div className="search-menu">
                        <input
                            autoComplete="on"
                            type="text"
                            list="suggestions"
                            onKeyUp={(e) => enterPressed(e)}
                            onChange={(e) => autoComplete(e)}
                            // onBlur={blurHandler}
                            className="navbar-input"
                            placeholder="Enter your city"
                        />
                        {/* {showAutoComplete ? (
                            <ul className="dropdown">
                                {suggestions.map((city, index) => {
                                    return <li key={index}>{city}</li>;
                                })}
                            </ul>
                        ) : null} */}
                        <datalist id="suggestions">
                            {suggestions.map((city, index) => {
                                return <option key={index} value={city} />;
                            })}
                        </datalist>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
