import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/logo.svg";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, updateProfile } from "../redux/authSlice";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    isHomeMenuOpen: false,
    isPagesMenuOpen: false,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside to close menu and dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) ||
        (dropdownRef.current && !dropdownRef.current.contains(event.target))
      ) {
        setMenuState((prev) => ({ ...prev, isMenuOpen: false }));
        setIsDropdownOpen(false);
        setIsEditingAvatar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const closeMenu = () => {
    setMenuState({
      isMenuOpen: false,
      isHomeMenuOpen: false,
      isPagesMenuOpen: false,
    });
  };

  const handleLogout = (event) => {
    event.stopPropagation();
    dispatch(logout());
    setIsDropdownOpen(false);
    closeMenu();
    navigate("/");
  };

  const handleEditProfile = (event) => {
    event.stopPropagation();
    setIsEditingAvatar(true);
    fileInputRef.current.click(); // Mở file input khi click "Chỉnh sửa hồ sơ"
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedUser = { ...user, avatar: e.target.result };
        dispatch(updateUser(updatedUser));
        setIsEditingAvatar(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="main-navbar bg-[#0e384c] top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto text-[#FFFFFF] py-7 px-4 xl:px-0">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="Logo"
            className="h-auto w-auto cursor-pointer"
          />

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center ${
              isMobile ? "hidden" : "flex"
            }`}
          >
            <ul className="flex space-x-7 font-bold">
              <NavLink
                to="/"
                className="relative group hover:text-[#1e84b5] cursor-pointer"
              >
                Home
                <ChevronDownIcon className="w-4 h-4 ml-2 inline-block" />
                <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300">
                  <NavLink to="/" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Home</li>
                  </NavLink>
                  <NavLink to="/home-image" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Home - Image</li>
                  </NavLink>
                  <NavLink to="/home-video" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Home - Video</li>
                  </NavLink>
                  <NavLink to="/home-slider" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">
                      Home - Slider
                    </li>
                  </NavLink>
                </ul>
              </NavLink>

              <NavLink
                to="/about-us"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-[#1e84b5]" : "hover:text-[#1e84b5]"
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-[#1e84b5]" : "hover:text-[#1e84b5]"
                }
              >
                Services
              </NavLink>

              <li className="relative group hover:text-[#1e84b5] cursor-pointer">
                Pages
                <ChevronDownIcon className="w-4 h-4 ml-2 inline-block" />
                <ul className="absolute left-0 hidden group-hover:block text-white bg-[#1e84b5] mt-2 py-1 w-48 rounded-xl transition-all duration-300">
                  <NavLink to="/service-details" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">
                      Service Details
                    </li>
                  </NavLink>
                  <NavLink to="/blog" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Blog</li>
                  </NavLink>
                  <NavLink to="/blog-details" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Blog Details</li>
                  </NavLink>
                  <NavLink to="/doctor" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Doctor</li>
                  </NavLink>
                  <NavLink to="/doctor-details" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">
                      Doctor Details
                    </li>
                  </NavLink>
                  <NavLink to="/gallery" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Gallery</li>
                  </NavLink>
                  <NavLink to="/testimonials" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">Testimonials</li>
                  </NavLink>
                  <NavLink to="/faqs" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">FAQ's</li>
                  </NavLink>
                  <NavLink to="/404" onClick={closeMenu}>
                    <li className="px-4 py-2 hover:text-black">404</li>
                  </NavLink>
                </ul>
              </li>

              <NavLink
                to="/contact-us"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-[#1e84b5]" : "hover:text-[#1e84b5]"
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>

          {/* Account Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={user.avatar || "https://via.placeholder.com/40"}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white font-semibold">
                    {user.fullName}
                  </span>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white text-black shadow-lg ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <button
                    onClick={handleEditProfile}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Chỉnh sửa hồ sơ
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Đăng xuất
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            ) : (
              <NavLink
                to="/account"
                className="btn-navbar relative overflow-hidden bg-[#1e84b5] text-white font-semibold px-6 py-3 rounded-xl flex items-center transition duration-300 ease-in-out group"
              >
                <span className="relative z-10 flex items-center">
                  Book Appointment
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </span>
                <span className="absolute inset-0 bg-[#0e384c] border rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
              </NavLink>
            )}
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
          } bg-[#1e84b5] transition-all duration-300 mt-2 absolute top-20 left-0 w-full`}
          ref={menuRef}
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
                  <NavLink to="/" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">Home</li>
                  </NavLink>
                  <NavLink to="/home-image" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Home - Image
                    </li>
                  </NavLink>
                  <NavLink to="/home-video" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Home - Video
                    </li>
                  </NavLink>
                  <NavLink to="/home-slider" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Home - Slider
                    </li>
                  </NavLink>
                </ul>
              </details>
            </li>

            <NavLink
              to="/about-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0e384c] px-6"
                  : "text-white hover:text-[#0e384c] px-6"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0e384c] px-6"
                  : "text-white hover:text-[#0e384c] px-6"
              }
            >
              Services
            </NavLink>

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
                  <NavLink to="/service-details" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Service Details
                    </li>
                  </NavLink>
                  <NavLink to="/blog" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">Blog</li>
                  </NavLink>
                  <NavLink to="/blog-details" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Blog Details
                    </li>
                  </NavLink>
                  <NavLink to="/doctor" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Doctor
                    </li>
                  </NavLink>
                  <NavLink to="/doctor-details" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Doctor Details
                    </li>
                  </NavLink>
                  <NavLink to="/gallery" onClick={closeMenu}>
                    <li className="hover:text-[#0e384c] block w-full">
                      Gallery
                    </li>
                  </NavLink>
                </ul>
              </details>
            </li>

            <NavLink
              to="/contact-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0e384c] px-6"
                  : "text-white hover:text-[#0e384c] px-6"
              }
            >
              Contact Us
            </NavLink>

            <li>
              {isAuthenticated ? (
                <div className="flex items-center space-x-2 px-6">
                  <img
                    src={user.avatar || "https://via.placeholder.com/40"}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white font-semibold">
                    {user.fullName}
                  </span>
                  <button
                    onClick={handleEditProfile}
                    className="text-[#0e384c] ml-2"
                  >
                    Chỉnh sửa hồ sơ
                  </button>
                  <button onClick={handleLogout} className="text-[#0e384c]">
                    Đăng xuất
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              ) : (
                <NavLink
                  to="/account"
                  className="text-white hover:text-[#0e384c] px-6"
                >
                  Book Appointment
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-[#2b5062] w-full" />
    </header>
  );
};

export default Navbar;