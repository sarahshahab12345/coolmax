import React from "react";
import BlogBanner from "/src/assets/images/BlogBanner.png"; 

function BlogHeader() {
  return (
    <div className="relative py-52 md:py-40 sm:py-24">
      <img
        src={BlogBanner}
        alt="Blog Banner"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
      />
      <div className="container mx-auto text-left px-4 relative z-10">
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold mb-4 text-customBlue1 font-poppins">
          Blogs
        </h1>

        <p className="text-customBlue1 mb-4 w-full max-w-xl sm:max-w-full sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br />
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>

        <button className="bg-customBlue1 font-bold font-poppins text-white px-6 py-2 rounded-full hover:bg-customBlue2 transition duration-300 ease-in-out">
          Partner with us
        </button>
      </div>
    </div>
  );
}

export default BlogHeader;
