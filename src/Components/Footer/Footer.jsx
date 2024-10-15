import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const FooterComponent = () => {
  return (
    <footer className="footer text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 w-full md:w-1/3">
            <img src="/images/logo.png" alt="" className="mb-4 w-28" />
            <p className="text-xs text-center md:text-left text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              sed do eiusmod tempor incididunt ut labore <br /> et dolore magna
              aliqua.
            </p>
            <div className="w-20 mt-4">
              <img src="/images/MIP.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 w-full md:w-2/3">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 w-full md:w-1/3">
              <div className="md:w-1/2">
                <h4 className="text-lg font-bold">Resources</h4>
                <ul className="space-y-4 mt-5 text-sm font-light text-gray-400">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2">
                <ul className="space-y-4 mt-12 text-sm font-light text-gray-400">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-full md:w-1/3">
              <h4 className="text-lg font-bold">Locations</h4>
              <ul className="space-y-4 mt-12 text-sm font-light text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center space-x-2"
                  >
                    <FiMapPin size={20} className="text-gray-400" />
                    <span>20555 DEVONSHIRE ST #360 Karachi</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center space-x-2"
                  >
                    <FiMapPin size={20} className="text-gray-400" />
                    <span>20555 DEVONSHIRE ST #360 Lahore</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center space-x-2"
                  >
                    <FiMapPin size={20} className="text-gray-400" />
                    <span>20555 DEVONSHIRE ST #360 Islamabad</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2 w-full md:w-1/3">
              <h4 className="text-lg font-bold">Phone Numbers</h4>
              <ul className="space-y-4 mt-12 text-sm font-light text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center space-x-2"
                  >
                    <FaPhone size={20} className="text-gray-400" />
                    <span>(123) 456-7890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center space-x-2"
                  >
                    <FaPhone size={20} className="text-gray-400" />
                    <span>(987) 654-3210</span>
                  </a>
                </li>
              </ul>
              <h4 className="text-lg font-bold">Email Address</h4>
              <ul className="space-y-4 mt-12 text-sm font-light text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center space-x-2"
                  >
                    <FaPhone size={20} className="text-gray-400" />
                    <span>(123) 456-7890</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2 w-full md:w-1/3">
              <h4 className="text-lg font-bold">Social Media</h4>
              <ul className="space-y-1 flex">
                <li className="mr-4">
                  <a href="#" className="hover:text-gray-300">
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:text-gray-300">
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:text-gray-300">
                    <FaInstagram size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-6">
          <p className="text-white font-light text-sm mt-1 text-center mr-4">
            All Rights Reserved - Coolmax Group of companies - Privacy Policy
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white border-2 border-white p-2 rounded hover:bg-white hover:text-customBlue1 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-white border-2 border-white p-2 rounded hover:bg-white hover:text-customBlue1 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-white border-2 border-white p-2 rounded hover:bg-white hover:text-customBlue1 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 my-8"></div>

        <div className="flex justify-center items-center space-x-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Coolmax Internationals
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Coolmax Building Technologies
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Coolmax Electrical Technologies
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Coolmax System Air Technologies
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Coolmax Air Conditioning (Pvt) Ltd.
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
            Iceland Air Conditioning
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
