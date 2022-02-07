import React from "react";
import Paper from "@mui/material/Paper";

function GoalBtn(props) {
  return (
    <Paper>
      {props.goal}
      <button
        onClick={() => {
          props.toggleGoal(props.id);
          props.updateCal(props.id);
          props.updateAll(
            Math.round((props.calories * (Number(props.percentCarb) / 10)) / 4),
            Math.round(
              (props.calories * (Number(props.percentProtein) / 10)) / 4
            ),
            Math.round((props.calories * (Number(props.percentFat) / 10)) / 9),
            Number(props.percentCarb) * 10,
            Number(props.percentProtein) * 10,
            Number(props.percentFat) * 10
          );
          if (props.firstAdjustment === true) {
            props.toggleIsFirstAdjustment();
            props.toggleIsAdjusted();
          }
          //set storage for remaining
          props.handleMacro(props.totals[0].carb, "Carb");
          props.handleMacro(props.totals[0].protein, "Protein");
          props.handleMacro(props.totals[0].fat, "Fat");
          //set storage for total macros and percentages
          props.handleStoredTotal(props.totals[0].carb, "Carb");
          props.handleStoredTotal(props.totals[0].protein, "Protein");
          props.handleStoredTotal(props.totals[0].fat, "Fat");
          props.handleStoredTotal(props.goal, "Goal");
          props.handleStoredTotal(Number(props.weight), "Weight");
          props.handleStoredPercent(
            Number(props.percentCarb) * 10,
            "Carbpercent"
          );
          props.handleStoredPercent(
            Number(props.percentProtein) * 10,
            "Proteinpercent"
          );
          props.handleStoredPercent(
            Number(props.percentFat) * 10,
            "Fatpercent"
          );
        }}
      >
        Calculate
      </button>
    </Paper>
  );
}

export default GoalBtn;
