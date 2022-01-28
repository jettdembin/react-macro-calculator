import React from "react";
import WeightForm from "./WeightForm";
import GoalOptions from "./GoalOptions";
import GoalMacro from "./GoalMacro";
import AdjustMeals from "./AdjustMeals";

function GoalCalculation(props) {
  return (
    <div className="GoalCalculation">
      <WeightForm weight={props.weight} handleChange={props.handleChange} />
      <GoalOptions
        weight={props.weight}
        calories={props.calories}
        updateCal={props.updateCal}
      />
      <GoalMacro
        weight={props.weight}
        calories={props.calories}
        updateCal={props.updateCal}
      />
      <AdjustMeals
        weight={props.weight}
        calories={props.calories}
        updateCal={props.updateCal}
      />
    </div>
  );
}

export default GoalCalculation;
