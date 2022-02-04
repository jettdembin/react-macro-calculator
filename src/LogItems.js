import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";
import useCalculation from "./hooks/useCalculation";

function LogItems(props) {
  const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const { foods, addFood, removeFood, allowEdit } = useFoodState(initialFoods);

  const [totalRemainingCarb, handleAddedCarb, handleDeletedCarb] =
    useCalculation(Number(props.totals[0].carb));
  const [totalRemainingProtein, handleAddedProtein, handleDeletedProtein] =
    useCalculation(Number(props.totals[0].protein));
  const [totalRemainingFat, handleAddedFat, handleDeletedFat] = useCalculation(Number(props.totals[0].fat));

  let initialCarbTotal = 0;
  let initialProteinTotal = 0;
  let initialFatTotal = 0;
  //combined macros(total of current macro from foods on food list)
  const [totalCombinedCarb, setCombinedCarb] = useState(initialCarbTotal);
  const handleCombinedCarb = (carb) => {
    setCombinedCarb(totalCombinedCarb + Number(carb));
  };
  const [totalCombinedProtein, setCombinedProtein] =
    useState(initialProteinTotal);
  const handleCombinedProtein = (protein) => {
    setCombinedProtein(totalCombinedProtein + Number(protein));
  };
  const [totalCombinedFat, setCombinedFat] = useState(initialFatTotal);
  const handleCombinedFat = (fat) => {
    setCombinedFat(totalCombinedFat + Number(fat));
  };

  return (
    <Paper>
      <FoodForm
        {...props}
        addFood={addFood}
        totalRemainingCarb={totalRemainingCarb}
        handleAddedCarb={handleAddedCarb}
        totalRemainingProtein={totalRemainingProtein}
        handleAddedProtein={handleAddedProtein}
        totalRemainingFat={totalRemainingFat}
        handleAddedFat={handleAddedFat}
        totalCombinedCarb={totalCombinedCarb}
        handleCombinedCarb={handleCombinedCarb}
        totalCombinedProtein={totalCombinedProtein}
        handleCombinedProtein={handleCombinedProtein}
        totalCombinedFat={totalCombinedFat}
        handleCombinedFat={handleCombinedFat}
      />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
        totalRemainingCarb={totalRemainingCarb}
        handleDeletedCarb={handleDeletedCarb}
        totalRemainingProtein={totalRemainingProtein}
        handleDeletedProtein={handleDeletedProtein}
        totalRemainingFat={totalRemainingFat}
        handleDeletedFat={handleDeletedFat}
        totalCombinedCarb={totalCombinedCarb}
        handleCombinedCarb={handleCombinedCarb}
        totalCombinedProtein={totalCombinedProtein}
        handleCombinedProtein={handleCombinedProtein}
        totalCombinedFat={totalCombinedFat}
        handleCombinedFat={handleCombinedFat}
      />
    </Paper>
  );
}

export default LogItems;
