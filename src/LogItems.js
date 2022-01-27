import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

function LogItems() {
  const initialFoods = [
    { id: 1, item: "chicken" },
    { id: 2, item: "apple" },
    { id: 3, item: "bread" },
  ];
  const [foods, setFoods] = useState(initialFoods);
  const addFood = (newFoodItem) => {
    setFoods([...foods, { id: 4, item: newFoodItem }]);
  };
  return (
    <Paper>
      <FoodForm addFood={addFood} />
      <FoodList foods={foods} />
    </Paper>
  );
}

export default LogItems;
