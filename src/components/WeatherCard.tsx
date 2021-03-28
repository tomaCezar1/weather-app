import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

import { API_KEY } from '../utils/utils';
import CloseBtn from '../images/cancel.svg';

function WeatherCard({ cityID }): JSX.Element {
    const [city, setCity] = useState(null);
    const [currTemp, setCurrTemp] = useState(null);
    const [country, setCountry] = useState(null);
    const [weather, setWeather] = useState('');
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
                setCity(res?.name);
                setCurrTemp(res?.main.temp);
                setCountry(res?.sys.country);

                const timezone = res?.timezone;
                setTimezone(timezone);

                const weather = res.weather[0].main.toLowerCase();
                identifyWeather(weather);
                console.log('fetched');
            });
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    const changeTime = (timezone: number) => {
        const timezoneInMinutes = timezone / 60;
        const currTime = moment().utcOffset(timezoneInMinutes).format('hh:mm:ss');
        setTime(currTime);
    };

    const updateTime = () => {
        setTimeout(() => {
            changeTime(timezone);
        }, 1000);
    };

    updateTime();

    const identifyWeather = (weather: string) => {
        switch (weather) {
            case 'clear':
                {
                    setWeather('clear-sky');
                }
                break;
            case 'clouds':
                {
                    setWeather('clouds');
                }
                break;
            case 'rain':
                {
                    setWeather('rain');
                }
                break;
            case 'mist':
                {
                    setWeather('mist');
                }
                break;
        }
    };

    const triggerDelete = () => {
        setDeleted(true);
        setTimeout(() => {
            setUnmounted(true);
        }, 750);
    };

    return !unmounted ? (
        <div
            className={`card-container ${deleted ? 'deleted-card' : ''} ${weather} `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="card-location-container">
                <h2 className="card-location">
                    {city}, {country}
                </h2>
            </div>
            <i
                className={`card-delete-btn ${hovered ? 'btn-hovered' : ''}`}
                onClick={triggerDelete}>
                <img src={CloseBtn} alt="close button" />
            </i>
            <div className="card-details-container">
                <div className="card-details">{time}</div>
                <div className="card-details">{currTemp}&deg;C</div>
            </div>
        </div>
    ) : null;
}

export default WeatherCard;
