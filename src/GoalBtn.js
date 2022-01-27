import React from "react";
import Paper from "@mui/material/Paper";
import useCalculation from "./hooks/useCalculation";

function GoalBtn(props) {
  const weight = Number(props.weight);
  const id = Number(props.id);
  const [calories, handleCalculation] = useCalculation(weight * id);

  return (
    <Paper>
      <button onClick={handleCalculation}>Calculate</button>
      {calories}
    </Paper>
  );
}

export default GoalBtn;
