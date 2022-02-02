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
  const food = props.food;
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <Paper>
      <ListItem style={{ height: "64px" }}>
        {isEditing ? (
          <EditFoodForm
            allowEdit={props.allowEdit}
            id={food.id}
            item={food.item}
            toggleEdit={toggleEdit}
          ></EditFoodForm>
        ) : (
          <>
            <ListItemText>
              {food.item}
              {food.carb}
              {food.protein}
              {food.fat}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  props.handleCarbDeleted(props.remainingCarb, food.carb);
                  props.handleProteinDeleted(props.remainingProtein, food.protein);
                  props.handleFatDeleted(props.remainingFat, food.fat);
                  props.removeFood(food.id)
                }}
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
