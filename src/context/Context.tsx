import React, { useState } from "react";

interface IdefaultState {
  cities: string;
  input: string;
}

const defaultState = {
  cities: "",
  input: "",
};

const Context = React.createContext(defaultState);

function ContextProvider({ children }): JSX.Element {
  const [input, setInput] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [unmount, setUnmount] = useState(false);

  const [cities, setCities] = useState([
    "London",
    "Bucharest",
    "Chișinău",
    "Atlanta",
  ]);

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        cities,
        setCities,
        hasSearched,
        setHasSearched,
        unmount,
        setUnmount,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
