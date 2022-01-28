import React from "react";
import Paper from "@mui/material/Paper";

function GoalBtn(props) {
  return (
    <Paper>
      <button
        onClick={() =>
          props.updateAll(
            props.id,
            Math.round((props.calories * (Number(props.percentCarb) / 10)) / 4),
            Math.round(
              (props.calories * (Number(props.percentProtein) / 10)) / 4
            ),
            Math.round((props.calories * (Number(props.percentFat) / 10)) / 9)
          )
        }
      >
        Calculate
      </button>
    </Paper>
  );
}

export default GoalBtn;
