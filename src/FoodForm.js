import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import useFormState from "./hooks/useFormState";

function FoodForm(props) {
  const [value, handleFoodChange, reset] = useFormState("");
  const [carb, handleProteinChange, resetProtein] = useFormState("");
  const [protein, handleCarbChange, resetCarb] = useFormState("");
  const [fat, handleFatChange, resetFat] = useFormState("");

  return (
    <Paper style={{ margin: "1rem", padding: "1rem" }}>
      {props.totalRemainingCarb} /{props.totalRemainingProtein} /
      {props.totalRemainingFat}
      {props.goal}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addFood(value, carb, protein, fat);
          props.handleCombinedCarb(carb);
          props.handleAddedCarb(props.totalCombinedCarb, carb);
          props.handleCombinedProtein(protein);
          props.handleAddedProtein(props.totalCombinedProtein, protein);
          props.handleCombinedFat(fat);
          props.handleAddedFat(props.totalCombinedFat, fat);
          props.handleMacro(props.totalRemainingCarb, "Carb");
          props.handleMacro(props.totalRemainingProtein, "Protein");
          props.handleMacro(props.totalRemainingFat, "Fat");
          reset();
          resetCarb();
          resetProtein();
          resetFat();
        }}
      >
        {value}
        <TextField
          value={value}
          onChange={handleFoodChange}
          margin="normal"
          label="Add Food Item"
          fullWidth
        />
        {carb}
        <TextField
          value={carb}
          onChange={handleProteinChange}
          label="Carbs(grams)"
        />
        {protein}
        <TextField
          value={protein}
          onChange={handleCarbChange}
          label="Protein(grams)"
        />
        {fat}
        <TextField value={fat} onChange={handleFatChange} label="Fat(grams)" />
        <button type="submit">Submit form</button>
      </form>
    </Paper>
  );
}

export default FoodForm;
