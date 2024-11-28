import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Get the Latest <span className="text-blue"> Jobs</span>
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of Jobs in the field of IT, Engineering, Software, Data Science, and more
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-1 gap-4">
          {/* Input for job title */}
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="jobQuery"
              id="jobQuery"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={query} // Controlled by query state
              onChange={handleInputChange} // Updates query state
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          {/* Input for location */}
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="locationQuery"
              id="locationQuery"
              placeholder="Enter Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
