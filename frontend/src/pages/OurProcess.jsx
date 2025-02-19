import React from "react";
import Icon from "../assets/images/icon-sub-heading.svg";
import Icon1 from "../assets/images/icon-process-1.svg";
import Icon2 from "../assets/images/icon-process-2.svg";
import Icon3 from "../assets/images/icon-process-3.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const OurProcess = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="container mx-auto font-medium text-lg py-32 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div
              className="flex items-center text-[#1e84b5] font-medium text-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center space-x-3">
                <img src={Icon} alt="" />
                <p className="font-semibold">Our Process</p>
              </div>
            </div>
            <h1
              className="text-3xl lg:text-4xl font-bold text-[#0e384c]"
              data-aos="zoom-in-right"
              data-aos-delay="200"
            >
              A Step by Step Guide to Our Dental Care Process
            </h1>
            <p
              className="text-[#567585] font-normal"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              The goal of our clinic is to provide friendly, caring dentistry
              and the highest level of general, cosmetic, and specialist dental
              treatments. With dental practices throughout the world.
            </p>

            <button
              className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-7 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </span>

              <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
            </button>
          </div>

          <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 relative">
              <figure className="img-list relative group">
                <img
                  src={Icon1}
                  alt=""
                  className="h-auto w-auto border px-6 py-6 rounded-3xl transition-all duration-300 group-hover:bg-[#0e384c]"
                />
                <p className="absolute -top-2 -right-2 font-semibold text-sm text-white bg-[#1e84b5] py-1 px-3 rounded-full transition duration-300">
                  1
                </p>
              </figure>
              <div>
                <h1 className="font-semibold text-xl sm:text-2xl text-[#0e384c]">
                  Initial Consultation
                </h1>
                <p className="text-[#567585] text-sm sm:text-base">
                  Your journey begins with an in-depth consultation. We'll
                  listen to your concerns, discuss your goals.
                </p>
              </div>
              <div className="absolute -bottom-12 -translate-y-1/2 left-7 h-1/3 w-px bg-gray-300"></div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 relative">
              <figure className="img-list relative group">
                <img
                  src={Icon2}
                  alt=""
                  className="h-auto w-auto border px-6 py-6 rounded-3xl transition-all duration-300 group-hover:bg-[#0e384c]"
                />
                <p className="absolute -top-2 -right-2 font-semibold text-sm text-white bg-[#1e84b5] py-1 px-3 rounded-full transition duration-300">
                  2
                </p>
              </figure>
              <div>
                <h1 className="font-semibold text-xl sm:text-2xl text-[#0e384c]">
                  Treatment By Experts
                </h1>
                <p className="text-[#567585] text-sm sm:text-base">
                  Once the plan is finalized, we'll proceed with your treatment.
                  Our expert team will guide you.
                </p>
              </div>
              <div className="absolute -bottom-12 -translate-y-1/2 left-7 h-1/3 w-px bg-gray-300"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 relative">
              <figure className="img-list relative group">
                <img
                  src={Icon3}
                  alt=""
                  className="h-auto w-auto border px-6 py-6 rounded-3xl transition-all duration-300 group-hover:bg-[#0e384c]"
                />
                <p className="absolute -top-2 -right-2 font-semibold text-sm text-white bg-[#1e84b5] py-1 px-3 rounded-full transition duration-300">
                  3
                </p>
              </figure>
              <div>
                <h1 className="font-semibold text-xl sm:text-2xl text-[#0e384c]">
                  Follow-Up Care
                </h1>
                <p className="text-[#567585] text-sm sm:text-base">
                  After your treatment, we'll schedule any necessary follow-up
                  appointments to monitor your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
