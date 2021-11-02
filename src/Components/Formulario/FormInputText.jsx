import React, { Fragment, useEffect, useState } from "react";
import { FormLabel } from "@mui/material";
import {  InputAdornment, TextField } from "@mui/material";
const validator=()=>{

}
const FormInputText = (props) => {
  const {
    name,
    onChange,
    value,
    label,
    placeholder,
    style,
    onKeyUp,
    type,
    helperText,error
  } = props;
  const [localValue, setLocalValue] = useState("");
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange?.(e.target.value, name);
  };
  return (
    <Fragment>
      <FormLabel component="legend">{label}</FormLabel>
      <TextField
        onKeyUp={onKeyUp}
        style={style || { margin: "5px 0" }}
        color="primary"
        fullWidth
        id="outlined-email-input"
        placeholder={placeholder}
        variant="outlined"
        size="small"
        value={localValue}
        type={type}
        onChange={handleChange}
        helperText={helperText}
        error={error}
      />
    </Fragment>
  );
};
export default FormInputText;
