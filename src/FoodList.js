import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Food from "./Food";

function FoodList(props) {
  return (
    // <div classNameNameName="Food-items-cntr">
    //   <header>
    //     <div classNameName="Select">
    //       <select name="foods" classNameName="Filter-food">
    //         <option value="all">All</option>
    //         <option value="meats">Meats</option>
    //         <option value="starches">Starches</option>
    //         <option value="vegetables">Vegetables</option>
    //       </select>
    //     </div>
    //     <div className="Food-item-macros">
    //       <div className="Food-item-macro-header">
    //         <h6 data-carb>(C)</h6>
    //       </div>
    //       <div className="Food-item-macro-header">
    //         <h6 data-protein>(P)</h6>
    //       </div>
    //       <div className="Food-item-macro-header">
    //         <h6 data-fat>(F)</h6>
    //       </div>
    //     </div>
    //   </header>
    <Paper>
      <List>
        {props.foods.map((food) => (
          <>
            <Food
              food={food}
              id={food.id}
              key={food.id}
              removeFood={props.removeFood}
            ></Food>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
export default FoodList;
