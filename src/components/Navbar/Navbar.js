import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleNav from "./ToggleNav";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const handleNavToggle = () => {
		setToggle(!toggle);
	};
	return (
		<nav>
			<div className="nav-container">
				<h2 className="nav-logo">
					Hi<span>Sadek</span>
				</h2>
				<div className="nav-open" onClick={handleNavToggle}>
					<AiOutlineMenu />
				</div>
			</div>
			<ToggleNav onClick={handleNavToggle} toggle={toggle} />
		</nav>
	);
};

export default Navbar;
