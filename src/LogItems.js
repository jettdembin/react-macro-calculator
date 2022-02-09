import React from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";

function LogItems(props) {
  // const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const initialFoods = [];
  const {
    foods,
    addFood,
    removeFood,
    allowEdit,
    allowEditCarb,
    allowEditProtein,
    allowEditFat,
  } = useFoodState(initialFoods);

  return (
    <Paper>
      <FoodForm {...props} addFood={addFood} />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
        allowEditCarb={allowEditCarb}
        allowEditProtein={allowEditProtein}
        allowEditFat={allowEditFat}
      />
    </Paper>
  );
}

export default LogItems;
