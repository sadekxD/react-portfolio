import React, { useEffect } from "react";
import Typist from "react-typist";

const HeroItem = () => {
	useEffect(() => {}, []);
	return (
		<div className="hero-item">
			<Typist>
				<h2 className="header">Hi, I am Irfan.</h2>
			</Typist>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			</p>
		</div>
	);
};

export default HeroItem;
