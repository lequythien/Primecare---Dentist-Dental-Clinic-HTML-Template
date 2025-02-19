import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#0e384c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Footer Content */}
          <div className="flex flex-col py-14 lg:flex-row justify-between items-start lg:text-left">
            <h1 className="footer-h1 font-bold">
              Your Healthier Smile Awaits - Book Now!
            </h1>
            <button className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold mt-6 lg:mt-0 px-6 py-3 rounded-xl flex transition duration-300 ease-in-out group">
              <span className="relative z-10 flex items-center">
                Book Appointment
                <FaArrowRight className="ml-2" />
              </span>
              <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
            </button>
          </div>

          <hr className="pb-12 border-gray-500" />

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <img src={Logo} alt="Logo" className="w-56 mb-6 lg:mx-0" />
              <p className="font-normal text-base mr-8 lg:text-left">
                The goal of our clinic is to provide friendly, caring dentistry
                and the highest level of general, cosmetic, and specialist
                dental treatments.
              </p>
              <div className="flex mt-4 lg:justify-start space-x-8">
                <a href="" className="text-xl hover:text-[#1e84b5]">
                  <FaFacebookF />
                </a>
                <a href="" className="text-xl hover:text-[#1e84b5]">
                  <FaXTwitter />
                </a>
                <a href="" className="text-xl hover:text-[#1e84b5]">
                  <FaLinkedinIn />
                </a>
                <a href="" className="text-xl hover:text-[#1e84b5]">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-xl mb-4">Quick Links</h1>
              <ul className="space-y-4 lg:text-left">
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
              <ul className="space-y-4 lg:text-left">
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
              <ul className="space-y-8 lg:text-left">
                <li>
                  <FaPhone className="inline mr-2" />
                  +1 809 120 6705
                </li>
                <li>
                  <FaEnvelope className="inline mr-2" />
                  info@domain.com
                </li>
                <li>
                  <FaLocationDot className="inline mr-2" />
                  843, Apple Lane, Peoria
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-8 border-gray-500" />

          {/* Copyright */}
          <div className="flex my-6 justify-center">
            <p className="font-medium text-base">
              © Primecare 2024 All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
