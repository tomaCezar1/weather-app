import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/Context';
import { toastContext } from '../context/toastContext';
import WeatherCard from './WeatherCard';
import Toast from './Toast';

function Home(): JSX.Element {
    const { homeCities } = useContext(Context);

    const { showToast } = useContext(toastContext);

    const errorTextforToast: string = `You need to delete ${homeCities.length - 8} card`;
    const succesTextforToast: string = `You added a new card: ${showToast}`;

    return (
        <>
            <div className="home-container">
                <div className="cards-container">
                    {homeCities.map((city) => {
                        return <WeatherCard key={city} cityID={city} />;
                    })}
                </div>
                {showToast === 'red' ? <Toast type="red" text={errorTextforToast} /> : null}
                {showToast === 'existent' ? (
                    <Toast type="red" text="You already have this card !" />
                ) : null}
                {showToast !== 'red' && showToast !== 'existent' && showToast !== null ? (
                    <Toast type="green" text={succesTextforToast} />
                ) : null}
            </div>
        </>
    );
}
export default Home;
