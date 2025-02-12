import React from "react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:flex md:justify-center my-10 mx-3 gap-6 md:space-x-10">
      {/* Phone Section */}
      <div
        className="flex items-center space-x-4 md:text-left"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <i className="fa-solid fa-phone text-white bg-[#1e84b5] text-xl py-3 px-4 rounded-lg"></i>
        <div>
          <h1 className="font-semibold text-lg md:text-xl">Need Dental Services?</h1>
          <span className="text-[#597887] font-medium block">Call on : (+01) 987 828 745</span>
        </div>
      </div>

      {/* Opening Hours */}
      <div
        className="flex items-center space-x-4 border-t-2 md:border-t-0 md:border-l-2 border-[#eef1f2] pt-4 md:pt-0 md:pl-6 md:text-left"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <i className="fa-regular fa-clock text-white bg-[#1e84b5] text-xl py-3 px-4 rounded-lg"></i>
        <div>
          <h1 className="font-semibold text-lg md:text-xl">Opening Hours</h1>
          <span className="text-[#597887] font-medium block">
            Mon to Sat 9:00AM to 9:00PM
          </span>
        </div>
      </div>

      {/* Email Section */}
      <div
        className="flex items-center space-x-4 border-t-2 md:border-t-0 md:border-l-2 border-[#eef1f2] pt-4 md:pt-0 md:pl-6 md:text-left"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <i className="fa-solid fa-envelope-open-text text-white bg-[#1e84b5] text-xl py-3 px-4 rounded-lg"></i>
        <div>
          <h1 className="font-semibold text-lg md:text-xl">Schedule Appointment</h1>
          <span className="text-[#597887] font-medium block">
            Mail us : appointment@domain.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
