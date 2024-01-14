import React from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./projectDetails.css";
import { useRef } from "react";

const ProjectImageSlider = () => {
  SwiperCore.use([Pagination, Autoplay]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1280154328/vector/infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs.jpg?s=612x612&w=0&k=20&c=PIYx1Ezd1syx2zZpw8ZhFnC-QpdGUqNwDdZV7ytXWjA="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?w=1380&t=st=1705238161~exp=1705238761~hmac=0f4bd8080a40da1dec9d9a7aff6641e63e191a4114ceda1070602c492234d01e"
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectImageSlider;
