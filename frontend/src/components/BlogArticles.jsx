import React from "react";
import Img1 from "../assets/images/post-1.jpg";
import Img2 from "../assets/images/post-2.jpg";
import Img3 from "../assets/images/post-3.jpg";
import Img4 from "../assets/images/post-4.jpg";

const BlogArticles = () => {
  return (
    <div className="bg-[#f9fcff] py-12">
      <div
        className="text-center text-[#1e84b5] font-medium text-base mb-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <i className="fa-solid fa-tooth mr-2"></i>
        Blog & Articles
      </div>
      <h1
        className="text-center text-4xl font-bold text-[#333] mb-4"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Our latest dental tips and news
      </h1>
      <p
        className="w-1/2 mx-auto font-medium text-center text-[#537383] leading-7 mb-7"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        The goal of our clinic is to provide friendly, caring dentistry and the
        highest level of general, cosmetic, and specialist dental treatments.
        With dental practices throughout the world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-screen-xl px-6">
        <div
          className="bg-white border rounded-3xl py-4 px-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="bg-white overflow-hidden flex">
            <div className="w-1/2 overflow-hidden">
              <img
                src={Img1}
                alt=""
                className="w-full h-full object-cover rounded-3xl transition-all duration-500 transform hover:scale-110"
              />
            </div>
            <div className="w-1/2 p-6">
              <h1 className="font-semibold text-xl">
                The Importance of Regular Dental Check-Ups
              </h1>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
              <hr className="my-4" />
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-500 group-hover:text-white"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white border rounded-3xl py-4 px-6"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          <div className="bg-white overflow-hidden flex">
            <div className="w-1/2 overflow-hidden">
              <img
                src={Img2}
                alt=""
                className="w-full h-full object-cover rounded-3xl transition-all duration-500 transform hover:scale-110"
              />
            </div>
            <div className="w-1/2 p-6">
              <h1 className="font-semibold text-xl">
                How Often Should You Really Visit the Dentist?
              </h1>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
              <hr className="my-4" />
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-500 group-hover:text-white"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white border rounded-3xl py-4 px-6"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          <div className="bg-white overflow-hidden flex">
            <div className="w-1/2 overflow-hidden">
              <img
                src={Img3}
                alt=""
                className="w-full h-full object-cover rounded-3xl transition-all duration-500 transform hover:scale-110"
              />
            </div>
            <div className="w-1/2 p-6">
              <h1 className="font-semibold text-xl">
                The Benefits of Professional Teeth Whitening
              </h1>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
              <hr className="my-4" />
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-300 group-hover:text-white"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white border rounded-3xl py-4 px-6"
          data-aos="fade-up"
          data-aos-delay="950"
        >
          <div className="bg-white overflow-hidden flex">
            <div className="w-1/2 overflow-hidden">
              <img
                src={Img4}
                alt=""
                className="w-full h-full object-cover rounded-3xl transition-all duration-500 transform hover:scale-110"
              />
            </div>
            <div className="w-1/2 p-6">
              <h1 className="font-semibold text-xl">
                The Importance of Regular Dental Checkups for Kids
              </h1>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
              <hr className="my-4" />
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#1e84b5] font-medium hover:scale-105 hover:translate-x-2 hover:text-[#0e384c] flex items-center mt-4 transition duration-300 group-hover:text-white"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
