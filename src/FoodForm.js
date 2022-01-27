import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import useFormState from "./hooks/useFormState";

function FoodForm() {
  const [value, handleFoodChange, reset] = useFormState("");
  const [carb, handleProteinChange, resetProtein] = useFormState("");
  const [protein, handleCarbChange, resetCarb] = useFormState("");
  const [fat, handleFatChange, resetFat] = useFormState("");

  return (
    <Paper>
      <form onSubmit={(reset, resetProtein, resetCarb, resetFat)}>
        <div className="Food-input-wrapper">
          <div className="Food-input">
            {value}
            <input
              type="text"
              placeholder="Food Item"
              value={value}
              onChange={handleFoodChange}
            />
          </div>
          <div>
            {carb}
            <input
              className="Macro-input"
              type="text"
              placeholder="Carbs(grams)"
              id="data-carb"
              value={carb}
              onChange={handleProteinChange}
            />
            {protein}
            <input
              className="Macro-input"
              type="text"
              placeholder="Protein(grams)"
              id="data-protein"
              value={protein}
              onChange={handleCarbChange}
            />
            {fat}
            <input
              className="Macro-input"
              type="text"
              placeholder="Fat(grams)"
              id="data-fat"
              value={fat}
              onChange={handleFatChange}
            />
          </div>
          <button type="submit">Submit form</button>
        </div>
      </form>
    </Paper>
  );
}

export default FoodForm;
