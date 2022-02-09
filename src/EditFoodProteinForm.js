import React from "react";
import TextField from "@mui/material/TextField";
import useFormDigitState from "./hooks/useFormDigitState";

function EditFoodProteinForm({
  allowEditProtein,
  id,
  proteinEdit,
  handleMacro,
  remaining,
  toggleEdit,
}) {
  const [protein, handleProteinChange, resetProtein] =
    useFormDigitState(proteinEdit);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        allowEditProtein(id, protein);
        Number(protein) > Number(proteinEdit)
          ? handleMacro(
              remaining[0].Protein - (Number(protein) - Number(proteinEdit)),
              "Protein"
            )
          : handleMacro(
              remaining[0].Protein + (Number(proteinEdit) - Number(protein)),
              "Protein"
            );
        resetProtein();
        toggleEdit();
      }}
      style={{ marginLeft: "0", width: "50%" }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          margin="normal"
          value={protein}
          onChange={handleProteinChange}
        ></TextField>
      </div>
    </form>
  );
}

export default EditFoodProteinForm;
