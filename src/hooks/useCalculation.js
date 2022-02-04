import { useState } from "react";

export default (initialVal) => {
  const [macro, setMacro] = useState(initialVal);
  const handleFoodAddedMacroTotal = (totalNow, val) => {
    setMacro(initialVal - (totalNow + Number(val)))
  };
  const handleFoodDeletedMacroTotal = (totalNow, val) => {
    setMacro(initialVal - (totalNow - Number(val)))
  };
  return [macro, handleFoodAddedMacroTotal, handleFoodDeletedMacroTotal];
};

