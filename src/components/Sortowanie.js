import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function Sortowanie({ switchState, setterSwitch }) {
  const handleChange = (event) => {
    setterSwitch(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={switchState.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label="Sortowanie A-Z"
      />
    </>
  );
}
export default Sortowanie;
