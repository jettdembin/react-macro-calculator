import React, { useState } from "react";

import WeightForm from "./forms/WeightForm";

import GoalOptions from "./GoalCalculation/GoalOptions";
import GoalMacro from "./GoalCalculation/GoalMacro";
import AdjustMeals from "./GoalCalculation/AdjustMeals";

const GoalCalculation = (props) => {
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [firstAdjustment, setFirstAdjustment] = useState(false);
  const toggleIsAdjusted = () => {
    setIsAdjusted(!isAdjusted);
  };
  const toggleIsFirstAdjustment = () => {
    setFirstAdjustment(!firstAdjustment);
  };

  return (
    <div className="GoalCalculation">
      <WeightForm weight={props.weight} handleChange={props.handleChange} />
      <GoalOptions
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setIsAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
      />
      <GoalMacro
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setIsAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
      />
      <AdjustMeals
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setIsAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
      />
    </div>
  );
};

export default GoalCalculation;
