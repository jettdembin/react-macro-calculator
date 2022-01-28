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
        updateCarb={props.updateCarb}
        updateProtein={props.updateProtein}
        updateFat={props.updateFat}
        updateAll={props.updateAll}
        totals={props.totals}
      />
      <GoalMacro
        weight={props.weight}
        calories={props.calories}
        updateCal={props.updateCal}
        updateCarb={props.updateCarb}
        updateProtein={props.updateProtein}
        updateFat={props.updateFat}
        totals={props.totals}
      />
      <AdjustMeals
        weight={props.weight}
        calories={props.calories}
        updateCal={props.updateCal}
        updateCarb={props.updateCarb}
        updateProtein={props.updateProtein}
        updateFat={props.updateFat}
        totals={props.totals}
      />
    </div>
  );
}

export default GoalCalculation;
