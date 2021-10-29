import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioGroup(props) {
  const { label, options } = props;
  const [value, setValue] = React.useState("other");
  const handleChange = (e, value) => {
    //console.log("e", e);
    console.log("value", value);
    setValue(value);
  };
  React.useEffect(() => {
    setValue(options[0].value);
  }, [options]);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label={label}
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={value}
      >
        {options &&
          options.map(({ label, value, disabled }, index) => (
            <FormControlLabel
              key={index}
              value={value}
              control={<Radio />}
              label={label}
              disabled={disabled}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}
