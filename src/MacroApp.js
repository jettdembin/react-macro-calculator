import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import GoalCalculation from "./GoalCalculation";
import LogItems from "./LogItems";

import useFormState from "./hooks/useFormState";

function MacroApp() {
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
  //set remaining amt storage to be passed down to all components
  const initialRemaining = [
    { Carb: undefined, Protein: undefined, Fat: undefined },
  ];
  const initialRemainingOption = JSON.parse(
    window.localStorage.getItem("remaining") || `${initialRemaining}`
  );
  const [remaining, setRemaining] = useState(initialRemainingOption);
  const handleMacro = (totalRemaining, macro) => {
    if (initialRemaining[0].hasOwnProperty(macro)) {
      console.log("in remaining object");
      initialRemaining[0][`${macro}`] = Number(totalRemaining);
      console.log(initialRemaining[0][`${macro}`]);
      setRemaining(initialRemaining);
    }
  };
  useEffect(() => {
    window.localStorage.setItem("remaining", JSON.stringify(remaining));
  }, [remaining]);

  //set totals in localstorage
  const initialTotals = [
    {
      Carb: undefined,
      Protein: undefined,
      Fat: undefined,
      Goal: undefined,
      Weight: undefined,
    },
  ];
  const initialTotalsOption = JSON.parse(
    window.localStorage.getItem("storedTotals") || `${initialTotals}`
  );
  const [storedTotals, setStoredTotals] = useState(initialTotalsOption);
  const handleStoredTotal = (total, macro) => {
    if (initialTotals[0].hasOwnProperty(macro)) {
      console.log("in storedTotals object");
      initialTotals[0][`${macro}`] = total;
      console.log(initialTotals[0][`${macro}`]);
      setStoredTotals(initialTotals);
    }
  };
  useEffect(() => {
    window.localStorage.setItem("storedTotals", JSON.stringify(storedTotals));
  }, [storedTotals]);

  //set total percentages in storage
  const initialPercentages = [
    {
      Carbpercent: undefined,
      Proteinpercent: undefined,
      Fatpercent: undefined,
    },
  ];
  const initialPercentagesOption = JSON.parse(
    window.localStorage.getItem("storedPercentages") || `${initialPercentages}`
  );
  const [storedPercentages, setStoredPercent] = useState(
    initialPercentagesOption
  );
  const handleStoredPercent = (percent, macro) => {
    if (initialPercentages[0].hasOwnProperty(macro)) {
      console.log("in storedPercentages object");
      initialPercentages[0][`${macro}`] = Number(percent);
      console.log(initialPercentages[0][`${macro}`]);
      setStoredPercent(initialPercentages);
    }
  };
  useEffect(() => {
    window.localStorage.setItem(
      "storedPercentages",
      JSON.stringify(storedPercentages)
    );
  }, [storedPercentages]);

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
      <Grid container>
        <Grid item xs={11} md={8} sm={4}></Grid>
        <GoalCalculation
          storedPercentages={storedPercentages}
          handleStoredPercent={handleStoredPercent}
          storedTotals={storedTotals}
          handleStoredTotal={handleStoredTotal}
          remaining={remaining}
          handleMacro={handleMacro}
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
          remaining={remaining}
          handleMacro={handleMacro}
          totals={totals}
          weight={weight}
          goal={goal}
          calories={calories}
          updateCal={updateCal}
          updateAll={updateAll}
          updateMacros={updateMacros}
        />
      </Grid>
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
