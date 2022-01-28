import React from "react";
import Paper from "@mui/material/Paper";
import "./GoalMacro.css";

function GoalMacros(props) {
  return (
    <Paper>
      <div>
        <h2>Calories Per Day</h2>
        <h2>{props.calories}</h2>
      </div>
      <div className="Macro-totals">
        <div>Carbohydrates</div>
        <div>{props.totals[0].carb}g</div>
        <div>{props.totals[0].carbPercent}%</div>
      </div>
      <div className="Macro-totals">
        <div>Protein</div>
        <div>{props.totals[0].protein}g</div>
        <div>{props.totals[0].proteinPercent}%</div>
      </div>
      <div className="Macro-totals">
        <div>Fat</div>
        <div>{props.totals[0].fat}g</div>
        <div>{props.totals[0].fatPercent}%</div>
      </div>
    </Paper>
  );
}

export default GoalMacros;
