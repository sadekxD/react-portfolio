import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer-container">
			{new Date().getFullYear()} <FaCopyright /> <span>Irfan.</span> All rights
			reserved.
		</div>
	);
};

export default Footer;
