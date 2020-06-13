import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "./Header.css";

export default function Header() {
	const [isNavVisible, setNavVisibility] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const toggleNav = () => setNavVisibility(!isNavVisible);

	const handleMediaQueryChange = (mediaQuery) => {
		console.log(mediaQuery);
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 700px)');
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	return (
		<header className="Header">
			<img src={logo} alt="logo" className="Logo" />
			{(!isSmallScreen || isNavVisible) && (
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
