import { useState } from "react";

const useFormState = (initialVal) => {
  const [val, setVal] = useState(initialVal);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const reset = () => {
    setVal("");
  };
  return [val, handleChange, reset];
};

export default useFormState;
