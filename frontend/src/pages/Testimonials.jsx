import React from "react";
import Slider from "react-slick";
import IconHeading from "../assets/images/icon-sub-heading.svg";
import Img1 from "../assets/images/author-1.jpg";
import Img2 from "../assets/images/author-2.jpg";
import Img3 from "../assets/images/author-3.jpg";
import Icon from "../assets/images/icon-quote.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const sliderRef = React.useRef(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3">
          <img src={IconHeading} alt="" />
          <p className="text-[#1e84b5] font-semibold">Testimonials</p>
        </div>
        <h1 className="font-bold text-[#0e384c] my-5 text-3xl">
          Listen from our happy patients
        </h1>
        <p className="max-w-2xl mx-auto text-[#537383] leading-7">
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments.
        </p>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {[Img1, Img2, Img3, Img1, Img2].map((img, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#f9fcff] p-12 rounded-3xl border">
                <div>
                  <img src={Icon} alt="Quote Icon" className="h-auto w-auto" />
                </div>
                <p className="testimonials-p mb-4 font-normal text-[#527282]">
                  I want to say thank you to my doctor Steve! Vivamus sagittis
                  massa vitae bibendum rhoncus. Duis cursus.” “Thank you for
                  helping me overcome my fear of the dentist! Vivamus sagittis
                  massa vitae bibendum rhoncus. Duis cursus.
                </p>
                <div className="flex py-4">
                  <img
                    src={img}
                    alt="Patient"
                    className="object-cover rounded-xl w-12 h-12 mr-4"
                  />
                  <div>
                    <h1 className="testimonials-h1 text-[#0e384c] font-semibold">Patient Name</h1>
                    <p className="testimonials-p text-[#527282]">Patient</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-white p-3 rounded-full border border-[#1E84B5]"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaChevronLeft className="text-[#1E84B5]"/>
          </button>
          <button
            className="bg-white p-3 rounded-full border border-[#1E84B5]"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaChevronRight className="text-[#1E84B5]"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
