import { useState } from "react";

export default (initialVal) => {
  const [calories, setCal] = useState(initialVal);
  const handleSubmit = (e) => {
    setCal(initialVal * Number(e.target.id));
  };
  return [calories, handleSubmit];
};
