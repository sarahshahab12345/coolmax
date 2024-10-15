import React from "react";
import BlogCards from "../BlogCards/BlogCards";
import { FaStar } from "react-icons/fa";

function BlogContent() {
  const blogPosts = [
    {
      id: 1,
      title: "BOTOX IN LOS ANGELES",
      date: "Jan 10, 2022",
      author: "John Adam",
      description:
        "The Commercial Vehicle Safety act of 1986 established a set of regulations in the United States for commercial motor vehicle operators...",
      image: "/images/blogimg.png",
      featured: true,
    },
    {
      id: 2,
      title: "BOTOX IN LOS ANGELES",
      date: "Jan 10, 2022",
      author: "John Adam",
      description:
        "The Commercial Vehicle Safety act of 1986 established a set of regulations in the United States for commercial motor vehicle operators...",
      image: "/images/blogimg.png",
      featured: false,
    },
    {
      id: 3,
      title: "BOTOX IN LOS ANGELES",
      date: "Jan 10, 2022",
      author: "John Adam",
      description:
        "The Commercial Vehicle Safety act of 1986 established a set of regulations in the United States for commercial motor vehicle operators...",
      image: "/images/blogimg.png",
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 w-full lg:pr-4 mb-8 lg:mb-0">
          {featuredPost && (
            <div className="bg-white p-6 rounded-lg mb-6 shadow-lg hover:shadow-xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <p className="text-blue-600 text-sm mb-2">Featured Article</p>
              <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-2">{featuredPost.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.author}</span>
              </div>
              <a href="#" className="text-blue-600 mt-4 inline-block">
                Continue reading →{" "}
              </a>
            </div>
          )}
        </div>

        <div className="lg:w-1/3 w-full lg:pl-4">
          <div className="bg-white p-4 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <FaStar
                className="text-customBlue2 bg-customGrey3 p-2 rounded-full mr-2"
                size={50}
              />
              <h3 className="text-lg font-bold">
                Looking for something specific?
              </h3>
            </div>
            <div className="flex rounded-full overflow-hidden mb-4">
              <input
                type="text"
                placeholder="Search Articles"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none rounded-full"
              />
              <button className="bg-customBlue2 text-white px-6 py-2 ml-2 rounded-full font-semibold hover:bg-blue-500 transition duration-300">
                Search
              </button>
            </div>
            <h4 className="text-lg font-bold mt-6">Categories:</h4>
            <ul className="text-gray-600 mt-2">
              <li className="p-4 mt-2 bg-customGrey3 text-lg font-semibold">
                Forums
              </li>
              <li className="p-2 mt-2 bg-customGrey3">Products</li>
              <li className="p-2 mt-2 bg-customGrey3">Events</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <BlogCards blogPosts={blogPosts} />
      </div>
      <div className="pt-12">
        <BlogCards blogPosts={blogPosts} />
      </div>
      <div className="pt-12">
        <BlogCards blogPosts={blogPosts} />
      </div>
    </div>
  );
}

export default BlogContent;
