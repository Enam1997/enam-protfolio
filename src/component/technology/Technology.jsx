import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";




import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import "./technology.css"
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

const Technology = () => {
    SwiperCore.use([Pagination, Autoplay]);
  
  const data = [
    {
      id: 1,
      image: Logo1,
    },
    {
      id: 2,
      image: Logo2,
    },

    {
      id: 3,
      image: Logo3,
    },

    {
      id: 4,
      image: Logo4,
    },
    {
      id: 5,
      image: Logo5,
    },

    {
      id: 6,
      image: Logo6,
    },

    {
      id: 7,
      image: Logo7,
    },
    {
      id: 8,
      image: Logo8,
    },
    {
      id: 9,
      image: Logo9,
    },
    {
      id: 10,
      image: Logo10,
    },
    {
      id: 11,
      image: Logo11,
    },
    {
      id: 12,
      image: Logo12,
    },
  ];
  return (
    <div className="technology__slider">
      <Swiper
        className="technology__container"
        // modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        // grabCursor={true}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={800}
      >
        {data.map(({ id, image }) => {
          return (
            <SwiperSlide className="technology__item" key={id}>
              <div className="tech__logo">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Technology;
