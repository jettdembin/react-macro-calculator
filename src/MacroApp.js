import React from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MacroForm from "./MacroForm";

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
            <Typography color='inherit'> Macro Calculator</Typography>
          </Toolbar>
        </AppBar>
      </Paper>
  );
}

export default MacroApp;


//id task completed