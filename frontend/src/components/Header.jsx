import React, { useEffect } from "react";
import Img_Header1 from "../assets/images/hero-image-1.jpg";
import Img_Header2 from "../assets/images/hero-image-2.jpg";
import Img_Header3 from "../assets/images/hero-image-3.jpg";
import Img_Header4 from "../assets/images/hero-image-4.jpg";
import Img_Header5 from "../assets/images/hero-image-5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const animateText = (text, animationType) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        data-aos={animationType}
        data-aos-delay={`${index * 50}`}
        className=""
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="bg-[#0e384c] text-white py-16 px-6 lg:py-24 lg:px-32 flex flex-col lg:flex-row justify-center items-center">
      {/* Text Section */}
      <div className="lg:w-2/4 w-full lg:pr-12 lg:text-left">
        <h1 className="text-3xl lg:text-6xl font-bold leading-tight mb-6">
          {animateText(
            "Exceptional dental care for every stage of your journey",
            "fade-up"
          )}
        </h1>

        <p className="text-lg mb-6 text-center lg:text-left" data-aos="fade-up">
          We are committed to providing top-notch dental care in a comfortable
          and friendly environment.
        </p>

        <button
          className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex mx-auto lg:mx-0 items-center transition duration-300 ease-in-out group"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className="relative z-10 flex items-center">
            Book Appointment
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </span>

          <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
        </button>

        <hr className="mt-10" />

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mt-8 font-semibold">
          <div
            className="flex items-center space-x-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i className="fa-solid fa-user-doctor text-2xl bg-[#2b5062] py-2 px-4 rounded-xl hover:bg-[#1e84b5]"></i>
            <span>Experience Doctor</span>
          </div>
          <div
            className="flex items-center space-x-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <i className="fa-solid fa-hands-holding-child text-2xl bg-[#2b5062] py-2 px-3 rounded-xl hover:bg-[#1e84b5]"></i>
            <span>Personalized Care</span>
          </div>
          <div
            className="flex items-center space-x-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <i className="fa-solid fa-money-check-dollar text-2xl bg-[#2b5062] py-2 px-3 rounded-xl hover:bg-[#1e84b5]"></i>
            <span>Flexible Payment Option</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full grid grid-cols-3 gap-2 lg:w-1/2 lg:grid-cols-3 lg:gap-4 mt-10 lg:mt-0">
        {/* ẢnhẢnh 1 */}
        <div
          className="flex flex-col space-y-2 lg:space-y-4"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img
            src={Img_Header1}
            alt="Dental Care 1"
            className="w-full h-40 object-cover rounded-2xl lg:h-96"
          />
          <img
            src={Img_Header2}
            alt="Dental Care 2"
            className="w-full h-24 object-cover rounded-2xl lg:h-40"
          />
        </div>

        {/* Ảnh 2 */}
        <div
          className="flex flex-col space-y-2 lg:space-y-4"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <img
            src={Img_Header3}
            alt="Dental Care 3"
            className="w-full h-24 object-cover rounded-2xl lg:h-40"
          />
          <img
            src={Img_Header4}
            alt="Dental Care 4"
            className="w-full h-40 object-cover rounded-2xl lg:h-96"
          />
        </div>

        {/* ẢNh 3 */}
        <div
          className="flex flex-col justify-center space-y-2 lg:space-y-4"
          data-aos="fade-right"
          data-aos-delay="900"
        >
          <img
            src={Img_Header5}
            alt="Dental Care 5"
            className="w-full h-48 object-cover rounded-2xl lg:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
