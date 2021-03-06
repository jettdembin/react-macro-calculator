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
      style={{ marginLeft: "0", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        style={{}}
        fullWidth
        autoFocus
      ></TextField>
    </form>
  );
}

export default EditFoodForm;
