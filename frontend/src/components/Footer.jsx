import React from "react";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#0e384c] text-white">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="flex flex-col py-14 lg:flex-row justify-between items-center text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Your Healthier Smile Awaits - Book Now!
          </h1>
          <button className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group">
            <span className="relative z-10 flex items-center">
              Book Appointment
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </span>
            <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
          </button>
        </div>

        <hr className="pb-12 border-gray-500" />

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2">
            <img src={Logo} alt="Logo" className="w-56 mb-6" />
            <p className="font-normal text-base mr-8">
              The goal of our clinic is to provide friendly, caring dentistry
              and the highest level of general, cosmetic, and specialist dental
              treatments.
            </p>
            <div className="flex mt-4 space-x-4">
              <i className="fa-brands fa-facebook-f text-2xl hover:text-[#1e84b5]"></i>
              <i className="fa-brands fa-x-twitter text-2xl hover:text-[#1e84b5]"></i>
              <i className="fa-brands fa-linkedin-in text-2xl hover:text-[#1e84b5]"></i>
              <i className="fa-brands fa-instagram text-2xl hover:text-[#1e84b5]"></i>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-4">Quick Links</h1>
            <ul className="space-y-2">
              <li className="hover:text-[#1e84b5]">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[#1e84b5]">
                <a href="">About Us</a>
              </li>
              <li className="hover:text-[#1e84b5]">
                <a href="">Our Services</a>
              </li>
              <li className="hover:text-[#1e84b5]">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-4">Services</h1>
            <ul className="space-y-2">
              <li className="hover:text-[#1e84b5]">
                <a href="">Dental Care</a>
              </li>
              <li className="hover:text-[#1e84b5]">
                <a href="">Cosmetic Dentistry</a>
              </li>
              <li className="hover:text-[#1e84b5]">
                <a href="">Dental Implants</a>
              </li>
              <li className="hover:text-[#1e84b5]">
                <a href="">Teeth Whitening</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-4">Contact Info</h1>
            <ul className="space-y-5">
              <li>
                <i className="fa-solid fa-phone mr-2"></i>+1 809 120 6705
              </li>
              <li>
                <i className="fa-solid fa-envelope mr-2"></i>info@domain.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot mr-2"></i>843, Apple Lane, Peoria
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-500" />

        {/* Copyright */}
        <div className="flex my-6 justify-center">
          <p className="font-medium text-base">© Primecare 2024 All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
