import React from "react";
import Paper from "@mui/material/Paper";
import "./AdjustMeals.css";

function AdjustMeals() {
  return (
    <Paper>
      <div className="Adjust-cntr">
        <div className="Adjust-header">
          <h4>Adjust Meals per Day</h4>
        </div>
        <nav className="Adjust-nav-cntr">
          <ul className="Adjust-nav">
            <li>
              <a className="Adjust-selection" id="1">
                All
              </a>
            </li>
            <li>
              <a className="Adjust-selection" id="3">
                3
              </a>
            </li>
            <li>
              <a className="Adjust-selection" id="4">
                4
              </a>
            </li>
            <li>
              <a className="Adjust-selection" id="5">
                5
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Paper>
  );
}

export default AdjustMeals;
