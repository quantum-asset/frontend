import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function MuiDatePicker(props) {
  const { onChange, dateValue, startDate, endDate,label } = props;
  const [localvalue, setLocalValue] = React.useState(new Date());
  React.useEffect(() => {
    setLocalValue(dateValue);
  }, [dateValue]);
  const handleChange = (newValue) => {
    setLocalValue(newValue);
    const response = newValue.toLocaleDateString().split("/");
    let objResponse = {
      day: response[0],
      month: response[1],
      year: response[2],
    };
    onChange?.(objResponse);
    console.log(objResponse);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        minDate={startDate || new Date(2021, 2, 10)}
        maxDate={endDate || new Date(2021, 4, 12)}
        label={label || "Date desktop"}
        inputFormat="MM/dd/yyyy"
        value={localvalue}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField size="small" fullWidth {...params} />
        )}
      />
    </LocalizationProvider>
  );
}
