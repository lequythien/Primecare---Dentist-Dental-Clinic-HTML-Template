import React from "react";
import Icon from "../assets/images/icon-sub-heading.svg";
import Icon1 from "../assets/images/icon-service-1.svg";
import Icon2 from "../assets/images/icon-service-2.svg";
import Icon3 from "../assets/images/icon-service-3.svg";
import Icon4 from "../assets/images/icon-service-4.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const OurServices = () => {
  return (
    <div className="bg-[#f9fcff] px-4 lg:px-0">
      <div className=" max-w-7xl mx-auto">
        <div className="w-full py-20">
          {/* Header Section */}
          <div
            className="container mx-auto text-center text-[#1e84b5] font-medium text-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-center space-x-3">
              <img src={Icon} alt="" />
              <p className="font-semibold">Our Services</p>
            </div>
          </div>

          <h1
            className="text-center font-bold text-3xl md:text-4xl my-4 text-[#0e384c]"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Explore the solutions we provide
          </h1>

          <div className="max-w-7xl mx-auto">
            <p
              className="w-full md:w-3/4 lg:w-1/2 mx-auto font-medium text-center text-[#547483]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              The goal of our clinic is to provide friendly, caring dentistry
              and the highest level of general, cosmetic, and specialist dental
              treatments. With dental practices throughout the world.
            </p>
          </div>

          {/* Services Grid */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {/* Service Card */}
            {[Icon1, Icon2, Icon3, Icon4].map((icon, index) => (
              <div
                key={index}
                className="bg-white py-6 px-6 rounded-3xl border hover:bg-[#0e384c] hover:text-white transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={`${400 + index * 100}`}
              >
                <img
                  src={icon}
                  alt={`Service ${index + 1}`}
                  className="bg-[#1e84b5] py-3 px-3 my-6 rounded-xl"
                />
                <h1 className="font-semibold text-xl pb-2">
                  {
                    [
                      "Dental Care",
                      "Cosmetic Dentistry",
                      "Dental Implants",
                      "Teeth Whitening",
                    ][index]
                  }
                </h1>
                <p className="service-card-p text-[#567585] font-medium pb-8 group-hover:text-white">
                  We are excited to meet you and provide the best dental care.
                </p>
                <hr />
                <div className="text-center">
                  <a
                    href="#"
                    className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 flex items-center mt-4 transition duration-300 group-hover:text-white"
                  >
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
