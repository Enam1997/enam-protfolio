import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScroolDown from "./ScroolDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={Me} alt="" className="home_img" /> */}
        <img
          src="https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/311237106_2000302893473216_628315855693432983_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h44IwGqRYsEAX_VhdpP&_nc_ht=scontent.fdac147-1.fna&oh=00_AfA0cRyP0NANE_QKMn24B2ffJVj6N8QlQoY93tzpxqotZQ&oe=6411D125"
          alt=""
          className="home__img"
        />
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
