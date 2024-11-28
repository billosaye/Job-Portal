import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import TypeofEmployment from "./TypeofEmployment";
import DateofPosting from "./DateofPosting";
import WorkExpirience from "./WorkExpirience";

const Sidebar = ({ handleCategoryChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleCategoryChange={handleCategoryChange} />
      <Salary handleCategoryChange={handleCategoryChange} handleClick={handleClick} />
      <DateofPosting /> {/*/Not Working, redo it*/}
      <WorkExpirience handleCategoryChange={handleCategoryChange} />
      <TypeofEmployment handleCategoryChange={handleCategoryChange} />
    </div>
  );
};

export default Sidebar;
