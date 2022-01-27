import React from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import GoalCalculation from "./GoalCalculation";
import LogItems from "./LogItems";

function MacroApp() {
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
            <Typography color='inherit'>Macro Calculator</Typography>
          </Toolbar>
        </AppBar>
        <GoalCalculation/>
        <LogItems/>
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