import { useState } from "react";

export default (initialVal) => {
  const [macro, setMacro] = useState(initialVal);
<<<<<<< HEAD
  const handleFoodDeletedMacroTotal = (totalNow, val) => {
    setMacro(initialVal - (totalNow - val))
  };
  const handleFoodAddedMacroTotal = (totalNow, val) => {
    setMacro(initialVal - (totalNow + val))
  };
  return [macro, handleFoodDeletedMacroTotal, handleFoodAddedMacroTotal];
=======
  const handleAddFood = (total, macro) => {
    setMacro(initialVal - (Number(total)+Number(macro)));
  };
  const handleDeleteFood = (total, macro) => {
    setMacro(initialVal - (Number(total)-Number(macro)));
  };
  return [macro, handleAddFood, handleDeleteFood];
>>>>>>> fd4d4d6 (working showing of remaining macros for each on addition of new food item)
};

