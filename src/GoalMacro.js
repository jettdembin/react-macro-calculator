import React from "react";
import Paper from "@mui/material/Paper";
import "./GoalMacro.css";

function GoalMacros(props) {
  return (
    <Paper>
      {props.storedTotals[0].Carb}
      <div>
        <h2>Calories Per Day</h2>
        <h2>
          {props.calories
            ? props.calories
            : JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Weight"
              ] *
              (props.goal === "Cut" ? 12 : props.goal === "Maintain" ? 15 : 18)}
        </h2>
      </div>
      <div className="Macro-totals">
        <div>Carbohydrates</div>
        <div>
          {/* JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Carb"
              ] */}
          {props.isAdjusted
            ? props.adjustedMacros[0].carbAdjusted
            : props.storedTotals[0].Carb}
          g
        </div>
        <div>
          {props.storedPercentages[0].Carbpercent}
          {/* {
            JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
              "Carbpercent"
            ]
          } */}
          %
        </div>
      </div>
      <div className="Macro-totals">
        <div>Protein</div>
        <div>
          {props.isAdjusted
            ? props.adjustedMacros[0].proteinAdjusted
            : props.storedTotals[0].Protein}
          g
        </div>
        <div>{props.storedPercentages[0].Proteinpercent}%</div>
      </div>
      <div className="Macro-totals">
        <div>Fat</div>
        <div>
          {props.isAdjusted
            ? props.adjustedMacros[0].fatAdjusted
            : props.storedTotals[0].Fat}
          g
        </div>
        <div>
          {props.storedPercentages[0].Fatpercent}
          {/* {
            JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
              "Fatpercent"
            ]
          } */}
          %
        </div>
      </div>
    </Paper>
  );
}

export default GoalMacros;
