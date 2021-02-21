import React from "react";
import code from "../../images/code.PNG";
import { BsCode } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

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
				{/* <div className="project-desc">
					<p>
						We are three enterpeneurs from diverse background who have come
						together to bring about a change in the way you think about business
						and about the resourses that you rely on.
					</p>
				</div> */}
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
