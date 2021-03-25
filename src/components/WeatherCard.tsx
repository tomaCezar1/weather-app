import React, { useEffect, useState } from 'react';
import { API_KEY } from '../utils/utils';
import CloseBtn from '../images/cancel.svg';

function WeatherCard({ cityID }): JSX.Element {
    const [city, setCity] = useState(null);
    const [currTemp, setCurrTemp] = useState(null);
    const [country, setCountry] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [unmounted, setUnmounted] = useState(false);

    const fetchWeather = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&units=metric&appid=${API_KEY}`
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
        fetchWeather();
    }, []);

    const triggerDelete = () => {
        setDeleted(true);
        setTimeout(() => {
            setUnmounted(true);
        }, 750);
    };

    return (
        <div
            className={`card-container ${deleted ? 'deleted-card' : ''} ${
                unmounted ? 'unmounted-card' : ''
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="card-location-container">
                <h2 className="card-location">
                    {city}, {country}
                </h2>
            </div>
            <div className="card-img-container">
                <i
                    className={`card-delete-btn ${hovered ? 'btn-hovered' : ''}`}
                    onClick={triggerDelete}>
                    <img src={CloseBtn} alt="close button" />
                </i>
                <h1 className="card-temp">{currTemp}&deg;C</h1>
            </div>
        </div>
    );
}

export default WeatherCard;
