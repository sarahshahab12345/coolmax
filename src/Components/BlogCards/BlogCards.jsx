import React from "react";
import { FaArrowRight } from "react-icons/fa";

function BlogCards({ blogPosts }) {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-center overflow-x-auto">
      {blogPosts.map(
        (post) =>
          !post.featured && (
            <div
              key={post.id}
              className="flex-shrink-0 bg-white rounded-3xl shadow-md w-full sm:w-1/2 lg:w-1/3 xl:w-2/6 border-2 border-[#009FE3] flex flex-col justify-between h-full"
            >
              <div className="flex flex-col h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-t-lg w-full h-1/2 object-cover"
                />
                <div className="flex flex-col justify-between h-full p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-1">{post.description}</p>
                  <div className="flex justify-between text-sm text-gray-500"></div>
                </div>
              </div>

              <a
                href="#"
                className="m-4 flex items-center justify-center bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition duration-300 self-end"
              >
                <FaArrowRight size={10} />
              </a>
            </div>
          )
      )}
    </div>
  );
}

export default BlogCards;
