import React from "react";
import { motion } from "framer-motion";
import { MdClose, MdCode } from "react-icons/md";

const ToggleNav = ({ toggle, onClick }) => {
	return (
		<motion.div
			initial={{ y: 1.2, scale: 0 }}
			animate={{ y: toggle ? 0 : 1, scale: toggle ? 1 : 0 }}
			className={`nav-bg ${toggle ? "active" : ""}`}
		>
			<div className="nav-close" onClick={onClick}>
				<MdClose />
			</div>
			<div className="nav-toggle">
				<div className="nav-img">
					<MdCode />
				</div>
				<div className="nav-control">
					<h1 className="header">Sadek Irfan</h1>
					<ul className="nav-menu">
						<li className="nav-item">
							<a href="#" className="nav-link">
								<span>01</span> Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<span>02</span>Services
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<span>03</span>Projects
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<span>04</span>Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default ToggleNav;
