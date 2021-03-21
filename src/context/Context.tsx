import React, { useState } from "react";

const Context = React.createContext(null);

function ContextProvider({ children }): JSX.Element {
  const [input, setInput] = useState(null);

  return (
    <Context.Provider value={{ input, setInput }}>{children}</Context.Provider>
  );
}

export { Context, ContextProvider };
