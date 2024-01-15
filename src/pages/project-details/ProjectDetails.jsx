import React from "react";
import "./projectDetails.css";
import ProjectImageSlider from "./ProjectImageSlider";
import Logo1 from "../../assets/tecnologyIcon/react.svg";
import Logo2 from "../../assets/tecnologyIcon/html.svg";
import Logo3 from "../../assets/tecnologyIcon/css.svg";
import Logo4 from "../../assets/tecnologyIcon/javascript.svg";
import Logo5 from "../../assets/tecnologyIcon/firebase.svg";
import Logo6 from "../../assets/tecnologyIcon/bootstrap.svg";
import Logo7 from "../../assets/tecnologyIcon/tailwind.svg";
import Logo8 from "../../assets/tecnologyIcon/webflow.svg";
import Logo9 from "../../assets/tecnologyIcon/java.svg";
import Logo10 from "../../assets/tecnologyIcon/mongodb.svg";
import Logo11 from "../../assets/tecnologyIcon/mysql.svg";
import Logo12 from "../../assets/tecnologyIcon/nodejs.svg";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <>
      <div className="package container">
        <div className="top">
          <h1 className="title">Project Name Here</h1>
          <div className="button-container">
            <Link to={"/"} className="top__button">
              <i className="fa fa-git work__button-icon"></i>
            </Link>
            <Link to={"/"} className="top__button">
              <i className="icon-link work__button-icon"></i>
            </Link>
          </div>
        </div>
        <ProjectImageSlider />
        <div className="package-section ">
          <h3>Technology use</h3>
          <div className="technology-used">
            <img src={Logo1} alt="" className="tech-image" />
            <img src={Logo2} alt="" className="tech-image" />
            <img src={Logo3} alt="" className="tech-image" />
            <img src={Logo4} alt="" className="tech-image" />
            <img src={Logo5} alt="" className="tech-image" />
            <img src={Logo6} alt="" className="tech-image" />
            <img src={Logo7} alt="" className="tech-image" />
            <img src={Logo8} alt="" className="tech-image" />
            <img src={Logo9} alt="" className="tech-image" />
            <img src={Logo10} alt="" className="tech-image" />
            <img src={Logo11} alt="" className="tech-image" />
            <img src={Logo12} alt="" className="tech-image" />
          </div>
        </div>
        <div className="package-section">
          <h3>Project Details</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            doloremque eum ullam esse at nobis quibusdam eius sint iusto magni
            voluptates tenetur a mollitia facere, cupiditate minima, pariatur
            excepturi animi! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Mollitia, enim modi. Ipsum soluta nostrum quidem, reiciendis
            vitae eaque beatae modi autem, culpa dolores harum voluptate unde
            natus omnis. Error, enim. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Fugit distinctio in repudiandae facere blanditiis
            hic expedita inventore eaque? Fuga doloribus eligendi quasi
            explicabo enim, placeat laudantium consectetur iusto nisi fugit?
          </p>
        </div>

        <div className="package-section">
          <h3>Functionalites</h3>
          <ul>
            <li>Uset can register</li>
            <li>Uset can register</li>
            <li>Uset can register</li>
            <li>Uset can register</li>
            <li>Uset can register</li>
            <li>Uset can register</li>
            <li>Uset can register</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
