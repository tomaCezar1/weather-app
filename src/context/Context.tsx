import React, { useState } from 'react';

interface IContext {
    homeCities: string[];
    input: string;
}

const defaultState: IContext = {
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
        'Chișinău',
        'Amsterdam',
        'Seattle',
        'Bogota',
        'Cluj-Napoca'
    ]);

    const [numberOfHomeCards, setNumberOfHomeCards] = useState(9);
    const [showToast, setShowToast] = useState(false);
    const [unmountToast, setUnmountToast] = useState(false);

    return (
        <Context.Provider
            value={{
                homeCities,
                setHomeCities,
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
