import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

const App = () => {
  const [query, setQuery] = useState(""); // <-- State for the job search query
  const [selectedCategory, setSelectedCategory] = useState(null); // <-- State for category selection
  const [jobs, setJobs] = useState([]); // <-- State for storing fetched jobs
  const [loading, setLoading] = useState(false); // <-- State to manage loading status
  const [currentPage, setCurrentPage] = useState(1); // <-- State for tracking current page
  const itemsPerPage = 6; // <-- Number of items displayed per page

  // Fetch job data when the component mounts
  useEffect(() => {
    setLoading(true); // Show loading indicator
    fetch("jobs.json") // Fetch data from the local JSON file "jobs.json"
      .then((res) => res.json()) // Convert response to JSON format
      .then((data) => {
        setJobs(data); // Set the fetched data into jobs state
        setLoading(false); // Hide loading indicator
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors during data fetching
      });
  }, []);

  // Handle input change for search query
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle click for category selection
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Pagination: Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage; // Start index of the current page
    const endIndex = startIndex + itemsPerPage; // End index of the current page
    return { startIndex, endIndex }; // Return calculated indices
  };

  // Function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1); // Increment the page number
    }
  };

  // Function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement the page number
    }
  };

  // Filter jobs based on the search query
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Main Function to filter jobs based on query and selected category
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs; // Start with all jobs

    // Filter jobs based on search query if it exists
    if (query) {
      filteredJobs = filteredItems; // Use previously filtered items for query
    }

    // Filter jobs based on selected category if it exists
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() || // Match for job location
          parseInt(maxPrice) <= parseInt(selected) || // Match for max price (converted to integer)
          experienceLevel.toLowerCase() === selected.toLowerCase() || // Match for experience level
          salaryType.toLowerCase() === selected.toLowerCase() || // Match for salary type
          employmentType.toLowerCase() === selected.toLowerCase() // Match for employment type
      );
    }

    // Slice data based on the current page range
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex); // Get only jobs for the current page

    // After filtering, map over the jobs and return an array of Card components to display
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  return (
    <>
      <Navbar />
      {/* Passing all states and functions to child components via Outlet */}
      <Outlet
        context={{
          query,
          handleInputChange,
          selectedCategory,
          handleCategoryChange,
          handleClick,
          jobs,
          loading,
          currentPage,
          itemsPerPage,
          filteredItems,
          filteredData,
          nextPage,
          prevPage
        }}
      />
    </>
  );
};

export default App;