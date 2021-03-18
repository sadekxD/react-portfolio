import React from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const ScrollTop = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="scroll-top"
			onClick={() => scroll.scrollToTop()}
		>
			{children}
		</motion.div>
	);
};

export default ScrollTop;
