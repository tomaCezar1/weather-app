import React, { useContext } from "react";
import { Context } from "../context/Context";

function NavBar() {
  const { input, setInput } = useContext(Context);

  const inputHandler = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  return (
    <>
      <nav className="navbar">
        <input
          type="text"
          onChange={e => inputHandler(e)}
          className="navbar-input"
          placeholder="Weather in your city"
        />
      </nav>
    </>
  );
}

export default NavBar;
