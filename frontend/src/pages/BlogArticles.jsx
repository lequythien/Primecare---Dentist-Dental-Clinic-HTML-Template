import React from "react";
import IconHeading from "../assets/images/icon-sub-heading.svg";
import Img1 from "../assets/images/post-1.jpg";
import Img2 from "../assets/images/post-2.jpg";
import Img3 from "../assets/images/post-3.jpg";
import Img4 from "../assets/images/post-4.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const BlogArticles = () => {
  return (
    <div>
      <div className="bg-[#f9fcff] py-32 px-4 lg:px-0">
        <div
          className="text-center text-[#1e84b5] font-medium text-sm lg:text-sm mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center justify-center space-x-3">
            <img src={IconHeading} alt="" />
            <p className="font-semibold">Blog & Articles</p>
          </div>
        </div>
        <h1
          className="text-center text-2xl lg:text-4xl font-bold text-[#0e384c] mx-4 mb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Our latest dental tips and news
        </h1>

        <div className="max-w-7xl mx-auto">
          <p
            className="w-full sm:w-2/3 mx-auto px-4 font-medium text-center text-[#537383] leading-7 mb-7"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            The goal of our clinic is to provide friendly, caring dentistry and
            the highest level of general, cosmetic, and specialist dental
            treatments. With dental practices throughout the world.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-screen-xl">
            <div
              className="bg-white border rounded-3xl py-2 lg:py-4 px-2 lg:px-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
                  <img
                    src={Img1}
                    alt="Post 1"
                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110 hover:rounded-3xl"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6">
                  <h1 className="blog-h1 font-semibold text-[#0e384c]">
                    The Importance of Regular Dental Check-Ups
                  </h1>
                  <p className="blog-p text-[#527282]">
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                  <hr className="my-4" />
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-[#1e84b5] font-semibold hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-500 group-hover:text-white"
                    >
                      Read More
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white border rounded-3xl py-2 lg:py-4 px-2 lg:px-4"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
                  <img
                    src={Img2}
                    alt="Post 2"
                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110 hover:rounded-3xl"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6">
                  <h1 className="blog-h1 font-semibold text-[#0e384c]">
                    How Often Should You Really Visit the Dentist?
                  </h1>
                  <p className="blog-p text-[#527282]">
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                  <hr className="my-4" />
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-[#1e84b5] font-semibold hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-500 group-hover:text-white"
                    >
                      Read More
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white border rounded-3xl py-2 lg:py-4 px-2 lg:px-4"
              data-aos="fade-up"
              data-aos-delay="850"
            >
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
                  <img
                    src={Img3}
                    alt="Post 3"
                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110 hover:rounded-3xl"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6">
                  <h1 className="blog-h1 font-semibold text-[#0e384c]">
                    The Benefits of Professional Teeth Whitening
                  </h1>
                  <p className="blog-p text-[#527282]">
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                  <hr className="my-4" />
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-[#1e84b5] font-semibold hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-300 group-hover:text-white"
                    >
                      Read More
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white border rounded-3xl py-2 lg:py-4 px-2 lg:px-4"
              data-aos="fade-up"
              data-aos-delay="950"
            >
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
                  <img
                    src={Img4}
                    alt="Post 4"
                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110 hover:rounded-3xl"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6">
                  <h1 className="blog-h1 font-semibold text-[#0e384c]">
                    The Importance of Regular Dental Checkups for Kids
                  </h1>
                  <p className="blog-p text-[#527282]">
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                  <hr className="my-4" />
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-[#1e84b5] font-semibold hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-300 group-hover:text-white"
                    >
                      Read More
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
