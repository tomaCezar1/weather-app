import React, { useContext, useRef, useEffect, useState } from 'react';
import { Context } from '../context/Context';

import WeatherCard from './WeatherCard';
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
            <div className="home-container">
                <div className="cards-container" ref={divRef}>
                    {homeCities.map((city, index) => {
                        return <WeatherCard key={index} cityID={city} />;
                    })}
                </div>
                {showToast ? (
                    <div className={`toast ${unmountToast ? 'delete-toast' : ''}`}>
                        You need to delete a card before adding a new one...
                        <img
                            className="toast-btn"
                            src={CloseBtn}
                            onClick={triggerDelete}
                            alt="close button"
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
}
export default Home;
