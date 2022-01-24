import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function FoodList(props) {
  return (
    <Paper>
      <List>
        {props.foods.map(food => (
          <>
            <ListItem>
              <ListItemText>
                {food.item}
              </ListItemText>
            </ListItem>
            <Divider/>
          </>
        ))}
      </List>
    </Paper>
  );
}
export default FoodList;