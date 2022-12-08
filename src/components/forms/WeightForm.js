import React, { useState } from "react";

const WeightForm = (props) => {
  return (
    <div className="flex">
      <label className="mx-auto text-5xl">
        Weight :
        <input
          className="w-24 pl-2 bg-transparent "
          type="text"
          placeholder={props.weight ? props.weight : "Pounds"}
          value={props.weight}
          onChange={props.handleChange}
        />{" "}
        lbs
      </label>
    </div>
  );
};

export default WeightForm;
