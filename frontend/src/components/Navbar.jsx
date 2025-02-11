import React from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => (
  <div className="bg-[#0e384c] text-white py-6 flex justify-center">
    <div className="container mx-auto flex items-center justify-between px-36">
      <img src={Logo} alt="Logo" className="h-12 w-auto" />

      <ul className="flex space-x-6 font-bold">
        <li className="relative group hover:text-[#1e84b5]">
          <a href="">
            Home
            <i className="fa-solid fa-chevron-down ml-2"></i>
            <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl">
              <li className="px-4 py-2 hover:text-black">Home</li>
              <li className="px-4 py-2 hover:text-black">Home - Image</li>
              <li className="px-4 py-2 hover:text-black">Home - Video</li>
              <li className="px-4 py-2 hover:text-black">Home - Slider</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="" className="hover:text-[#1e84b5]">
            About Us
          </a>
        </li>
        <li>
          <a href="" className="hover:text-[#1e84b5]">
            Services
          </a>
        </li>
        <li className="relative group hover:text-[#1e84b5]">
          <a href="">
            Pages
            <i className="fa-solid fa-chevron-down ml-2"></i>
            <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl">
              <li className="px-4 py-2 hover:text-black">Service Details</li>
              <li className="px-4 py-2 hover:text-black">Blog</li>
              <li className="px-4 py-2 hover:text-black">Blog Details</li>
              <li className="px-4 py-2 hover:text-black">Doctor</li>
              <li className="px-4 py-2 hover:text-black">Doctor Details</li>
              <li className="px-4 py-2 hover:text-black">Gallery</li>
              <li className="px-4 py-2 hover:text-black">Testimonials</li>
              <li className="px-4 py-2 hover:text-black">FAQ's</li>
              <li className="px-4 py-2 hover:text-black">404</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="" className="hover:text-[#1e84b5]">
            Contact Us
          </a>
        </li>
      </ul>

      <button className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group">
        <span className="relative z-10 flex items-center">
          Book Appointment
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </span>

        {/* Hiệu ứng hover chạy từ giữa ra 2 bên */}
        <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
      </button>
    </div>
  </div>
);

export default Navbar;
