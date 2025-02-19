import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    isHomeMenuOpen: false,
    isPagesMenuOpen: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const toggleSubMenu = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <header className="main-navbar bg-[#0e384c] top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto  text-[#FFFFFF] py-7 px-4 xl:px-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="Logo" className="h-auto w-auto" />
          </a>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center ${
              isMobile ? "hidden" : "flex"
            }`}
          >
            <ul className="flex space-x-7 font-bold">
              <li className="relative group hover:text-[#1e84b5] cursor-pointer">
                Home
                <ChevronDownIcon className="w-4 h-4 ml-2 inline-block" />
                <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300">
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Home</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Home - Image</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Home - Video</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Home - Slider</a>
                  </li>
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
                <ChevronDownIcon className="w-4 h-4 ml-2 inline-block" />
                {/* Dropdown for Pages */}
                <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300">
                  <li className="px-4 py-2 hover:text-black">
                    Service Details
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Blog</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Blog Details</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Doctor</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Doctor Details</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Gallery</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">Testimonials</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">FAQ's</a>
                  </li>
                  <li className="px-4 py-2 hover:text-black">
                    <a href="">404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="hover:text-[#1e84b5]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <button className="btn-navbar relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group">
              <span className="relative z-10 flex items-center">
                Book Appointment
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </span>
              <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
            </button>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white rounded-lg w-10 h-10 bg-[#1e84b5] flex items-center justify-center"
            >
              {menuState.isMenuOpen ? (
                <AiOutlineClose className="text-xl" />
              ) : (
                <AiOutlineMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            menuState.isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } bg-[#1e84b5] transition-all duration-300 mt-2 absolute top-20 left-0 w-full px-4`}
        >
          <ul className="flex flex-col space-y-4 py-4 font-bold">
            <li className="relative w-full">
              <details className="w-full">
                <summary
                  className="cursor-pointer text-white hover:text-[#0e384c] w-full px-6 flex justify-between items-center"
                  onClick={() => toggleSubMenu("isHomeMenuOpen")}
                >
                  Home
                  <span className="absolute right-6">
                    {menuState.isHomeMenuOpen ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </span>
                </summary>
                <ul
                  className={`mt-2 space-y-2 pl-10 transition-all duration-300 ${
                    menuState.isHomeMenuOpen ? "max-h-screen" : "max-h-0"
                  } overflow-hidden`}
                >
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Home - Image
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Home - Video
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Home - Slider
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a href="" className="text-white hover:text-[#0e384c] px-6">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="text-white hover:text-[#0e384c] px-6">
                Services
              </a>
            </li>
            <li className="relative w-full">
              <details className="w-full">
                <summary
                  className="cursor-pointer text-white hover:text-[#0e384c] w-full px-6 flex justify-between items-center"
                  onClick={() => toggleSubMenu("isPagesMenuOpen")}
                >
                  Pages
                  <span className="absolute right-6">
                    {menuState.isPagesMenuOpen ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </span>
                </summary>
                <ul
                  className={`mt-2 space-y-2 pl-10 transition-all duration-300 ${
                    menuState.isPagesMenuOpen ? "max-h-screen" : "max-h-0"
                  } overflow-hidden`}
                >
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Service Details
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Blog Details
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Doctor
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Doctor Details
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-[#0e384c] block w-full">
                      Gallery
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="" className="text-white hover:text-[#0e384c] px-6">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="text-white hover:text-[#0e384c] px-6">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-[#2b5062] w-full" />
    </header>
  );
};

export default Navbar;
