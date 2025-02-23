import React from "react";

const InputFied = ({ handleCategoryChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} value={value} onChange={handleCategoryChange} />
      <span className="checkmark"></span>
      {title}
    </label>
    


  );
};

export default InputFied;
