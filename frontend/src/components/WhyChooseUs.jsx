import React from "react";
import Img from "../assets/images/hero-image-2.jpg";
import Icon1 from "../assets/images/icon-why-choose-1.svg";
import Icon2 from "../assets/images/icon-why-choose-2.svg";
import Icon3 from "../assets/images/icon-why-choose-3.svg";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-[#f9fcff] text-white">
      <div className="flex justify-center items-center max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {/* Left section with image and icons */}
          <div className="relative order-2 lg:order-1">
            <img
              src={Img}
              alt="Hero"
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#819698ee] p-6 rounded-3xl w-full lg:h-2/3 lg:w-3/4 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-6 px-6 max-w-md w-full">
                <div
                  className="flex items-center justify-center w-full"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    src={Icon1}
                    alt="Personalized Care"
                    className="w-16 h-16 mr-4 bg-[#9aabade7] py-3 px-4 rounded-2xl hover:bg-[#0e384c]"
                  />
                  <div>
                    <h1 className="font-semibold text-xl text-white">
                      Personalized Care For Patient
                    </h1>
                    <p className="text-base">
                      We understand that each patient is unique, and listen to
                      concerns.
                    </p>
                  </div>
                </div>

                <hr
                  className="border-gray-400 w-full"
                  data-aos="fade-up"
                  data-aos-delay="300"
                />

                <div
                  className="flex items-center justify-center w-full"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <img
                    src={Icon2}
                    alt="Cutting Edge Technology"
                    className="w-16 h-16 mr-4 bg-[#9aabade7] py-3 px-4 rounded-2xl hover:bg-[#0e384c]"
                  />
                  <div>
                    <h1 className="font-semibold text-xl text-white">
                      Cutting Edge Technology
                    </h1>
                    <p className="text-base">
                      We invest in the latest dental technology to give you.
                    </p>
                  </div>
                </div>

                <hr
                  className="border-gray-400 w-full"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />

                <div
                  className="flex items-center justify-center w-full"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <img
                    src={Icon3}
                    alt="Family Friendly"
                    className="w-16 h-16 mr-4 bg-[#9aabade7] py-3 px-4 rounded-2xl hover:bg-[#0e384c]"
                  />
                  <div>
                    <h1 className="font-semibold text-xl text-white">
                      Family Friendly
                    </h1>
                    <p className="text-base">
                      No matter your age or dental needs, we are here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right section with text content */}
          <div className="text-left lg:text-left flex flex-col justify-center order-1 lg:order-2">
            <div
              className="flex items-center space-x-3 text-[#1e84b5] mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fa-solid fa-tooth text-xl"></i>
              <h2 className="text-base font-semibold">Why Choose Us</h2>
            </div>
            <h1
              className="text-2xl lg:text-4xl font-bold my-4 leading-tight text-black"
              data-aos="zoom-in-right"
              data-aos-delay="300"
            >
              Exceptional dental care tailored to your needs
            </h1>
            <p
              className="text-[#0e384c] font-bold lg:font-semibold mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We take the time to understand your individual needs and goals,
              creating customized treatment plans to help you achieve optimal
              oral health.
            </p>
            <div className="flex items-center">
              <div className="mr-6" data-aos="fade-up" data-aos-delay="550">
                <p className="text-gray-600 leading-relaxed">
                  We believe that your dental experience should be more than
                  just a routine visit. Our goal is to provide comprehensive,
                  personalized care in a welcoming environment, where your
                  comfort and well-being come first.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              <div className="flex flex-col items-start space-y-2 lg:border-r lg:border-gray-400 last:border-none">
                <p className="text-sm font-semibold text-gray-500 lg:mb-4">
                  01
                </p>
                <span className="text-3xl lg:text-4xl font-bold text-[#0e384c]">
                <CountUp start={0} end={20} duration={3.5} separator="," />+
                </span>
                <p className="text-[#0e384c] font-bold text-lg lg:text-xl">
                  Years Of Experience
                </p>
              </div>

              <div className="flex flex-col items-start space-y-2 lg:border-r lg:border-gray-400 last:border-none">
                <p className="text-sm font-semibold text-gray-500 lg:mb-4">
                  02
                </p>
                <span className="text-3xl lg:text-4xl font-bold text-[#0e384c]">
                <CountUp start={0} end={5} duration={2.5} separator="," />+
                </span>
                <p className="text-[#0e384c] font-bold text-lg lg:text-xl">
                  Happy Patients
                </p>
              </div>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-sm font-semibold text-gray-500 lg:mb-4">
                  03
                </p>
                <span className="text-3xl lg:text-4xl font-bold text-[#0e384c]">
                  <CountUp start={0} end={986} duration={2.5} separator="," />+
                </span>
                <p className="text-[#0e384c] font-bold text-lg lg:text-xl">
                  Treatment Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
