import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import { v4 as uuidv4 } from "uuid";

function LogItems(props) {
  const initialFoods = [
    { id: 1, item: "chicken", carb: 0, protein: 0, fat: 0 },
  ];
  const [foods, setFoods] = useState(initialFoods);
  const addFood = (newFoodItem, carb, protein, fat) => {
    setFoods([
      ...foods,
      {
        id: uuidv4(),
        item: newFoodItem,
        carb: carb,
        protein: protein,
        fat: fat,
      },
    ]);
  };
  const removeFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods([updatedFoods]);
  };
  return (
    <Paper>
      <FoodForm {...props} addFood={addFood} />
      <FoodList {...props} foods={foods} removeFood={removeFood} />
    </Paper>
  );
}

export default LogItems;
