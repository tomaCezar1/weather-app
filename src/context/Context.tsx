import React, { useState } from 'react';

const defaultState = {
    homeCities: [],
    input: ''
};

const Context = React.createContext(defaultState);

function ContextProvider({ children }): JSX.Element {
    const [homeCities, setHomeCities] = useState([
        'London',
        'Bucharest',
        'Atlanta',
        'Montevideo',
        'Chisinau',
        'Amsterdam',
        'Seattle',
        'Bogota',
        'Cluj-Napoca'
    ]);

    const [numberOfHomeCards, setNumberOfHomeCards] = useState(9);
    const [showToast, setShowToast] = useState(false);
    const [unmountToast, setUnmountToast] = useState(false);

    const baseCities = [
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

    return (
        <Context.Provider
            value={{
                homeCities,
                setHomeCities,
                baseCities,
                numberOfHomeCards,
                setNumberOfHomeCards,
                showToast,
                setShowToast,
                unmountToast,
                setUnmountToast
            }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
