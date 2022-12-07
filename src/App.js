import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import GoalCalculation from "./components/GoalCalculation";
import LogItems from "./components/LogItems";

import useFormState from "./hooks/useFormState";

const App = () => {
  const [weight, handleChange] = useFormState("");
  const [goal, setGoal] = useState("");
  const toggleGoal = (goal) => {
    switch (goal) {
      case "12":
        setGoal("Cut");
        break;
      case "15":
        setGoal("Maintain");
        break;
      case "18":
        setGoal("Bulk");
        break;
    }
  };
  const [calories, handleCalculation] = useState(0);
  const updateCal = (id) => {
    handleCalculation(Number(weight) * Number(id));
  };
  const initialWeight = [
    {
      carb: 0,
      carbAdjusted: 0,
      protein: 0,
      proteinAdjusted: 0,
      fat: 0,
      fatAdjusted: 0,
      carbPercent: 0,
      proteinPercent: 0,
      fatPercent: 0,
    },
  ];
  const [totals, setTotals] = useState(initialWeight);
  const adjustments = [
    {
      carbAdjusted: 0,
      proteinAdjusted: 0,
      fatAdjusted: 0,
    },
  ];
  const [adjustedMacros, adjustMacros] = useState(adjustments);
  const updateMacros = (carb, protein, fat, meals) => {
    adjustMacros([
      {
        ...adjustedMacros,
        carbAdjusted: Math.round(carb / meals),
        proteinAdjusted: Math.round(protein / meals),
        fatAdjusted: Math.round(fat / meals),
      },
    ]);
  };
  const updateAll = (
    carb,
    protein,
    fat,
    carbPercent,
    proteinPercent,
    fatPercent
  ) => {
    setTotals([
      {
        carb: carb,
        protein: protein,
        fat: fat,
        carbPercent: carbPercent,
        proteinPercent: proteinPercent,
        fatPercent: fatPercent,
      },
    ]);
  };

  return (
    <div
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

      <main>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item xs={11} md={8} sm={4}></Grid>
          <GoalCalculation
            toggleGoal={toggleGoal}
            weight={weight}
            calories={calories}
            updateCal={updateCal}
            updateAll={updateAll}
            updateMacros={updateMacros}
            adjustedMacros={adjustedMacros}
            totals={totals}
            handleChange={handleChange}
          />
          <LogItems
            totals={totals}
            weight={weight}
            goal={goal}
            calories={calories}
            updateCal={updateCal}
            updateAll={updateAll}
            updateMacros={updateMacros}
          />
        </Grid>
      </main>
    </div>
  );
};

export default App;

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
