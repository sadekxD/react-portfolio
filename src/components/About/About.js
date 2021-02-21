import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const About = () => {
	const ref = useRef();
	const [offsetTop, setOffsetTop] = useState(0);
	const { scrollY } = useViewportScroll();

	const y = useTransform(scrollY, [0, offsetTop - 100], [100, -0]);

	useLayoutEffect(() => {
		if (!ref.current) return null;
		setOffsetTop(ref.current.offsetTop);
	}, [ref]);

	return (
		<section id="about">
			<motion.div ref={ref} className="about-img" style={{ y: y }}>
				<img
					src="https://miro.medium.com/max/6300/1*Z7boPZktSNmP5P8uqDzqBQ.jpeg"
					alt="code"
				/>
			</motion.div>
			<motion.div className="about-info">
				<h1 className="info-text-bold">ABOUT</h1>
				<h3 className="info-text">
					We are three enterpeneurs from diverse background who have come
					together to bring about a change in the way you think about business
					and about the resourses that you rely on.
				</h3>

				<div className="social">
					<h3 className="social-text">Join me on my platforms</h3>
					<ul className="social-group">
						<li className="social-item">
							<a href="#" className="social-link">
								<AiOutlineTwitter />
							</a>
						</li>
						<li className="social-item">
							<a href="#" className="social-link">
								<AiFillLinkedin />
							</a>
						</li>
						<li className="social-item">
							<a href="#" className="social-link">
								<AiFillGithub />
							</a>
						</li>
						<li className="social-item">
							<a href="#" className="social-link">
								<FaFacebookF />
							</a>
						</li>
					</ul>
				</div>

				<div className="contact-group">
					<h5 className="contact-text">Contact me here!</h5>
					<p>
						Email: <a href="#">sadek@gmail.com</a>
					</p>
					<p>
						Phone: <a href="#">+8801878520101</a>
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
