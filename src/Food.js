import React from "react";
import { v4 as uuidv4 } from "uuid";

function Food(props) {
  return <div key={uuidv4}>{props.food}</div>;
}
export default Food;
