import React, { useState } from "react";

const defaultState = {
  cities: "",
  input: "",
};

const Context = React.createContext(defaultState);

function ContextProvider({ children }): JSX.Element {
  const [input, setInput] = useState(null);

  const [cities, setCities] = useState([
    "London",
    "Bucharest",
    "Chișinău",
    "Atlanta",
  ]);

  return (
    <Context.Provider value={{ input, setInput, cities, setCities }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
