import React from "react";
import GoalOptions from "./GoalOptions";
import useFormState from "./hooks/useFormState";

function WeightForm() {
  const [weight, handleChange] = useFormState("");

  return (
    <>
      <form>
        <label>
          Weight:
          <input
            type="text"
            placeholder={weight ? weight : "Pounds"}
            value={weight}
            onChange={handleChange}
          />
        </label>
      </form>
      <GoalOptions weight={weight} />
    </>
  );
}

export default WeightForm;
