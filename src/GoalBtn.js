import React from "react";
import Paper from "@mui/material/Paper";

function GoalBtn(props) {
  return (
    <Paper>
      <button onClick={() => props.updateCal(props.id)}>Calculate</button>
    </Paper>
  );
}

export default GoalBtn;
