import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo of App" />
        NoteX
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
