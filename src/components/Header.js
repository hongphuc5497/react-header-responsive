import React, { useState } from "react";
import logo from "../logo.svg";
import "./Header.css";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const toggleNav = () => setIsNavVisible(!isNavVisible);

	return (
		<header className="Header">
			<img src={logo} alt="logo" className="Logo" />
			{isNavVisible && (
				<nav className="Nav">
					<a href="/">Home</a>
					<a href="/">Articles</a>
					<a href="/">About</a>
					<button>Logout</button>
				</nav>
			)}
			{/* eslint-disable-next-line jsx-a11y/accessible-emoji  */}
			<button className="Burger" onClick={toggleNav}>
				🍔
			</button>
		</header>
	);
}
