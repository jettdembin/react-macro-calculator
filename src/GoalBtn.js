import React from "react";
import Paper from "@mui/material/Paper";

function GoalBtn(props) {
  return (
    <Paper>
      <button
        onClick={() => {
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
        }}
      >
        Calculate
      </button>
    </Paper>
  );
}

export default GoalBtn;
