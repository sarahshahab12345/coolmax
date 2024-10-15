import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import LogoImage from "/src/assets/images/logo.png"; 

function NavigationBar() {
  return (
    <>
      <div className="flex justify-between items-center bg-customBlue3 text-white py-2 font-inter">
        <span className="flex-1 text-center ml-20">
          Meet us at the Expo Center Karachi
        </span>
        <span className="text-sm mr-4">2:00 PM, 10th Sep</span>
      </div>

      <nav className="bg-white border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="w-32">
            <img src={LogoImage} alt="logo" />
          </div>

          <ul className="flex font-bold space-x-6 text-md text-customGrey4 font-poppins items-center">
            <li>Home</li>
            <li>Brands</li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Careers</li>

            <li>
              <button className="ml-4 bg-customBlue3 text-white px-4 py-2 rounded-full font-bold font-poppins hover:bg-customBlue2 transition duration-300 ease-in-out">
                Partner with us
              </button>
            </li>
          </ul>

          <span
            className="-mx-60 text-customGrey4 text-3xl"
            style={{ height: "40px" }}
          >
            |
          </span>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-customBlue1 border-2 border-customBlue1 p-2 rounded hover:bg-customBlue1 hover:text-white transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
