import React, { useState } from "react";
import WeightForm from "./WeightForm";
import GoalOptions from "./GoalOptions";
import GoalMacro from "./GoalMacro";
import AdjustMeals from "./AdjustMeals";

function GoalCalculation(props) {
  const [isAdjusted, setAdjusted] = useState(false);
  const toggleIsAdjusted = () => {
    setAdjusted(true);
  };

  return (
    <div className="GoalCalculation">
      <WeightForm weight={props.weight} handleChange={props.handleChange} />
      <GoalOptions {...props} />
      <GoalMacro
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
      />
      <AdjustMeals
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
      />
    </div>
  );
}

export default GoalCalculation;
