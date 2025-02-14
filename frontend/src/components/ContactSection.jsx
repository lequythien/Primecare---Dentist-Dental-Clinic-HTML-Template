import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="cta-contact-box w-full max-w-6xl my-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:justify-center my-10 mx-4">
          {/* Phone Section */}
          <div
            className="flex items-center space-x-4 md:text-left pr-6 lg:pr-10 lg:border-r-2 border-[#eef1f2]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i className="fa-solid fa-phone text-white bg-[#1e84b5] hover:bg-[#0e384c] text-xl py-3 px-4 rounded-lg"></i>
            <div>
              <h1 className="text-[#0e384c] font-semibold text-lg md:text-xl">Need Dental Services?</h1>
              <span className="text-[#527282] font-medium block">Call on : (+01) 987 828 745</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div
            className="flex items-center space-x-4 md:text-left pr-6 lg:pr-10 lg:border-r-2 border-[#eef1f2]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <i className="fa-regular fa-clock text-white bg-[#1e84b5] hover:bg-[#0e384c] text-xl py-3 px-4 rounded-lg"></i>
            <div>
              <h1 className="text-[#0e384c] font-semibold text-lg md:text-xl">Opening Hours</h1>
              <span className="text-[#527282] font-medium block">Mon to Sat 9:00AM to 9:00PM</span>
            </div>
          </div>

          {/* Email Section */}
          <div
            className="flex items-center space-x-4 md:text-left pr-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <i className="fa-solid fa-envelope-open-text text-white bg-[#1e84b5] hover:bg-[#0e384c] text-xl py-3 px-4 rounded-lg"></i>
            <div>
              <h1 className="text-[#0e384c] font-semibold text-lg md:text-xl">Schedule Appointment</h1>
              <span className="text-[#527282] font-medium block">Mail us : appointment@domain.com</span>
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