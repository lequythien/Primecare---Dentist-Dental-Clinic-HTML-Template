import React from "react";

const ContactUsSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div
          className="text-center text-[#1e84b5] font-medium text-base mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fa-solid fa-tooth mr-2"></i>
          Contact Us
        </div>
        <h1
          className="text-center text-4xl font-bold text-[#333] mb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Get in touch with us
        </h1>
        <p
          className="w-1/2 mx-auto font-medium text-center text-[#537383] leading-7 mb-7"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments. With dental practices throughout the world.
        </p>

        <div className="flex justify-center mx-32 space-x-6">
          <div
            className="rounded-lg p-4 border flex items-center space-x-4 flex-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <i className="fa-solid fa-phone text-white bg-[#1e84b5] text-xl py-2 px-3 rounded-lg"></i>
            <div>
              <h1 className="font-semibold text-xl text-[#333]">
                Contact Details
              </h1>
              <span className="text-[#597887] font-medium">
                +01-787-582-568
              </span>
            </div>
          </div>

          <div
            className="rounded-lg p-4 border flex items-center space-x-4 flex-1"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <i className="fa-solid fa-location-dot text-white bg-[#1e84b5] text-xl py-2 px-4 rounded-lg"></i>
            <div>
              <h1 className="font-semibold text-xl text-[#333]">Address</h1>
              <span className="text-[#597887] font-medium">
                403, Port Washington Road, Canada
              </span>
            </div>
          </div>

          <div
            className="rounded-lg p-4 border flex items-center space-x-4 flex-1"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <i className="fa-solid fa-envelope-open-text text-white bg-[#1e84b5] text-xl py-2 px-3 rounded-lg"></i>
            <div>
              <h1 className="font-semibold text-xl text-[#333]">Email Us</h1>
              <span className="text-[#597887] font-medium">
                info@domain.com
              </span>
            </div>
          </div>
        </div>

        {/* GG Map */}
        <div className="mx-32 h-screen flex justify-center items-center my-14">
          <div className="google-map-iframe w-full h-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
