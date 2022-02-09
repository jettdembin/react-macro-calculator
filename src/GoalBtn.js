import React from "react";
import Paper from "@mui/material/Paper";

function GoalBtn(props) {
  let id = props.id;
  let calories = Number(props.id) * Number(props.weight);
  let carb = Math.round((calories * (Number(props.percentCarb) / 10)) / 4);
  let protein = Math.round(
    (calories * (Number(props.percentProtein) / 10)) / 4
  );
  let fat = Math.round((calories * (Number(props.percentFat) / 10)) / 9);
  return (
    <Paper>
      <button
        onClick={() => {
          props.toggleGoal(id);
          props.updateCal(id);
          props.updateAll(carb, "carb");
          props.updateAll(protein, "protein");
          props.updateAll(fat, "fat");

          if (props.firstAdjustment === true) {
            props.toggleIsFirstAdjustment();
            props.toggleIsAdjusted();
          }
          props.handleMacro(carb, "Carb");
          props.handleMacro(protein, "Protein");
          props.handleMacro(fat, "Fat");
          //set storage for total macros and percentages
          props.handleStoredTotal(carb, "Carb");
          props.handleStoredTotal(protein, "Protein");
          props.handleStoredTotal(fat, "Fat");
          props.handleStoredTotal(
            id === "12" ? "Cut" : id === "15" ? "Maintain" : "Bulk",
            "Goal"
          );
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
