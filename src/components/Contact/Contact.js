import React from "react";
import { ReactComponent as Message } from "./Message.svg";
import { ReactComponent as Arrow } from "./Arrow.svg";

const Contact = () => {
	return (
		<section id="contact">
			<h2 className="contact-header">Write me</h2>
			<span>
				<Message />
			</span>
			<div className="form-wrapper">
				<form className="contact-form">
					<input
						type="text"
						name="username"
						placeholder="Your name"
						className="form-control"
					/>
					<input
						type="text"
						name="submject"
						placeholder="Subject"
						className="form-control"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email"
						className="form-control"
					/>
					<textarea
						name="message"
						id="message"
						className="form-control"
						cols="30"
						rows="6"
						placeholder="Your message"
					></textarea>
					<div className="btn-send">
						Send message <Arrow />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
