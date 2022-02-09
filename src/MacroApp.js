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
  // const initialWeight = [
  //   {
  //     carb: 0,
  //     carbAdjusted: 0,
  //     protein: 0,
  //     proteinAdjusted: 0,
  //     fat: 0,
  //     fatAdjusted: 0,
  //     carbPercent: 0,
  //     proteinPercent: 0,
  //     fatPercent: 0,
  //   },
  // ];
  //4th state (shows correct state on 2nd click)
  // const [totals, setTotals] = useState(initialWeight);
  const adjustments = [
    {
      carbAdjusted: 0,
      proteinAdjusted: 0,
      fatAdjusted: 0,
    },
  ];
  //4th state (working)
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
  const initialTotalsMacros = [
    {
      carb: undefined,
      protein: undefined,
      fat: undefined,
    },
  ];
  //5th state
  const [totals, setTotals] = useState(initialTotalsMacros);
  const updateAll = (total, macro) => {
    if (initialTotalsMacros[0].hasOwnProperty(macro)) {
      initialTotalsMacros[0][`${macro}`] = Number(total);
      setTotals(initialTotalsMacros);
    }
  };
  //set remaining amt storage to be passed down to all components
  const initialRemaining = [
    { Carb: undefined, Protein: undefined, Fat: undefined },
  ];
  const initialRemainingOption = JSON.parse(
    window.localStorage.getItem("remaining") || `${initialRemaining}`
  );
  //6th state (working)
  const [remaining, setRemaining] = useState(initialRemainingOption);
  const handleMacro = (totalRemaining, macro) => {
    console.log("in remaining");
    if (initialRemaining[0].hasOwnProperty(macro)) {
      initialRemaining[0][`${macro}`] = Number(totalRemaining);
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
  //7th state
  const [storedTotals, setStoredTotals] = useState(initialTotalsOption);
  const handleStoredTotal = (total, macro) => {
    if (initialTotals[0].hasOwnProperty(macro)) {
      initialTotals[0][`${macro}`] = total;
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
  //8th state (last state)
  const [storedPercentages, setStoredPercent] = useState(
    initialPercentagesOption
  );
  const handleStoredPercent = (percent, macro) => {
    if (initialPercentages[0].hasOwnProperty(macro)) {
      initialPercentages[0][`${macro}`] = Number(percent);
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
          storedTotals={storedTotals}
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
