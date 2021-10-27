import React, { Fragment } from "react";
import { FormLabel } from "@mui/material";
import { TextField } from "@material-ui/core";
const FormInputText = (props) => {
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
    <Fragment>
      <FormLabel component="legend">{label}</FormLabel>
      <TextField
        style={style || { margin: "5px 0" }}
        color="primary"
        fullWidth
        id="outlined-email-input"
        placeholder={placeholder}
        variant="outlined"
        size="small"
        value={localValue}
      />
    </Fragment>
  );
};
export default FormInputText;
