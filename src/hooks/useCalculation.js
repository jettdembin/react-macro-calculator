import { useState } from "react";

export default (initialVal) => {
  const [calories, setCal] = useState(initialVal);
  const handleSubmit = () => {
    setCal(initialVal);
  };
  return [calories, handleSubmit];
};
