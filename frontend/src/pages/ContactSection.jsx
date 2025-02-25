import React from "react";
import Icon1 from "../assets/images/icon-phone.svg";
import Icon2 from "../assets/images/icon-clock.svg";
import Icon3 from "../assets/images/icon-mail.svg";

const ContactSection = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <div className="cta-contact-box w-full max-w-7xl my-4 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-6 my-10">
          {/* Phone Section */}
          <div
            className="flex items-center space-x-4 text-left pr-0 lg:pr-10 lg:border-r-2 border-[#eef1f2]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={Icon1}
              alt="Phone Icon"
              className="flex-shrink-0 bg-[#1e84b5] hover:bg-[#0e384c] p-3 rounded-lg w-12 h-12"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-[#0e384c] font-semibold text-lg md:text-xl truncate">
                Need Dental Services?
              </h1>
              <span className="text-[#527282] font-medium block text-sm md:text-base break-words">
                Call on: (+01) 987 828 745
              </span>
            </div>
          </div>

          {/* Opening Hours */}
          <div
            className="flex items-center space-x-4 text-left pr-0 lg:pr-10 lg:border-r-2 border-[#eef1f2]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src={Icon2}
              alt="Clock Icon"
              className="flex-shrink-0 bg-[#1e84b5] hover:bg-[#0e384c] p-3 rounded-lg w-12 h-12"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-[#0e384c] font-semibold text-lg md:text-xl truncate">
                Opening Hours
              </h1>
              <span className="text-[#527282] font-medium block text-sm md:text-base break-words">
                Mon to Sat 9:00AM to 9:00PM
              </span>
            </div>
          </div>

          {/* Email Section */}
          <div
            className="flex items-center space-x-4 text-left pr-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src={Icon3}
              alt="Mail Icon"
              className="flex-shrink-0 bg-[#1e84b5] hover:bg-[#0e384c] p-3 rounded-lg w-12 h-12"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-[#0e384c] font-semibold text-lg md:text-xl truncate">
                Schedule Appointment
              </h1>
              <span className="text-[#527282] font-medium block text-sm md:text-base break-words">
                Mail us: appointment@domain.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-[#eef1f2] w-full" />
    </div>
  );
};

export default ContactSection;