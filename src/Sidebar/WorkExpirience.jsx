import React from "react";
import InputFied from "../Components/InputFied";

const WorkExpirience = ({ handleCategoryChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Expirience</h4>
      <div> 
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>Any Expirience
        </label>
        <InputFied
          handleCategoryChange={handleCategoryChange}
          value="Internship"
          title="Internship"
          name="test"
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value="Work remotely"
          title="Work remotely"
          name="test"
        />
        <InputFied
          handleCategoryChange={handleCategoryChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExpirience;
