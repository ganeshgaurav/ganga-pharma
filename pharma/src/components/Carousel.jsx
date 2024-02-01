import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlackBerry from "../assets/logo.jpg"
import Elekta from "../assets/logo.jpg"
import Nvidia from "../assets/logo.jpg"
import Qualcomm from "../assets/logo.jpg"
import SiliconLabs from "../assets/logo.jpg"
import Levis from "../assets/logo.jpg"
import Recipharm from "../assets/logo.jpg"
import Reliance from "../assets/logo.jpg"
import Sanisure from "../assets/logo.jpg"
import JpMorgan from "../assets/logo.jpg"

const brandLogos = [
  Elekta,
  JpMorgan,
  Nvidia,
  Qualcomm,
  BlackBerry,
  Sanisure,
  Recipharm,
];

const BrandCarousel = () => {
  const sliderRef = useRef(null);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow absolute top-1/2 -left-4 transform -translate-y-10 -translate-x-8 z-10 text-gray-500 p-2 hover:text-gray-900 "
    >
      <FiChevronLeft size={35} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="slick-arrow absolute top-1/2 -right-2 transform -translate-y-10 translate-x-8 z-10 text-gray-500 p-2 hover:text-gray-900"
    >
      <FiChevronRight size={35} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-[1240px] mx-auto relative p-12 mt-12 ">
        <div>
          <h1 className="text-3xl md:text-4xl  font-poppins text-clarusBlue flex justify-center font-semibold pb-4">
            Trusted By
          </h1>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {brandLogos.map((Brand, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Wrap the logo in a container div with fixed size */}
              <div className="w-30 h-24 md:w-48 md:h-32 lg:w-56 lg:h-40 flex items-center justify-center p-1">
                <img
                  src={Brand}
                  alt={`Brand Logo ${index + 1}`}
                  className="max-w-[70%] max-h-[70%] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="max-w-[960px] mx-auto my-8 md:my-20 px-8 md:px-0">
        <div className="bg-white rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 p-8">
            <div className="flex items-center text-center justify-center md:w-1/3">
              <h1 className="font-poppins text-3xl md:text-4xl font-semibold px-4 md:px-8 text-clarusBlue">
                Clarus Advisers
              </h1>
            </div>
            <div className="flex justify-center items-center md:w-2/3">
              <p className="font-poppins text-sm text-black md:text-lg text-center md:text-left">
                Clarus is a global leadership and talent solutions firm with
                decades of experience, extensive network and a strong focus on
                sustainable impact. We leverage our expertise to ensure we meet
                our client’s needs anywhere we conduct business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCarousel;
