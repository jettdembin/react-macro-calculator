import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

function LogItems(props) {
  const initialFoods = [
    { id: 1, item: "chicken", carb: 0, protein: 0, fat: 0 },
  ];
  const [foods, setFoods] = useState(initialFoods);
  const addFood = (newFoodItem, carb, protein, fat) => {
    setFoods([
      ...foods,
      { id: 4, item: newFoodItem, carb: carb, protein: protein, fat: fat },
    ]);
  };
  return (
    <Paper>
      <FoodForm {...props} addFood={addFood} />
      <FoodList {...props} foods={foods} />
    </Paper>
  );
}

export default LogItems;
