import React from "react";

import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import Food from "./Food";

export const FoodList = (props) => {
  if (props.foods.length)
    return (
      <Paper>
        <List>
          {props.foods.map((food, i) => (
            <>
              <Food food={food} id={food.id} key={food.id} {...props}></Food>
              {i < props.foods.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};
export default FoodList;
