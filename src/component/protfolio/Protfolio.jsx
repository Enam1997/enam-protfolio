import React from "react";
import "./protfolio.css";
import Menu from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Protfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Webapp")}>
          Web app
        </span>
        <span className="work__item" onClick={() => filterItem("Website")}>
          Website
        </span>
        <span className="work__item" onClick={() => filterItem("LandingPage")}>
          LandingPage
        </span>
        <span className="work__item" onClick={() => filterItem("LandingPage")}>
          Api
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem, index) => {
          const { id, bannerImage, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={bannerImage} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              {/* <a href="" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a> */}
              <Link to={`/projectdetails/${id}`} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Protfolio;
