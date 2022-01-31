import React, { useState } from "react";
import EditFoodForm from "./EditFoodForm";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Food(props) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <Paper>
      <ListItem>
        {isEditing ? (
          <EditFoodForm
            allowEdit={props.allowEdit}
            id={props.food.id}
            item={props.food.item}
            toggleEdit={toggleEdit}
          ></EditFoodForm>
        ) : (
          <>
            <ListItemText>
              {props.food.item}
              {props.food.carb}
              {props.food.protein}
              {props.food.fat}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => props.removeFood(props.food.id)}
                aria-label="Delete"
              >
                <DeleteForeverIcon></DeleteForeverIcon>
              </IconButton>
              <IconButton onClick={toggleEdit} aria-label="Edit">
                <EditIcon></EditIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </Paper>
  );
}
export default Food;
