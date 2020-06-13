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

        <button>Logout</button>
      </nav>
    </header>
  )
}