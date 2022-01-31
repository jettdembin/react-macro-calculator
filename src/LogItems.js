import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";

function LogItems(props) {
  const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const { foods, addFood, removeFood, allowEdit } = useFoodState(initialFoods);

  useEffect(() => {
    window.localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  return (
    <Paper>
      <FoodForm {...props} addFood={addFood} />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
      />
    </Paper>
  );
}

export default LogItems;
