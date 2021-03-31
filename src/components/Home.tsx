import React, { useContext, useRef, useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import { Context } from '../context/Context';
import CloseBtn from '../images/cancel.svg';

function Home(): JSX.Element {
    const {
        homeCities,
        setNumberOfHomeCards,
        showToast,
        setShowToast,
        unmountToast,
        setUnmountToast
    } = useContext(Context);

    const divRef = useRef(null);

    useEffect(() => {
        setNumberOfHomeCards(divRef.current.childElementCount);
    });

    const triggerDelete = () => {
        setUnmountToast(true);
        setTimeout(() => {
            setShowToast(false);
            setUnmountToast(false);
        }, 750);
    };

    return (
        <>
            <div className="cards-container" ref={divRef}>
                {homeCities.map((city, index) => {
                    return <WeatherCard key={index} cityID={city} />;
                })}
                {showToast ? (
                    <div
                        className={`toast ${unmountToast ? 'delete-toast' : ''}`}
                        onClick={triggerDelete}>
                        You need to delete a card before adding a new one...
                    </div>
                ) : null}
            </div>
        </>
    );
}
export default Home;
