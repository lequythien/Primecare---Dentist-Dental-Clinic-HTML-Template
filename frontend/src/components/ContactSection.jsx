import React from "react";

const ContactSection = () => {
  return (
    <div className="flex justify-center my-10 space-x-10">
      {/* Phone Section */}
      <div
        className="flex items-center space-x-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <i className="fa-solid fa-phone text-white bg-[#1e84b5] text-xl py-3 px-4 rounded-lg"></i>
        <div>
          <h1 className="font-semibold text-xl">Need Dental Services?</h1>
          <span className="text-[#597887] font-medium">
            Call on : (+01) 987 828 745
          </span>
        </div>
      </div>

      {/* Opening Hours */}
      <div
        className="flex items-center space-x-4 border-l-2 border-[#eef1f2] pl-6"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <i className="fa-regular fa-clock text-white bg-[#1e84b5] text-xl py-3 px-4 rounded-lg"></i>
        <div>
          <h1 className="font-semibold text-xl">Opening Hours</h1>
          <span className="text-[#597887] font-medium">
            Mon to Sat 9:00AM to 9:00PM
          </span>
        </div>
      </div>

      {/* Email Section */}
      <div
        className="flex items-center space-x-4 border-l-2 border-[#eef1f2] pl-6"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <i className="fa-solid fa-envelope-open-text text-white bg-[#1e84b5] text-xl py-3 px-4 rounded-lg"></i>
        <div>
          <h1 className="font-semibold text-xl">Schedule Appointment</h1>
          <span className="text-[#597887] font-medium">
            Mail us : appointment@domain.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
