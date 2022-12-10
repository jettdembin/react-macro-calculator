import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import GoalCalculation from "./components/GoalCalculation";
import LogItems from "./components/LogItems";

import useFormState from "./hooks/useFormState";

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

const App = () => {
  const [weight, handleChange] = useFormState("");
  const [goal, setGoal] = useState("");
  const [totals, setTotals] = useState(initialWeight);
  const [calories, setCalories] = useState(0);
  const [adjustedMacros, setAdjustMacros] = useState({
    carbAdjusted: 0,
    proteinAdjusted: 0,
    fatAdjusted: 0,
  });

  const bulk = +weight * 18;
  const maintain = +weight * 15;
  const shred = +weight * 12;

  const toggleGoal = (goal) => {
    switch (goal) {
      case 12:
        setGoal("Cut");
        return;
      case 15:
        setGoal("Maintain");
        return;
      case 18:
        setGoal("Bulk");
        return;
      default:
        return;
    }
  };

  const updateCal = (id) => {
    setCalories(+weight * +id);
  };

  const updateMacros = (carb, protein, fat, meals) => {
    setAdjustMacros([
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
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Macro Calculator</Typography>
        </Toolbar>
      </AppBar>

      <main className="p-10 m-0">
        <div className="flex flex-col">
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
        </div>
      </main>
    </Paper>
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
