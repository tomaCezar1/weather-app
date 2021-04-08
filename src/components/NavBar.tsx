import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';
import { API_KEY } from '../utils/utils';
import useDebounce from '../utils/useDebounce';
import Toast from './Toast';

function NavBar() {
    const {
        homeCities,
        setHomeCities,
        numberOfHomeCards,
        setShowToast,
        setUnmountToast
    } = useContext(Context);

    const [suggestions, setSuggestions] = useState([]);
    // const [showToast, setShowToast] = useState(false);

    const autoComplete = (e) => {
        const input = e.target.value.toLowerCase();

        const arr = homeCities.map((city) => city.toLowerCase());

        const suggestion = arr.filter((city) => city.startsWith(input));

        if (suggestion) {
            setSuggestions(suggestion);
        }
    };

    // const timeouts = [];
    // let ready1 = true;
    // let ready2 = true;

    // const debounce = (callback, delay) => {
    //     console.log(callback, delay);
    //     let timeout;
    //     return function () {
    //         clearTimeout(timeout);
    //         timeout = setTimeout(callback, delay);
    //     };
    // };

    const enterPressed = (e) => {
        const inputValue = e.target.value.toUpperCase();

        // console.log('enter fired');

        if (e.keyCode === 13 && e.key === 'Enter') {
            console.log(numberOfHomeCards);

            if (numberOfHomeCards >= 9) {
                setShowToast(true);

                // for (let i = 0; i < timeouts.length; i++) {
                //     clearTimeout(timeouts[i]);
                //     console.log(timeouts);
                // }

                // timeouts.push(
                //     setTimeout(() => {
                //         setUnmountToast(true);
                //         console.log('timeout');
                //     }, 4250)
                // );
                // timeouts.push(
                //     setTimeout(() => {
                //         setUnmountToast(false);
                //         setShowToast(false);
                //     }, 5000)
                // );

                // ready1 = false;
                // ready2 = false;

                setTimeout(() => {
                    setUnmountToast(true);
                    console.log('timeout 1');
                    // ready1 = true;
                }, 4250);
                setTimeout(() => {
                    setUnmountToast(false);
                    setShowToast(false);
                    console.log('timeout 2');
                    // ready2 = true;
                }, 5000);

                // const promise1 = new Promise(() => {
                //     setTimeout(() => {
                //         setUnmountToast(true);
                //         console.log('timeout 1');
                //     }, 4250);
                // });

                // promise1.then(() => (ready1 = true));
            } else {
                const cities = [...homeCities];
                const upperCaseCities = cities.map((city) => city.toUpperCase());
                const indexOfInputCity = upperCaseCities.indexOf(inputValue);

                if (indexOfInputCity < 0) {
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
                            // onKeyDown={(e) => debounce(() => enterPressed(e), 5000)}
                            onKeyDown={(e) => enterPressed(e)}
                            onChange={(e) => autoComplete(e)}
                            className="navbar-input"
                            placeholder="Enter your city"
                        />

                        <datalist id="suggestions">
                            {suggestions.map((city, index) => {
                                return <option key={index} value={city} />;
                            })}
                        </datalist>
                    </div>
                </nav>
                {/* {showToast ? <Toast /> : null} */}
            </div>
        </>
    );
}

export default NavBar;
