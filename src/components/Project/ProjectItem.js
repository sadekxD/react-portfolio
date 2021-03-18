import React from "react";
import { BsCode } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { motion } from "framer-motion";

const ProjectItem = () => {
	return (
		<div className="project-item-wrap">
			<div className="project-item">
				<div className="project-img">
					<img
						src="https://s27389.pcdn.co/wp-content/uploads/2017/04/AdobeStock_112185177-3-1024x683.jpeg"
						alt="image"
					/>
					<div className="img-overlay"></div>
				</div>
				<h3 className="project-title">This is dummy project</h3>
				<div className="project-control">
					<a href="#" className="btn-project">
						<AiOutlineEye /> Visit
					</a>
					<a href="#" className="btn-project">
						<BsCode /> Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
