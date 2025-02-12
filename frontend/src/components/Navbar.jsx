import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    isHomeMenuOpen: false,
    isPagesMenuOpen: false,
  });

  const toggleMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const toggleHomeMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isHomeMenuOpen: !prevState.isHomeMenuOpen,
    }));
  };

  const togglePagesMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isPagesMenuOpen: !prevState.isPagesMenuOpen,
    }));
  };

  return (
    <div className="bg-[#0e384c] text-white py-6 z-50 relative">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 md:px-36">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex w-auto md:w-fit">
          <ul className="flex space-x-6 font-bold">
            <li className="relative group hover:text-[#1e84b5] cursor-pointer">
              Home
              <i className="fa-solid fa-chevron-down ml-2"></i>
              {/* Dropdown for Home */}
              <ul
                className={`absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300 ease-in-out ${
                  menuState.isHomeMenuOpen ? "block" : "hidden"
                }`}
              >
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Home</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Home - Image</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Home - Video</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Home - Slider</li>
                </a>
              </ul>
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
            <li className="relative group hover:text-[#1e84b5] cursor-pointer">
              Pages
              <i className="fa-solid fa-chevron-down ml-2"></i>
              {/* Dropdown for Pages */}
              <ul
                className={`absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300 ease-in-out ${
                  menuState.isPagesMenuOpen ? "block" : "hidden"
                }`}
              >
                <li className="px-4 py-2 hover:text-black">Service Details</li>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Blog</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Blog Details</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Doctor</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Doctor Details</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Gallery</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">Testimonials</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">FAQ's</li>
                </a>
                <a href="">
                  <li className="px-4 py-2 hover:text-black">404</li>
                </a>
              </ul>
            </li>
            <li>
              <a href="" className="hover:text-[#1e84b5]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white rounded-lg py-2 px-3 bg-[#1e84b5]"
          >
            <i
              className={`fa-solid fa-bars text-xl ${
                menuState.isMenuOpen ? "fa-xmark" : ""
              }`}
            ></i>
          </button>
        </div>

        {/* Book Appointment Button on Desktop */}
        <div className="md:block hidden">
          <button className="relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group">
            <span className="relative z-10 flex items-center">
              Book Appointment
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </span>
            <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuState.isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } bg-[#1e84b5] transition-all duration-300 ease-in-out transform ${
          menuState.isMenuOpen ? "translate-y-0" : ""
        } mt-2 absolute top-20 left-0 w-full`}
      >
        <ul className="flex flex-col space-y-4 py-4 font-bold">
          <li className="relative w-full">
            <details className="w-full">
              <summary
                onClick={toggleHomeMenu}
                className="cursor-pointer text-white w-full px-6 flex justify-between items-center"
              >
                Home
                <i
                  className={`fa-solid ${
                    menuState.isHomeMenuOpen
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                ></i>
              </summary>

              {menuState.isHomeMenuOpen && (
                <ul className="mt-2 space-y-2 pl-10">
                  <li>
                    <a href="" className="block w-full">
                      Home - Image
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Home - Video
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Home - Slider
                    </a>
                  </li>
                </ul>
              )}
            </details>
          </li>
          <li>
            <a href="" className="text-white hover:text-[#1e84b5] px-6">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:text-[#1e84b5] px-6">
              Services
            </a>
          </li>
          <li className="relative w-full">
            <details className="w-full">
              <summary
                onClick={togglePagesMenu}
                className="cursor-pointer text-white w-full px-6 flex justify-between items-center"
              >
                Pages
                <i
                  className={`fa-solid ${
                    menuState.isPagesMenuOpen
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                ></i>
              </summary>

              {menuState.isPagesMenuOpen && (
                <ul className="mt-2 space-y-2 pl-10">
                  <li>
                    <a href="" className="block w-full">
                      Service Details
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Blog Details
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Doctor
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Doctor Details
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="" className="block w-full">
                      404
                    </a>
                  </li>
                </ul>
              )}
            </details>
          </li>
          <li>
            <a href="" className="text-white hover:text-[#1e84b5] px-6">
              Contact Us
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:text-[#1e84b5] px-6">
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
