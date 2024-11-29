import React from "react";
import Button from "../Components/Button";
import InputFied from "../Components/InputFied";

const Salary = ({ handleClick, handleCategoryChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={30}
          title="<300000k"
          name="test2"
        
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={50}
          title="<500000k"
          name="test2"
        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={80}
          title="<800000k"
          name="test2"

        />

        <InputFied
          handleCategoryChange={handleCategoryChange}
          value={100}
          title="<1000000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
