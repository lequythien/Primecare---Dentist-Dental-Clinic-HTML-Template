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
    <div className="bg-[#0e384c] text-white py-24 px-32 flex justify-center items-center">
      <div className="w-2/4 pr-12">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          {animateText(
            "Exceptional dental care for every stage of your journey",
            "fade-up"
          )}
        </h1>

        <p className="text-lg mb-6" data-aos="fade-up">
          We are committed to providing top-notch dental care in a comfortable
          and friendly environment.
        </p>

        <button
          className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group"
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

        <div className="flex space-x-6 mt-8 font-semibold">
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

      {/* Image section */}
      <div className="w-1/2 grid grid-cols-3">
        <div
          className="flex flex-col space-y-4"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img src={Img_Header1} alt="" className="w-44 h-96 rounded-3xl" />
          <img src={Img_Header2} alt="" className="w-44 h-40 rounded-3xl" />
        </div>

        <div
          className="flex flex-col space-y-4"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <img src={Img_Header3} alt="" className="w-44 h-40 rounded-3xl" />
          <img src={Img_Header4} alt="" className="w-44 h-96 rounded-3xl" />
        </div>

        <div
          className="flex items-center"
          data-aos="fade-right"
          data-aos-delay="900"
        >
          <img src={Img_Header5} alt="" className="w-44 h-96 rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
