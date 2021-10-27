import React from "react";
import MuiTextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
/**
 * options must be an array of objects
 * all of them must have a key="label"
 * ---=>   
 *      [
 *          {label:"sevwerver", ...},
 *          {label:"sevwerver", ...},
 *          {label:"sevwerver", ...}
 *      ]
 * @param {*} props
 * @returns
 */
const ComboBox = (props) => {
  const { options, style, label, onChange } = props;
  const handleChange = (e, value, reason) => {
    onChange?.(e, value, reason);
  };
  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={options || []}
      size="small"
      style={style || { margin: "0 5px" }}
      renderInput={(params) => (
        <MuiTextField
          size="small"
          type="search"
          variant="outlined"
          {...params}
          label={label || ""}
          fullWidth
        />
      )}
      onChange={handleChange}
    />
  );
};
export default ComboBox;
