import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";
import useCalculation from "./hooks/useCalculation";

function LogItems(props) {
  const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const { foods, addFood, removeFood, allowEdit } = useFoodState(initialFoods);

<<<<<<< HEAD
  const [remainingCarb, handleCarbDeleted, handleCarbAdded] = useCalculation(
    props.totals[0].carb
  );
  const [remainingProtein, handleProteinDeleted, handleProteinAdded] =
    useCalculation(props.totals[0].protein);
  const [remainingFat, handleFatDeleted, handleFatAdded] = useCalculation(
    props.totals[0].fat
  );

  useEffect(() => {
    window.localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  return (
    <Paper>
      <div>
        <h1>Current Goal</h1>
        <h2>{props.goal}</h2>
      </div>
      <div>
        <h2>Carbs(C)</h2>
        <h2>{props.totals[0].carb}</h2>
      </div>
      <div>
        <h2>Protein(P)</h2>
        <h2>{props.totals[0].protein}</h2>
      </div>
      <div>
        <h2>Fat(F)</h2>
        <h2>{props.totals[0].fat}</h2>
      </div>
      <div>
        <h4>{remainingCarb}(C)</h4>
        <h4>{remainingProtein}(P)</h4>
        <h4>{remainingFat}(F)</h4>
      </div>
      <FoodForm
        {...props}
        addFood={addFood}
        remainingCarb={remainingCarb}
        handleCarbDeleted={handleCarbDeleted}
        remainingProtein={remainingProtein}
        handleProteinDeleted={handleProteinDeleted}
        remainingFat={remainingFat}
        handleFatDeleted={handleFatDeleted}
        handleCarbAdded={handleCarbAdded}
        handleProteinAdded={handleProteinAdded}
        handleFatAdded={handleFatAdded}
=======
  const [totalRemainingCarb, handleAddedCarb, handleDeletedCarb] =
    useCalculation(Number(props.totals[0].carb));
  const [totalRemainingProtein, handleAddedProtein, handleDeletedProtein] =
    useCalculation(Number(props.totals[0].protein));
  const [totalRemainingFat, handleAddedFat, handleDeletedFat] = useCalculation(
    Number(props.totals[0].fat)
  );

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
        handleDeletedCarb={handleDeletedCarb}
        totalRemainingProtein={totalRemainingProtein}
        handleAddedProtein={handleAddedProtein}
        handleDeletedProtein={handleDeletedProtein}
        totalRemainingFat={totalRemainingFat}
        handleAddedFat={handleAddedFat}
        handleDeletedFat={handleDeletedFat}
        totalCombinedCarb={totalCombinedCarb}
        handleCombinedCarb={handleCombinedCarb}
        totalCombinedProtein={totalCombinedProtein}
        handleCombinedProtein={handleCombinedProtein}
        totalCombinedFat={totalCombinedFat}
        handleCombinedFat={handleCombinedFat}
>>>>>>> fd4d4d6 (working showing of remaining macros for each on addition of new food item)
      />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
<<<<<<< HEAD
        remainingCarb={remainingCarb}
        handleCarbDeleted={handleCarbDeleted}
        remainingProtein={remainingProtein}
        handleProteinDeleted={handleProteinDeleted}
        remainingFat={remainingFat}
        handleFatDeleted={handleFatDeleted}
        handleCarbAdded={handleCarbAdded}
        handleProteinAdded={handleProteinAdded}
        handleFatAdded={handleFatAdded}
=======
        totalRemainingCarb={totalRemainingCarb}
        handleAddedCarb={handleAddedCarb}
        totalRemainingProtein={totalRemainingProtein}
        handleAddedProtein={handleAddedProtein}
        handleDeletedProtein={handleDeletedProtein}
        totalRemainingFat={totalRemainingFat}
        handleAddedFat={handleAddedFat}
        handleDeletedFat={handleDeletedFat}
        totalCombinedCarb={totalCombinedCarb}
        handleCombinedCarb={handleCombinedCarb}
        totalCombinedProtein={totalCombinedProtein}
        handleCombinedProtein={handleCombinedProtein}
        totalCombinedFat={totalCombinedFat}
        handleCombinedFat={handleCombinedFat}
>>>>>>> fd4d4d6 (working showing of remaining macros for each on addition of new food item)
      />
    </Paper>
  );
}

export default LogItems;
