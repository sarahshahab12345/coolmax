import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

function MediaKit() {
  return (
    <div className="container mx-auto py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center min-h-[400px]">
        <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
          <h2 className="text-3xl font-light mb-4 flex items-center text-customBlue3 font-poppins">
            <img
              className="metaLogo mr-4"
              src="/images/MetaLogo.png"
              alt="Meta Logo"
            />
            Media Kit
          </h2>
          <h1 className="font-semibold text-4xl font-poppins">
            Download Media Kit
          </h1>
          <p className="text-gray-600 mb-4 font-light leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod tempor incididunt
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-full gap-9">
          <div className="border-2 border-customBlue1 p-4 rounded-3xl shadow-md mb-6 lg:mb-0 lg:w-2/5">
            <div className="flex justify-center mb-2">
              <MdOutlineFileDownload size={24} className="text-customBlue1" />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2 text-customBlue1">
              Download Media Kit
            </h3>
            <p className="text-gray-600 text-center font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="border-2 border-customBlue1 p-4 rounded-3xl shadow-md lg:w-2/5">
            <div className="flex justify-center mb-2">
              <MdOutlineFileDownload size={24} className="text-customBlue1" />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2 text-customBlue1">
              Download Media Kit
            </h3>
            <p className="text-gray-600 text-center font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaKit;
