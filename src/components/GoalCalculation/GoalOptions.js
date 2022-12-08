import React from "react";
import GoalBtn from "./GoalOptions/GoalBtn";

const GoalOptions = (props) => {
  return (
    <div className="flex justify-between border border-black -cntr">
      <div className="">
        <h4 className="text-4xl text-center">Cut</h4>
        <GoalBtn
          id="12"
          {...props}
          percentCarb="4"
          percentProtein="4"
          percentFat="2"
        />
      </div>

      <div className="">
        <h4 className="text-4xl">Maintain</h4>
        <GoalBtn
          id="15"
          {...props}
          percentCarb="5"
          percentProtein="2"
          percentFat="3"
        />
      </div>

      <div className="">
        <h4 className="text-4xl text-center">Bulk</h4>
        <GoalBtn
          id="18"
          {...props}
          percentCarb="5"
          percentProtein="1.5"
          percentFat="3.5"
        />
      </div>
    </div>
  );
};

export default GoalOptions;
