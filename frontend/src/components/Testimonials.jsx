import React from "react";
import Img1 from "../assets/images/author-1.jpg";
import Img2 from "../assets/images/author-2.jpg";
import Img3 from "../assets/images/author-3.jpg";
import Icon from "../assets/images/icon-quote.svg";
import Slider from "react-slick";

const sliderSettings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  appendDots: (dots) => (
    <div
      style={{ position: "absolute", bottom: "-50px", left: 0, width: "100%" }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
        }}
      >
        {dots}
      </ul>
    </div>
  ),
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

const Testimonials = () => {
  return (
    <div className="w-full my-20 px-2 lg:px-0">
      <div className="text-center mb-12">
        <div
          className="text-[#1e84b5] font-medium text-sm lg:text-base"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fa-solid fa-tooth mr-2"></i>
          Testimonials
        </div>
        <h1
          className="text-2xl lg:text-4xl font-bold text-[#333] my-5"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Listen from our happy patients
        </h1>
        <p
          className="w-2/2 lg:w-1/2 mx-auto font-medium text-[#537383] leading-7"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments. With dental practices throughout the world.
        </p>
      </div>

      <div className="mx-auto" style={{ maxWidth: '1200px' }} data-aos="fade-up" data-aos-delay="300">
        <div>
          <Slider {...sliderSettings}>
            {/* Testimonial 1 */}
            <div className="bg-[#f9fcff] p-10 rounded-3xl border">
              <div className="flex mb-4">
                <img src={Icon} alt="Quote Icon" className="h-auto w-auto" />
              </div>
              <p className="mb-4 text-base font-normal text-[#527282]">
                I want to say thank you to my doctor Steve! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.” “Thank you for
                helping me overcome my fear of the dentist! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.
              </p>
              <div className="flex py-4">
                <img
                  src={Img1}
                  alt="Jane Cooper"
                  className="object-cover rounded-xl mr-4"
                />
                <div>
                  <h1 className="font-semibold text-xl">Jane Cooper</h1>
                  <p className="text-[#537383]">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#f9fcff] p-10 rounded-3xl border">
              <div className="flex mb-4">
                <img src={Icon} alt="Quote Icon" />
              </div>
              <p className="mb-4 text-base font-normal text-[#527282]">
                I want to say thank you to my doctor Steve! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.” “Thank you for
                helping me overcome my fear of the dentist! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.
              </p>
              <div className="flex py-4">
                <img
                  src={Img2}
                  alt="Artemisia Udinese"
                  className="object-cover rounded-xl mr-4"
                />
                <div>
                  <h1 className="font-semibold text-xl">Artemisia Udinese</h1>
                  <p className="text-[#537383]">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#f9fcff] p-10 rounded-3xl border">
              <div className="flex mb-4">
                <img src={Icon} alt="Quote Icon" />
              </div>
              <p className="mb-4 text-base font-normal text-[#527282]">
                I want to say thank you to my doctor Steve! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.” “Thank you for
                helping me overcome my fear of the dentist! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.
              </p>
              <div className="flex py-4">
                <img
                  src={Img3}
                  alt="Jenny Wilson"
                  className="object-cover rounded-xl mr-4"
                />
                <div>
                  <h1 className="font-semibold text-xl">Jenny Wilson</h1>
                  <p className="text-[#537383]">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#f9fcff] p-10 rounded-3xl border">
              <div className="flex mb-4">
                <img src={Icon} alt="Quote Icon" />
              </div>
              <p className="mb-4 text-base font-normal text-[#527282]">
                I want to say thank you to my doctor Steve! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.” “Thank you for
                helping me overcome my fear of the dentist! Vivamus sagittis
                massa vitae bibendum rhoncus. Duis cursus.
              </p>
              <div className="flex py-4">
                <img
                  src={Img2}
                  alt="Dianne Russell"
                  className="object-cover rounded-xl mr-4"
                />
                <div>
                  <h1 className="font-semibold text-xl">Dianne Russell</h1>
                  <p className="text-[#537383]">Patient</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
