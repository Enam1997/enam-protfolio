import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScroolDown from "./ScroolDown";
import Shapes from "./Shapes";
import ProfilePic from "../../assets/profilePic.jpg";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={Me} alt="" className="home_img" /> */}
        <img src={ProfilePic} alt="" className="home__img" />
        <h1 className="home__name">Enam Ahmed</h1>
        <span className="home__education">I am a Full stack developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire me
        </a>

        <ScroolDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
