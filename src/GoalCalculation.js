import React from "react";
import WeightForm from "./WeightForm";
import GoalOptions from "./GoalOptions";

function GoalCalculation() {
  return (
    <div className="GoalCalculation">
      <WeightForm />
      <GoalOptions/>
    </div>
  );
}

export default GoalCalculation;