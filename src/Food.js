import React from "react";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Food(props) {
  return (
    <Paper>
      <ListItem>
        <ListItemText>
          {props.food.item}
          {props.food.carb}
          {props.food.protein}
          {props.food.fat}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            onClick={(e) => props.removeFood(e.target.id)}
            aria-label="Delete"
          >
            <DeleteForeverIcon></DeleteForeverIcon>
          </IconButton>
          <IconButton aria-label="Edit">
            <EditIcon></EditIcon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}
export default Food;
