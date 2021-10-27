import React, { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
const SearchInputText = (props) => {
  const { name, onChange, value, label, placeholder, style } = props;
  const [localValue, setLocalValue] = useState("");
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange?.({ ...e.target, name });
  };
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      color="primary"
      fullWidth
      id="outlined-email-input"
      label={label || ""}
      type="search"
      placeholder={placeholder || ""}
      autoComplete="current-password"
      variant="outlined"
      style={style || {}}
      size="small"
      onChange={handleChange}
      value={localValue}
    />
  );
};
export default SearchInputText;