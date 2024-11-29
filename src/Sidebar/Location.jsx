import React from "react";
import InputFied from "../Components/InputFied";

const Location = ({ handleCategoryChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputFied
          handleCategoryChange={handleCategoryChange}
          value="london"
          title="London"
          name="test"
          id="test"
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value="San Francisco"
          title="San Francisco"
          name="test"
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value="Seattle"
          title="Seattle"
          name="test"
        />

<InputFied
        handleCategoryChange={handleCategoryChange}
        value="Brussels"
        title="Brussels"
        name="test"
      />
      <InputFied
        handleCategoryChange={handleCategoryChange}
        value="Boston"
        title="Boston"
        name="test"
      />
      <InputFied
        handleCategoryChange={handleCategoryChange}
        value="New York"
        title="New York"
        name="test"
      />
      <InputFied
        handleCategoryChange={handleCategoryChange}
        value="Berlin"
        title="Berlin"
        name="test"
      />
      <InputFied
        handleCategoryChange={handleCategoryChange}
        value="Stockholm"
        title="Stockholm"
        name="test"
      />
      <InputFied
        handleCategoryChange={handleCategoryChange}
        value="Nairobi"
        title="Nairobi"
        name="test"
      />
      <InputFied
        handleCategoryChange={handleCategoryChange}
        value="Cupertino"
        title="Cupertino"
        name="test"
      />


      </div>
    </div>
  );
};

export default Location;
