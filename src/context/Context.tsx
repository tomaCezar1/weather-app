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

    return (
        <Context.Provider
            value={{
                homeCities,
                setHomeCities
            }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
