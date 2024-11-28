//Not Working, redo it

import React from "react";
import InputFied from "../Components/InputFied";

const DateofPosting = ({ handleCategoryChange }) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  // Convert date to a string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={thirtyDaysAgoDate}
          title="Last 30 days"
          name="test"
        />
      </div>
    </div>
  );
};

export default DateofPosting;
