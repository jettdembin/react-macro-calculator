import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import GoalCalculation from "./GoalCalculation";
import LogItems from "./LogItems";

import useFormState from "./hooks/useFormState";

function MacroApp() {
  const initialWeight = [{ weight: 0, calories: 0 }];
  const [weight, handleChange] = useFormState("");
  const [calories, handleCalculation] = useState(0);
  const updateCal = (id) => {
    handleCalculation(Number(weight) * Number(id));
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Macro Calculator</Typography>
        </Toolbar>
      </AppBar>
      <GoalCalculation
        weight={weight}
        calories={calories}
        updateCal={updateCal}
        handleChange={handleChange}
      />
      <LogItems />
    </Paper>
  );
}

export default MacroApp;

// MacroApp
//-GoalCalculation
//  -GoalForm
//  -GoalOptions
//    -GoalBtn
//    -GoalBtn
//    -GoalBtn
//  -GoalMacros
//  -AdjustMeals
//  -GoalDisplay
//    -GoalMacro
//    -GoalMacro
//    -GoalMacro
//    -AdjustCalories
//      -AdjustAmount
//      -AdjustAmount
//      -AdjustAmount
//      -AdjustAmount
//-LogItems
//  -FoodForm
//  -FoodList
//    -FoodItem

//id task completed
