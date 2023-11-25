import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Front-end web development",
    description:
      "Develope Front-end using HTML, CSS, Javascript, React, MaterialUI, Tailwind CSS, SASS.",
  },
  {
    id: 2,
    image: Image1,
    title: "Backend Api development",
    description:
      "Develope Backend Api using NodeJS, ExpressJs, MongoDb, Firebase, SQL.",
  },

  {
    id: 3,
    image: Image3,
    title: "Mobile app development",
    description:
      "Develope Mobile app Using Java, Dart, Flutter.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
