import React from "react";
import ImgAboutSection from "../assets/images/about-us-image.jpg";
import CountUp from "react-countup";

const AboutSection = () => {
  return (
    <div className="my-20 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-10 lg:space-y-0 px-6">
      {/* Image Section */}
      <div
        className="relative lg:w-auto"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <img
          src={ImgAboutSection}
          alt="About Us"
          className="rounded-3xl w-full max-w-lg h-auto shadow-lg mx-auto"
        />

        <div className="absolute bottom-10 left-5 lg:left-10 bg-[#ffffff86] shadow-md p-6 rounded-3xl px-7 flex items-center space-x-3">
          <div>
            <i className="fa-regular fa-thumbs-up text-white border rounded-xl text-base px-3 py-2 hover:bg-[#0e384c]"></i>
            <p className="text-white py-1 text-2xl font-bold">
              <CountUp start={0} end={875} duration={2.5} separator="," />+
            </p>
            <p className="text-white font-medium">Happy Patients</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-xl lg:text-left ">
        <div
          className="flex items-center justify-center lg:justify-start space-x-3 text-[#1e84b5]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fa-solid fa-tooth text-xl"></i>
          <h2 className="text-base font-semibold">About Us</h2>
        </div>

        <h1
          className="text-3xl lg:text-4xl font-bold my-4 text-[#0E384C]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          The evolution of our company and the people who made it possible
        </h1>

        <p
          className="text-[#587786] mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments with dental practice throughout the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <ul
            className="space-y-3 text-[#0e384c] font-bold text-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <li>
              <i className="fa-regular fa-circle-check mr-2 text-[#1e84b5]"></i>{" "}
              Experienced Team
            </li>
            <li>
              <i className="fa-regular fa-circle-check mr-2 text-[#1e84b5]"></i>{" "}
              Emergency Dental Services
            </li>
            <li>
              <i className="fa-regular fa-circle-check mr-2 text-[#1e84b5]"></i>{" "}
              State-of-the-Art Technology
            </li>
            <li>
              <i className="fa-regular fa-circle-check mr-2 text-[#1e84b5]"></i>{" "}
              Comprehensive Services
            </li>
          </ul>

          <div
            className="flex items-center justify-start lg:justify-end bg-[#0e384c] p-8 rounded-3xl w-max ml-0 lg:ml-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <i className="fa-solid fa-user-nurse text-[#1e84b5] bg-white text-xl border rounded-xl px-3 py-2 hover:bg-[#1e84b5] hover:text-white"></i>
              <p className="text-white text-4xl font-bold my-2">
                <CountUp start={0} end={25} duration={2.5} separator="," />+
              </p>

              <p className="text-white">Years of Experience</p>
            </div>
          </div>
        </div>

        <button
          className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold mt-6 px-6 py-3 rounded-xl flex items-center mx-0 lg:mx-0 transition duration-300 ease-in-out group"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <span className="relative z-10 flex items-center">
            Read More
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </span>

          <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;