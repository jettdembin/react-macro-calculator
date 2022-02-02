import { useState } from "react";

export default (initialVal) => {
  const [macro, setMacro] = useState(initialVal);
  const handleFoodDeletedMacroTotal = (totalNow, val) => {
    setMacro(initialVal - (totalNow - val))
  };
  const handleFoodAddedMacroTotal = (totalNow, val) => {
    setMacro(initialVal - (totalNow + val))
  };
  return [macro, handleFoodDeletedMacroTotal, handleFoodAddedMacroTotal];
};

