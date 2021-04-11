import React, { useState } from 'react';

const defaultState = {
    homeCities: [],
    setHomeCities: [],
    baseCities: []
};

const Context = React.createContext(defaultState);

function ContextProvider({ children }): JSX.Element {
    const [homeCities, setHomeCities] = useState<string[]>([
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
