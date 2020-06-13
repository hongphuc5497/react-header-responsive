import React from 'react';
import logo from "../logo.svg";
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="logo" className="Logo"/>
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="/">Articles</a>
        <a href="/">About</a>

        {/* eslint-disable-next-line jsx-a11y/accessible-emoji  */}
        <button className="Burger">
          🍔
        </button>
      </nav>
    </header>
  )
}