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
        <div>0g</div>
        <div>0%</div>
      </div>
      <div className="Macro-totals">
        <div>Protein</div>
        <div>0g</div>
        <div>0%</div>
      </div>
      <div className="Macro-totals">
        <div>Fat</div>
        <div>0g</div>
        <div>0%</div>
      </div>
    </Paper>
  );
}

export default GoalMacros;
