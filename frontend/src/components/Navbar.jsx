import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    isHomeMenuOpen: false,
    isPagesMenuOpen: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  // Kiểm tra kích thước màn hình
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
    <header className="main-navbar top-0 left-0 w-full z-50">
      <div className="bg-[#0e384c] text-[#FFFFFF] py-7 px-6 md:px-36">
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
                <i className="fa-solid fa-chevron-down ml-2"></i>
                <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300">
                  <li className="px-4 py-2 hover:text-black">Home</li>
                  <li className="px-4 py-2 hover:text-black">Home - Image</li>
                  <li className="px-4 py-2 hover:text-black">Home - Video</li>
                  <li className="px-4 py-2 hover:text-black">Home - Slider</li>
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
                <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300">
                  <li className="px-4 py-2 hover:text-black">
                    Service Details
                  </li>
                  <li className="px-4 py-2 hover:text-black">Blog</li>
                  <li className="px-4 py-2 hover:text-black">Blog Details</li>
                  <li className="px-4 py-2 hover:text-black">Doctor</li>
                  <li className="px-4 py-2 hover:text-black">Doctor Details</li>
                  <li className="px-4 py-2 hover:text-black">Gallery</li>
                  <li className="px-4 py-2 hover:text-black">Testimonials</li>
                  <li className="px-4 py-2 hover:text-black">FAQ's</li>
                  <li className="px-4 py-2 hover:text-black">404</li>
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
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
              <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
            </button>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white rounded-lg w-10 h-10 bg-[#1e84b5]"
            >
              <i
                className={`fa-solid ${
                  menuState.isMenuOpen ? "fa-xmark" : "fa-bars"
                } text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            menuState.isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } bg-[#1e84b5] transition-all duration-300 mt-2 absolute top-20 left-0 w-full`}
        >
          <ul className="flex flex-col space-y-4 py-4 font-bold">
            <li className="relative w-full">
              <details className="w-full">
                <summary
                  className="cursor-pointer text-white hover:text-[#0e384c] w-full px-6 flex justify-between items-center"
                  onClick={() => toggleSubMenu("isHomeMenuOpen")}
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
                  <i
                    className={`fa-solid ${
                      menuState.isPagesMenuOpen
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
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