import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
	return (
		<section id="project">
			<div className="project-wrap">
				<h2 className="project-header">Projects</h2>
				<div className="project-group">
					{[1, 2, 3].map((item) => (
						<ProjectItem key={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
