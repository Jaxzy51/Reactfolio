import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./pathfinder.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Pathfinders</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">11/2023 - 08/2024</div>
						</div>

						<div className="work">
							<img
								src="./freelance.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
