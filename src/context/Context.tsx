import React, { useState } from 'react';

interface IContext {
    homeCities: number[];
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

    // const [cities, setCities] = useState([
    //   { city: "London", id: 2643743 },
    //   { city: "Bucharest", id: 683506 },
    //   { city: "Atlanta", id: 4180439 },
    //   { city: "Montevideo", id: 3441575 },
    //   { city: "Chișinău", id: 618426 },
    //   { city: "Amsterdam", id: 2759794 },
    //   { city: "Seattle", id: 5809844 },
    //   { city: "Frankfurt", id: 3220968 },
    //   { city: "Cluj-Napoca", id: 681290 },
    // ]);

    const [homeCities, setHomeCities] = useState([
        2643743,
        683506,
        4180439,
        3441575,
        618426,
        2759794,
        5809844,
        3220968,
        681290
    ]);

    return (
        <Context.Provider
            value={{
                input,
                setInput,
                homeCities,
                setHomeCities,
                hasSearched,
                setHasSearched
            }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
