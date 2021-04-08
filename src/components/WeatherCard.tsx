import React, { useContext, useEffect, useState, useCallback } from 'react';
import moment from 'moment-timezone';

import { Context } from '../context/Context';
import { API_KEY } from '../utils/utils';
import CloseBtn from '../images/cancel.svg';

function WeatherCard({ cityID }): JSX.Element {
    const { homeCities, setHomeCities } = useContext(Context);

    const [city, setCity] = useState(null);
    const [cityBg, setCityBg] = useState(null);
    const [currTemp, setCurrTemp] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [unmounted, setUnmounted] = useState(false);
    const [time, setTime] = useState('');
    const [timezone, setTimezone] = useState(0);

    const fetchWeather = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&units=metric&appid=${API_KEY}`
        )
            .then((res) => res.json())
            .then((res) => {
                const city = res?.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                setCity(city);

                //function for background CSS
                checkForDefaultCity(city);

                const temperature = res?.main.temp;
                const t = Number(temperature.toFixed(1));
                setCurrTemp(t);

                const timezone = res?.timezone;
                setTimezone(timezone);

                console.log('fetched');
            });
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    const baseCitiesStyles = [
        'London',
        'Bucharest',
        'Atlanta',
        'Montevideo',
        'Chisinau',
        'Amsterdam',
        'Seattle',
        'Bogota',
        'Cluj-Napoca'
    ];
    // set the card background appropriately
    const checkForDefaultCity = (city: string) => {
        if (baseCitiesStyles.indexOf(city) > -1) {
            setCityBg(city.toLowerCase());
        } else setCityBg('default');
    };

    // clean up setTimeout before unmounting
    useEffect(() => {
        const timer = setInterval(() => {
            changeTime(timezone);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const changeTime = (timezone: number) => {
        const timezoneInMinutes = timezone / 60;
        const currTime = moment().utcOffset(timezoneInMinutes).format('hh:mm:ss');
        setTime(currTime);
    };

    const triggerDelete = (city: string) => {
        // fade animation
        setDeleted(true);

        setTimeout(() => {
            setUnmounted(true);
            //remove the city from homeCities array
            const cities = homeCities.filter((c) => c !== city);
            setHomeCities(cities);
        }, 750);
    };

    return (
        <div
            className={`card-container ${deleted ? 'deleted-card' : ''} ${
                unmounted ? 'display-none' : ''
            } ${cityBg} `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="card-location-container">
                <h2 className="card-location">
                    <span className="card-city">{city}</span>
                </h2>
            </div>
            <i
                className={`card-delete-btn ${hovered ? 'btn-hovered' : ''}`}
                onClick={() => triggerDelete(city)}>
                <img src={CloseBtn} alt="close button" />
            </i>
            <div className="card-details-container">
                <div className="card-details">{time}</div>
                <div className="card-details">{currTemp}&deg;C</div>
            </div>
        </div>
    );
}

export default WeatherCard;
