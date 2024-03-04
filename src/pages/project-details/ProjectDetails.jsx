import React, { useEffect, useState } from "react";
import "./projectDetails.css";
import ProjectImageSlider from "./ProjectImageSlider";
import { Link, useParams } from "react-router-dom";
import allProjects from "../../const-data/allProjects";
import allTechIcons from "../../const-data/techIcons";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    const details = allProjects[projectId - 1];
    setProjectData(details);
  }, [projectId]);

  return (
    <>
      <div className="package container">
        <div className="top">
          <h1 className="title">{projectData?.title}</h1>
          <div className="button-container">
            {projectData?.gitRepo && (
              <Link
                to={projectData.gitRepo}
                className="top__button"
                target="_blank"
              >
                <i className="fa fa-git work__button-icon"></i>
              </Link>
            )}
            {projectData?.liveLink && (
              <Link to={projectData.liveLink} className="top__button">
                <i className="icon-link work__button-icon"></i>
              </Link>
            )}
          </div>
        </div>
        <ProjectImageSlider />
        <div className="package-section ">
          <h3>Technology use</h3>
          <div className="technology-used">
            {/* <img src={allTechIcons.firebase} alt="" className="tech-image" /> */}
            {projectData.technologys?.map((data) => (
              <img
                key={data}
                src={allTechIcons[data]}
                alt=""
                className="tech-image"
              />
            ))}
          </div>
        </div>
        <div className="package-section">
          <h3>Project Details</h3>
          <p>{projectData?.description}</p>
        </div>
        <div className="package-section">
          <h3>Functionalites</h3>
          <ul>
            {projectData.projectFetures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
