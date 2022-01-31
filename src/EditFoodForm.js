import React from "react";
import useFormState from "./hooks/useFormState";
import TextField from "@mui/material/TextField";

function EditFoodForm({ allowEdit, id, item, toggleEdit }) {
  const [value, handleChange, reset] = useFormState(item);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        allowEdit(id, value);
        reset();
        toggleEdit();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      ></TextField>
    </form>
  );
}

export default EditFoodForm;
