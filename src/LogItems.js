import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import { v4 as uuidv4 } from "uuid";

function LogItems(props) {
  const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const [foods, setFoods] = useState(initialFoods);

  useEffect(() => {
    window.localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

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
    setFoods(updatedFoods);
  };
  const allowEdit = (foodId, item) => {
    const edittingFood = foods.map((food) =>
      food.id === foodId ? { ...food, item: item } : food
    );
    setFoods(edittingFood);
  };
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
