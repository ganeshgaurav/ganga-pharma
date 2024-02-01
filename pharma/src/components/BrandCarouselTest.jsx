import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QualityCheck from "../assets/qc.png";
import Uasl from "../assets/uasl.jpeg";
import Certified from "../assets/certified.webp";
import IsoStamp from "../assets/isoStamp.png";
import Qcc from "../assets/qcc.jpg";

const brandLogos = [
  QualityCheck,
  Uasl,
  Certified,
  IsoStamp,
  Qcc,
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
              <a className="font-poppins text-3xl md:text-4xl font-semibold px-4 md:px-8 text-clarusBlue" href="contact">			
                Contact Us
              </a>
            </div>
            <div className="flex justify-center items-center md:w-2/3">
              <p className="font-poppins text-sm text-black md:text-lg text-center md:text-left">
                We are available to contact between 10AM to 6Pm.
                Please reach us on Whatsapp or Gmail if you are trying to reach us outside business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCarousel;
