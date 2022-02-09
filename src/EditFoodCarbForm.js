import React from "react";
import TextField from "@mui/material/TextField";
import useFormDigitState from "./hooks/useFormDigitState";

function EditFoodCarbForm({
  allowEditCarb,
  id,
  carbEdit,
  handleMacro,
  remaining,
  toggleEdit,
}) {
  const [carb, handleCarbChange, resetCarb] = useFormDigitState(carbEdit);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        allowEditCarb(id, carb);
        Number(carb) > Number(carbEdit)
          ? handleMacro(
              remaining[0].Carb - (Number(carb) - Number(carbEdit)),
              "Carb"
            )
          : handleMacro(
              remaining[0].Carb + (Number(carbEdit) - Number(carb)),
              "Carb"
            );
        resetCarb();
        toggleEdit();
        console.log(remaining);
      }}
      style={{ marginLeft: "0", width: "50%" }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          margin="normal"
          value={carb}
          onChange={handleCarbChange}
        ></TextField>
      </div>
    </form>
  );
}

export default EditFoodCarbForm;
