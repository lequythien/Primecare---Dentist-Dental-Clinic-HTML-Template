import React from "react";
import Icon1 from "../assets/images/icon-service-1.svg";
import Icon2 from "../assets/images/icon-service-2.svg";
import Icon3 from "../assets/images/icon-service-3.svg";
import Icon4 from "../assets/images/icon-service-4.svg";

const OurServices = () => {
  return (
    <div className="bg-[#f9fcff] py-20 px-20">
      <div
        className="container mx-auto text-center text-[#1e84b5] font-medium text-base"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <i className="fa-solid fa-tooth mr-2"></i>
        Our Services
      </div>

      <h1
        className="text-center font-bold text-4xl my-4"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        Explore the solutions we provide
      </h1>
      <p
        className="w-1/2 mx-auto font-medium text-center text-[#567585]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        The goal of our clinic is to provide friendly, caring dentistry and the
        highest level of general, cosmetic, and specialist dental treatments.
        With dental practices throughout the world.
      </p>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4">
        <div
          className="bg-white py-6 px-6 mx-4 rounded-3xl shadow-md hover:bg-[#0e384c] hover:text-white transition duration-300 group"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={Icon1}
            alt="Dental Care"
            className="bg-[#1e84b5] py-3 px-3 my-6 rounded-xl"
          />
          <h1 className="font-semibold text-xl pb-2">Dental Care</h1>
          <p className="text-[#567585] font-medium leading-7 pb-8">
            We are excited to meet you and provide the best dental care.
          </p>
          <hr />
          <div className="text-center">
            <a
              href="#"
              className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 flex items-center mt-4 transition duration-300 group-hover:text-white"
            >
              Learn More
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        <div
          className="bg-white py-6 px-6 mx-4 rounded-3xl shadow-md hover:bg-[#0e384c] hover:text-white transition duration-300 group"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={Icon2}
            alt="Cosmetic Dentistry"
            className="bg-[#1e84b5] py-3 px-3 my-6 rounded-xl"
          />
          <h1 className="font-semibold text-xl pb-2">Cosmetic Dentistry</h1>
          <p className="text-[#567585] font-medium leading-7 pb-8">
            We are excited to meet you and provide the best dental care.
          </p>
          <hr />
          <div className="text-center">
            <a
              href="#"
              className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 flex items-center mt-4 transition duration-300 group-hover:text-white"
            >
              Learn More
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        <div
          className="bg-white py-6 px-6 mx-4 rounded-3xl shadow-md hover:bg-[#0e384c] hover:text-white transition duration-300 group"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img
            src={Icon3}
            alt="Dental Implants"
            className="bg-[#1e84b5] py-3 px-3 my-6 rounded-xl"
          />
          <h1 className="font-semibold text-xl pb-2">Dental Implants</h1>
          <p className="text-[#567585] font-medium leading-7 pb-8">
            We are excited to meet you and provide the best dental care.
          </p>
          <hr />
          <div className="text-center">
            <a
              href="#"
              className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 flex items-center mt-4 transition duration-300 group-hover:text-white"
            >
              Learn More
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        <div
          className="bg-white py-6 px-6 mx-4 rounded-3xl shadow-md hover:bg-[#0e384c] hover:text-white transition duration-300 group"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img
            src={Icon4}
            alt="Teeth Whitening"
            className="bg-[#1e84b5] py-3 px-3 my-6 rounded-xl"
          />
          <h1 className="font-semibold text-xl pb-2">Teeth Whitening</h1>
          <p className="text-[#567585] font-medium leading-7 pb-8">
            We are excited to meet you and provide the best dental care.
          </p>
          <hr />
          <div className="text-center">
            <a
              href="#"
              className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 flex items-center mt-4 transition duration-300 group-hover:text-white"
            >
              Learn More
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
