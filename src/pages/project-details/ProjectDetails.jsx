import React from "react";
import "./projectDetails.css";
import ProjectImageSlider from "./ProjectImageSlider";

const ProjectDetails = () => {
  return (
    <>
      <div className="package container">
        <div>
          <h1>Project Name Here</h1>
          <button>source code</button>
          <button>Live Link</button>
        </div>
        <ProjectImageSlider />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          doloremque eum ullam esse at nobis quibusdam eius sint iusto magni
          voluptates tenetur a mollitia facere, cupiditate minima, pariatur
          excepturi animi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia, enim modi. Ipsum soluta nostrum quidem, reiciendis
          vitae eaque beatae modi autem, culpa dolores harum voluptate unde
          natus omnis. Error, enim. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugit distinctio in repudiandae facere blanditiis
          hic expedita inventore eaque? Fuga doloribus eligendi quasi explicabo
          enim, placeat laudantium consectetur iusto nisi fugit?
        </p>
      </div>
    </>
  );
};

export default ProjectDetails;
