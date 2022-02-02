import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";
import useCalculation from "./hooks/useCalculation";

function LogItems(props) {
  const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const { foods, addFood, removeFood, allowEdit } = useFoodState(initialFoods);

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
      />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
        remainingCarb={remainingCarb}
        handleCarbDeleted={handleCarbDeleted}
        remainingProtein={remainingProtein}
        handleProteinDeleted={handleProteinDeleted}
        remainingFat={remainingFat}
        handleFatDeleted={handleFatDeleted}
        handleCarbAdded={handleCarbAdded}
        handleProteinAdded={handleProteinAdded}
        handleFatAdded={handleFatAdded}
      />
    </Paper>
  );
}

export default LogItems;
