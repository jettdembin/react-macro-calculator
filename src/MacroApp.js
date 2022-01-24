import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MacroForm from "./MacroForm";
import FoodList from "./FoodList";

function MacroApp() {
  const initialFoods = [
    { id: 1, item: "chicken" },
    { id: 2, item: "apple" },
    { id: 3, item: "bread" }
  ]
  const [ foods, setFoods ] = useState(initialFoods);
  return (
      <Paper style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: '#fafafa'
      }}
      elevation={0}
      >
        <AppBar color='primary' position='static' style={{ height: '64px' }}>
          <Toolbar>
            <Typography color='inherit'> Macro Calculator</Typography>
          </Toolbar>
        </AppBar>
        <FoodList foods={foods}/>
      </Paper>
  );
}

export default MacroApp;


// MacroApp
//-GoalCalculation
//  -GoalForm
//  -GoalOptions
//    -GoalBtns
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