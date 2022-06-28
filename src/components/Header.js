import React from "react";
import "./Header.css";
import earth from "../images/Fill 213.png";

export default function Header() {
  return (
    <nav className="navbar">
      <img src={earth} className="nav--logo" />
      <h3 className="nav--title">My Travel Journal</h3>
    </nav>
  );
}
