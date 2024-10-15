import React, { useState } from "react";
import MetaLogo from "../../assets/images/MetaLogo.png";
import SMetaLogo from "../../assets/images/s-metalogo.png";

function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center min-h-[400px] lg:w-4/5 mx-auto">
        <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
          <img className="metaLogo mr-4 mb-2" src={MetaLogo} alt="Meta Logo" />
          <h2 className="text-3xl mb-4 flex items-center font-semibold font-poppins text-customBlue2">
            Partner with Us
          </h2>
          <p className="text-gray-400 mb-4 font-semibold leading-snug">
            Have any questions? Feel free to contact us <br /> at
            help@coolmax.com <br /> or fill out the form.
          </p>
          <img className="s-metaLogo mr-4" src={SMetaLogo} alt="Meta Logo" />
        </div>

        <div className="p-4 w-full lg:w-2/5">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-normal text-gray-700"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg text-gray-800 border-customBlue2"
                  placeholder="Add your name"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="name2"
                  className="block text-sm font-normal text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="name2"
                  name="name2"
                  value={formData.name2}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg border-customBlue2 text-gray-800"
                  placeholder="Add your Surname"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-normal text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-customBlue2 border rounded-lg text-gray-800"
                placeholder="example@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-normal text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-customBlue2 border rounded-lg text-gray-800"
                placeholder="Type your message here"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2 border-customBlue2 rounded-md flex items-center justify-center mr-2 relative">
                  <span className="w-3 h-3 bg-customBlue2 rounded-md absolute opacity-0 peer-checked:opacity-100"></span>
                </span>
                Subscribe to Newsletter
              </label>

              <button
                type="submit"
                className="mt-4 bg-customBlue2 text-white py-1 px-4 rounded-full font-semibold hover:bg-customBlue2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Partner;
