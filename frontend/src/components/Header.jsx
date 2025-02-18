import React, { useEffect } from "react";
import Img_Header1 from "../assets/images/hero-image-1.jpg";
import Img_Header2 from "../assets/images/hero-image-2.jpg";
import Img_Header3 from "../assets/images/hero-image-3.jpg";
import Img_Header4 from "../assets/images/hero-image-4.jpg";
import Img_Header5 from "../assets/images/hero-image-5.jpg";
import Icon1 from "../assets/images/icon-hero-footer-1.svg";
import Icon2 from "../assets/images/icon-hero-footer-2.svg";
import Icon3 from "../assets/images/icon-hero-footer-3.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const text = "Exceptional dental care for every stage of your journey";
  const words = text.split(" ");

  return (
    <div className="bg-[#0e384c] px-4 lg:px-0">
      <div className="main-hero-header max-w-7xl mx-auto text-[#FFFFFF] flex flex-col lg:flex-row justify-center items-center">
        <div className="container flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
          {/* Text Section */}
          <div className="lg:w-2/3 w-full lg:text-left">
            <h1 className="text-h1-header leading-tight flex flex-wrap">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <p
              className="text-p-header flex items-center justify-center lg:justify-start"
              data-aos="fade-up"
            >
              We are committed to providing top-notch dental care in a
              comfortable and friendly environment.
            </p>

            <button
              className="btn-header relative overflow-hidden bg-[#1E84B5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="relative z-10 flex items-center">
                Book Appointment
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </span>
              <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
            </button>

            {/* Horizontal Line */}
            <hr className="border-[#2b5062] w-full my-10" />

            <div className="flex justify-center lg:justify-start mt-8 space-x-6 text-base font-medium">
              <div
                className="flex items-center space-x-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src={Icon1}
                  alt=""
                  className="text-xl sm:text-2xl bg-[#2b5062] p-2 sm:p-3 rounded-xl hover:bg-[#1e84b5] hidden md:block"
                />
                <span>Experience Doctor</span>
              </div>
              <div
                className="flex items-center space-x-2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src={Icon2}
                  alt=""
                  className="text-xl sm:text-2xl bg-[#2b5062] p-2 sm:p-3 rounded-xl hover:bg-[#1e84b5] hidden md:block"
                />
                <span>Personalized Care</span>
              </div>
              <div
                className="flex items-center space-x-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  src={Icon3}
                  alt=""
                  className="text-xl sm:text-2xl bg-[#2b5062] p-2 sm:p-3 rounded-xl hover:bg-[#1e84b5] hidden md:block"
                />
                <span>Flexible Payment Option</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4 lg:gap-6 mt-10 lg:mt-0 max-w-lg">
            <div
              className="col-span-1 flex flex-col space-y-4 lg:space-y-6"
              data-aos="fade-right"
            >
              <div className="relative group">
                <img
                  src={Img_Header1}
                  alt="Dental 1"
                  className="w-full h-[22rem] object-cover rounded-3xl lg:h-[22rem]"
                />
                <div className="absolute inset-0 bg-[#1e84b5] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50 rounded-3xl"></div>
              </div>
              <div className="relative group">
                <img
                  src={Img_Header2}
                  alt="Dental 2"
                  className="w-full h-32 object-cover rounded-3xl lg:h-40"
                />
                <div className="absolute inset-0 bg-[#1e84b5] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50 rounded-3xl"></div>
              </div>
            </div>
            <div
              className="col-span-1 flex flex-col space-y-4 lg:space-y-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="relative group">
                <img
                  src={Img_Header3}
                  alt="Dental 3"
                  className="w-full h-32 object-cover rounded-3xl lg:h-40"
                />
                <div className="absolute inset-0 bg-[#1e84b5] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50 rounded-3xl"></div>
              </div>
              <div className="relative group">
                <img
                  src={Img_Header4}
                  alt="Dental 4"
                  className="w-full h-[22rem] object-cover rounded-3xl lg:h-[22rem]"
                />
                <div className="absolute inset-0 bg-[#1e84b5] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50 rounded-3xl"></div>
              </div>
            </div>
            <div
              className="col-span-1 flex items-center justify-center"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="relative group">
                <img
                  src={Img_Header5}
                  alt="Dental 5"
                  className="w-full h-[22rem] object-cover rounded-3xl lg:h-[22rem]"
                />
                <div className="absolute inset-0 bg-[#1e84b5] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
