import React from "react";
import TextField from "@mui/material/TextField";
import useFormDigitState from "./hooks/useFormDigitState";

function EditFoodFatForm({
  allowEditFat,
  id,
  fatEdit,
  handleMacro,
  remaining,
  toggleEdit,
}) {
  const [fat, handleFatChange, resetFat] = useFormDigitState(fatEdit);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        allowEditFat(id, fat);
        //update remaining amount to display correct and also to update storage
        Number(fat) > Number(fatEdit)
          ? handleMacro(
              remaining[0].Fat - (Number(fat) - Number(fatEdit)),
              "Fat"
            )
          : handleMacro(
              remaining[0].Fat + (Number(fatEdit) - Number(fat)),
              "Fat"
            );
        resetFat();
        toggleEdit();
      }}
      style={{ marginLeft: "0", width: "50%" }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          margin="normal"
          value={fat}
          onChange={handleFatChange}
        ></TextField>
      </div>
    </form>
  );
}

export default EditFoodFatForm;
