import { useState } from "react";

export default (initialVal) => {
  const [macro, setMacro] = useState(Number(initialVal));
  const handleFoodAddedMacroTotal = (totalNow, val) => {
    setMacro(Number(initialVal) - (totalNow + Number(val)))
  };
  const handleFoodDeletedMacroTotal = (totalNow, val) => {
    setMacro(Number(initialVal) - (totalNow + Number(val)))
  };
  return [macro, handleFoodAddedMacroTotal, handleFoodDeletedMacroTotal];
};

