import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import LogoImage from "/src/assets/images/logo.png"; 

function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="lg:hidden flex flex-col items-center justify-center bg-customBlue3 text-white py-2 font-inter px-4">
        <span className="text-center mb-1">
          Meet us at the Expo Center Karachi
        </span>
        <span className="text-sm">2:00 PM, 10th Sep</span>
      </div>

      <div className="lg:hidden flex justify-between items-center bg-white border-b border-gray-300 py-4 px-4">
        <div className="flex justify-center items-center w-full">
          <img src={LogoImage} alt="logo" className="w-32" /> 
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-customBlue1 text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-center bg-white border-t border-gray-300 py-4 w-full max-w-[350px] mx-auto">
          <ul className="flex flex-col space-y-4 text-customGrey4 text-md font-poppins">
            <li className="text-center">Home</li>
            <li className="text-center">Brands</li>
            <li className="text-center">Portfolio</li>
            <li className="text-center">About Us</li>
            <li className="text-center">Careers</li>
            <li className="text-center">
              <button className="bg-customBlue3 text-white px-4 py-2 rounded-full font-bold font-poppins hover:bg-customBlue2 transition duration-300 ease-in-out">
                Partner with us
              </button>
            </li>
          </ul>

          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="#"
              className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      )}

      <div className="hidden lg:flex justify-between items-center bg-white border-b border-gray-300 py-4 px-4">
        <div className="flex items-center">
          <img src={LogoImage} alt="logo" className="w-32" /> 
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-customBlue1">
            Home
          </a>
          <a href="#" className="text-customBlue1">
            Brands
          </a>
          <a href="#" className="text-customBlue1">
            Portfolio
          </a>
          <a href="#" className="text-customBlue1">
            About Us
          </a>
          <a href="#" className="text-customBlue1">
            Careers
          </a>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
