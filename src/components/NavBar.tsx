import React, { useContext, useState } from 'react';

import { Context } from '../context/Context';
import { API_KEY } from '../utils/utils';
import { toastContext } from '../context/toastContext';

function NavBar() {
    const { homeCities, setHomeCities } = useContext(Context);

    const { setShowToast, setUnmountToast } = useContext(toastContext);

    const [suggestions, setSuggestions] = useState([]);

    const baseCities: string[] = [
        'London',
        'Bucharest',
        'Atlanta',
        'Montevideo',
        'Chisinau',
        'Amsterdam',
        'Seattle',
        'Bogota',
        'Cluj-Napoca',
        'Medellin',
        'Sofia',
        'Iasi',
        'Copenhagen',
        'Denver',
        'Parana',
        'Skopje'
    ];

    const autoComplete = (e) => {
        const input = e.target.value.toLowerCase();

        const arr = baseCities.map((city) => city.toLowerCase());

        const suggestion = arr.filter((city) => city.startsWith(input));

        const copySuggestion = [...suggestion];

        const capitalizedSuggestions = [];

        copySuggestion.map((text) => {
            const value = text.charAt(0).toUpperCase() + text.slice(1);
            capitalizedSuggestions.push(value);
        });

        if (suggestion) {
            setSuggestions(capitalizedSuggestions);
        }
    };

    const enterPressed = (e) => {
        const inputValue = e.target.value.toUpperCase();

        if (e.keyCode === 13 && e.key === 'Enter') {
            if (homeCities.length >= 9) {
                setShowToast('red');

                setTimeout(() => {
                    setUnmountToast(true);
                }, 4250);

                setTimeout(() => {
                    setUnmountToast(false);
                    setShowToast(null);
                }, 5000);
            } else {
                const cities = [...homeCities];
                const upperCaseCities = cities.map((city) => city.toUpperCase());
                const indexOfInputCity = upperCaseCities.indexOf(inputValue);

                if (indexOfInputCity < 0) {
                    fetchWeather(inputValue);

                    setShowToast(inputValue.toLowerCase());

                    setTimeout(() => {
                        setUnmountToast(true);
                    }, 4250);

                    setTimeout(() => {
                        setUnmountToast(false);
                        setShowToast(null);
                    }, 5000);
                } else {
                    setShowToast('existent');

                    setTimeout(() => {
                        setUnmountToast(true);
                    }, 4250);

                    setTimeout(() => {
                        setUnmountToast(false);
                        setShowToast(null);
                    }, 5000);
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
                            onKeyDown={(e) => enterPressed(e)}
                            onChange={(e) => autoComplete(e)}
                            className="navbar-input"
                            placeholder="Enter your city"
                        />

                        <datalist id="suggestions">
                            {suggestions.map((city) => {
                                return <option key={city} value={city} />;
                            })}
                        </datalist>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
