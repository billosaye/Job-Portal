import React from "react";
import { useOutletContext } from "react-router-dom";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "../Components/Jobs";
import Sidebar from "../Sidebar/Sidebar";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  // Extract all states and functions from Outlet context
  const { 
    query, 
    handleInputChange, 
    handleClick, 
    selectedCategory, 
    handleCategoryChange,
    jobs,
    loading,
    currentPage,
    itemsPerPage,
    filteredItems,
    filteredData,
    nextPage,
    prevPage
  } = useOutletContext();

  const result = filteredData(jobs, selectedCategory, query); // Get the final filtered results

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded shadow-md hidden lg:block">
          {/* Sidebar handles category selection */}
          <Sidebar
            handleCategoryChange={handleCategoryChange} 
            selectedCategory={selectedCategory}
            handleClick={handleClick}
          />
        </div>

        {/* Jobs Section */}
        <div className="col-span-4 lg:col-span-2 bg-white rounded shadow-md p-4">
          {loading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <h3 className="text-lg font-bold mb-2">
              {result.length} Jobs Available
            </h3>
          )}

          {/* Pagination */}
          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-4 rounded shadow-md hidden lg:block">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;