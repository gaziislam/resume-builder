import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <div className="mt-5 p-4" style={{ border: "2px solid white" }}>
      <Slider {...settings}>
        <div>
          <img
            className="w-50"
            src="./assets/images/resume-format1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-50"
            src="./assets/images/resume-format2.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-50"
            src="./assets/images/resume-format3.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-50"
            src="./assets/images/resume-format4.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
