import React from "react";
import IconHeading from "../assets/images/icon-sub-heading.svg";
import IconPhone from "../assets/images/icon-phone.svg";
import IconAddress from "../assets/images/icon-location.svg";
import IconMail from "../assets/images/icon-mail.svg";

const ContactUsSection = () => {
  return (
    <div className="py-10 lg:py-16 px-4">
      <div className="w-full mx-auto px-4 lg:px-0">
        <div
          className="text-center text-[#1e84b5] font-medium text-sm mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center justify-center space-x-3">
            <img src={IconHeading} alt="" />
            <span className="font-semibold">Contact Us</span>
          </div>
        </div>
        <h1
          className="text-center text-3xl lg:text-4xl font-bold text-[#0e384c] mb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Get in touch with us
        </h1>
        <p
          className="w-full sm:w-1/2 mx-auto font-medium text-center text-[#537383] leading-7 mb-7"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments. With dental practices throughout the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-screen-xl px-4">
          <div
            className="rounded-3xl p-4 border flex items-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src={IconPhone}
              alt=""
              className="bg-[#1e84b5] hover:bg-[#0e384c] text-xl py-3 px-3 rounded-lg"
            />
            <div>
              <h1 className="font-semibold text-xl text-[#0e384c]">
                Contact Details
              </h1>
              <span className="text-[#597887] font-medium">
                +01-787-582-568
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl p-4 border flex items-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              src={IconAddress}
              alt=""
              className="bg-[#1e84b5] hover:bg-[#0e384c] text-xl py-3 px-3 rounded-lg"
            />
            <div>
              <h1 className="font-semibold text-xl text-[#0e384c]">Address</h1>
              <span className="text-[#597887] font-medium">
                403, Port Washington Road, Canada
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl p-4 border flex items-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img
              src={IconMail}
              alt=""
              className="bg-[#1e84b5] hover:bg-[#0e384c] text-xl py-3 px-3 rounded-lg"
            />
            <div>
              <h1 className="font-semibold text-xl text-[#0e384c]">Email Us</h1>
              <span className="text-[#597887] font-medium">
                info@domain.com
              </span>
            </div>
          </div>
        </div>

        {/* GG Map */}
        <div className="my-14 mx-4 md:mx-32">
          <div className="google-map-iframe max-w-7xl mx-auto h-96 sm:h-80 md:h-[500px] rounded-lg overflow-hidden">
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
