import React from "react";
import ImgAboutSection from "../assets/images/about-us-image.jpg";
import IconAboutUs from "../assets/images/icon-sub-heading.svg";
import IconCheck from "../assets/images/icon-check.svg";
import IconExp from "../assets/images/icon-experience-year.svg";
import CountUp from "react-countup";
import IconLike from "../assets/images/icon-happy-patients.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="w-full text-white">
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-10 lg:space-y-0 w-full">
          {/* Image Section */}
          <div
            className="relative w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img
              src={ImgAboutSection}
              alt="About Us"
              className="rounded-3xl w-full h-auto shadow-lg mx-auto"
            />

            <div className="absolute bottom-10 left-5 lg:left-10 bg-[#ffffff86] shadow-md p-6 rounded-3xl px-7 flex items-center space-x-3">
              <div>
                <img
                  src={IconLike}
                  alt=""
                  className="text-white border rounded-xl text-base px-3 py-3 hover:bg-[#0e384c]"
                />
                <p className="text-white py-1 text-2xl font-bold">
                  <CountUp start={0} end={875} duration={2.5} separator="," />+
                </p>
                <p className="text-white font-medium">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-full lg:w-1/2 lg:text-left w-full">
            <div
              className="flex items-center justify-center lg:justify-start space-x-3 text-[#1e84b5]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={IconAboutUs} alt="" />
              <h2 className="about-h2 font-semibold">About Us</h2>
            </div>

            <h1
              className="content-h1 text-3xl font-bold my-4 text-[#0E384C]"
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
              The goal of our clinic is to provide friendly, caring dentistry
              and the highest level of general, cosmetic, and specialist dental
              treatments with dental practice throughout the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <ul
                className="space-y-3 text-[#0e384c] font-bold text-lg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <li className="flex items-center space-x-2">
                  <img src={IconCheck} alt="" />
                  <p>Experienced Team</p>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={IconCheck} alt="" />
                  <p>Emergency Dental Services</p>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={IconCheck} alt="" />
                  <p>State-of-the-Art Technology</p>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={IconCheck} alt="" />
                  <p>Comprehensive Services</p>
                </li>
              </ul>

              <div
                className="flex items-center justify-start lg:justify-end bg-[#0e384c] p-8 rounded-3xl w-max ml-0 lg:ml-auto"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div>
                  <img
                    src={IconExp}
                    alt=""
                    className="text-[#1e84b5] bg-white text-xl border rounded-xl px-3 py-3 hover:bg-[#1e84b5]"
                  />
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
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </span>

              <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
