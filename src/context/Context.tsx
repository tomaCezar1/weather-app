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
    const [input, setInput] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const homeCities = [
        'London',
        'Bucharest',
        'Atlanta',
        'Montevideo',
        'Chișinău',
        'Amsterdam',
        'Seattle',
        'Frankfurt',
        'Cluj-Napoca'
    ];

    return (
        <Context.Provider
            value={{
                input,
                setInput,
                homeCities,
                hasSearched,
                setHasSearched
            }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
