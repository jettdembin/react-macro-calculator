import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import useFormState from "./hooks/useFormState";

function FoodForm(props) {
  const [value, handleFoodChange, reset] = useFormState("");
  const [carb, handleProteinChange, resetProtein] = useFormState("");
  const [protein, handleCarbChange, resetCarb] = useFormState("");
  const [fat, handleFatChange, resetFat] = useFormState("");

  let chooseCarb = props.totalCombinedCarb
    ? props.totalCombinedCarb
    : props.remaining[0].Carb;

  return (
    <Paper style={{ margin: "1rem", padding: "1rem" }}>
      {/* JSON.parse(window.localStorage.getItem("remaining"))[0]["Carb"]}  */}
      {/* JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Goal"] */}
      {props.remaining[0].Carb} /{props.remaining[0].Protein} /
      {props.remaining[0].Fat}
      {JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Goal"]}
      {/* {props.totalCombinedCarb}/{props.remaining[0].Carb}/{chooseCarb} */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addFood(value, carb, protein, fat);
          // props.handleCombinedCarb(carb);
          // props.handleAddedCarb(props.totalCombinedCarb, carb);
          // props.handleCombinedProtein(protein);
          // props.handleAddedProtein(props.totalCombinedProtein, protein);
          // props.handleCombinedFat(fat);
          // props.handleAddedFat(props.totalCombinedFat, fat);
          props.handleMacro(props.remaining[0].Carb - Number(carb), "Carb");
          props.handleMacro(
            props.remaining[0].Protein - Number(protein),
            "Protein"
          );
          props.handleMacro(props.remaining[0].Fat - Number(fat), "Fat");
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
